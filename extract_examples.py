import json
import os
import re

from liquid import Template, Environment
from yaml import load, dump
try:
    from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
    from yaml import Loader, Dumper


def jsonify(input):
    return json.dumps(input)


env = Environment()
env.add_filter("jsonify", jsonify)


def get_globals(path):
    globals = {"data" : {}}
    for file in os.listdir(path):
        with open(os.path.join(path, file)) as f:
            globals["data"][file.replace(".yml", "")] = load(f, Loader=Loader)
    return globals


def parse_liquid_template(template):
    globals = get_globals(os.path.join("_data"))
    liquid_tpl = env.from_string(template)
    rendered = liquid_tpl.render(site=globals)
    rendered = re.sub("\s?no_toc\s?", "", rendered)
    rendered = re.sub("\s?class=\"\s?\"", "", rendered)
    return rendered


def search_name_for_example(file_path, examples):
    new_file_path = file_path.replace(".md", "")
    return f"{os.path.basename(new_file_path)}-{(len(examples) + 1)}"


def search_examples_in_file(file_path):
    examples = []
    with open(file_path, 'r') as f:
        content = f.read()
        for x in re.finditer("({% comment %}Example name\: (.*?){% endcomment %}\n)?{% capture example %}((.|\n)*?){% endcapture %}", content):
            examples.append({
                "name": x.group(2) or search_name_for_example(file_path, examples),
                "content" : parse_liquid_template(x.group(3))
            })
        return examples


def generate_examples_json(file_path, examples):
    new_file_path = file_path.replace(".md", ".json").replace("docs", "api")
    os.makedirs(os.path.dirname(new_file_path), exist_ok=True)
    with open(new_file_path, "w") as f:
        f.write(json.dumps(examples, indent=4))


for path, subdirs, files in os.walk("docs"):
    for name in files:
        file_path = os.path.join(path, name)
        if file_path.endswith(".md"):
            examples = search_examples_in_file(file_path)
            if (examples):
                generate_examples_json(file_path, examples)
