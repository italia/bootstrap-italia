import json
import os
import re


def search_name_for_example(file_path, examples):
    new_file_path = file_path.replace(".md", "")
    return f"{os.path.basename(new_file_path)}-{(len(examples) + 1)}"

def search_examples_in_file(file_path):
    examples = []
    with open(file_path, 'r') as f:
        content = f.read()
        for x in re.finditer("({% comment %}Example name\: ([a-zA-Z0-9_ ]+){% endcomment %}\n)?{% capture example %}((.|\n)*?){% endcapture %}", content):
            examples.append({
                "name": x.group(2) or search_name_for_example(file_path, examples),
                "content" : x.group(3)
            })
        return examples


def generate_examples_json(file_path, examples):
    with open(file_path.replace(".md", ".json"), "w") as f:
        f.write(json.dumps(examples, indent=4))


for path, subdirs, files in os.walk("."):
    for name in files:
        file_path = os.path.join(path, name)
        if file_path.endswith(".md"):
            examples = search_examples_in_file(file_path)
            if (examples):
                generate_examples_json(file_path, examples)
