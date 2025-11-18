import os
import re
import functools
import operator
import json


SCSS_BASE_PATH = os.path.join('src', 'scss')

glob_vars = []

def clean_variable(var):
    return var.replace(':', '').replace('$', '')

# Look for all available variables

for root, dirs, files in os.walk(SCSS_BASE_PATH):
    for file in files:
        if file.endswith(".scss"):
            css_file_to_inspect = os.path.join(root, file)
            print(css_file_to_inspect)
            vars = [re.findall(r'^\$.*:',line) for line in open(css_file_to_inspect)]

            vars = (functools.reduce(operator.iconcat, vars, []))

            glob_vars.extend(vars)

# Map variables with prefix (e.g. dropdown, form ecc..)

mapped_vars = {}

for var in glob_vars:
    prefixes = var.split('-')
    if len(prefixes) > 1:
        prefix = clean_variable(prefixes[0])
        if prefix not in mapped_vars:
            mapped_vars[prefix] = []
        mapped_vars[prefix].append(clean_variable(var))


print(json.dumps(mapped_vars, sort_keys=True, indent=4))
