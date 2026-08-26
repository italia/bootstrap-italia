import os
import re
import functools
import operator
import json


SCSS_BASE_PATH = os.path.join('src', 'scss')
OUTPUT_JSON = os.path.join('api', 'custom_properties.json')
OUTPUT_JSON_JEKYLL = os.path.join('_data', 'cprops.json')
EXCLUDED_FOLDERS = ['base']

mapped_vars = {}


# Look for all available variables

for root, dirs, files in os.walk(SCSS_BASE_PATH, topdown=True):
    dirs[:] = [d for d in dirs if d not in EXCLUDED_FOLDERS]
    for file in files:
        if file.endswith(".scss"):
            css_file_to_inspect = os.path.join(root, file)
            with open(css_file_to_inspect, "r") as f:
                selector = None
                props_found = False
                vars = []
                for line in f:
                    if '// Properties' in line:
                        props_found = True
                    if props_found:
                        if '// Styles' in line:
                            break
                        if not selector:
                            selector = re.match(r'^\s*([.#][a-z0-9-]+)\s*{', line)
                            if selector:
                                selector = selector.group(1)
                                selector = selector.replace(".", "")
                        else:
                            vars.append(re.findall(r'\s+(--#{\$prefix}[a-z0-9-]+):\s(.*);(\s\/\/.*)?', line))
            if selector and vars:
                vars = (functools.reduce(operator.iconcat, vars, []))
                mapped_vars[selector] = []
                # Map variables with prefix (e.g. dropdown, form ecc..)
                for pkt in vars:
                    var = pkt[0].replace("--#{$prefix}", "--bsi-")
                    duplicate_found = False
                    for existing_var in mapped_vars[selector]:
                        if existing_var['variable-name'] == var:
                            duplicate_found = True
                            existing_var['other_values'].append(pkt[1].replace("--#{$prefix}", "--bsi-"))
                            break
                    # Create a new entry in the mapped_vars dictionary for the variable with the cleaned name and value
                    if not duplicate_found:
                        mapped_vars[selector].append({
                            'variable-name': var,
                            'value': pkt[1].replace("--#{$prefix}", "--bsi-"),
                            'description': pkt[2].replace('//', '').strip().capitalize(),
                            'other_values': []
                        })

print (mapped_vars)

with open(OUTPUT_JSON, "w") as fapi:
    fapi.write(json.dumps(mapped_vars, sort_keys=True, indent=4))

with open(OUTPUT_JSON_JEKYLL, "w") as fapi:
    fapi.write(json.dumps(mapped_vars, sort_keys=True, indent=4))
