import os
import re
import functools
import operator
import json


SCSS_BASE_PATH = os.path.join('src', 'scss')
OUTPUT_JSON = os.path.join('api', 'custom_properties.json')
OUTPUT_JSON_JEKYLL = os.path.join('_data', 'cprops.json')

glob_vars = []

def clean_variable(var):
    return var #.replace(':', '')

# Look for all available variables

for root, dirs, files in os.walk(SCSS_BASE_PATH):
    for file in files:
        if file.endswith(".scss"):
            css_file_to_inspect = os.path.join(root, file)
            with open(css_file_to_inspect, "r") as f:
              vars = []
              for line in f:
                if '// Styles' in line:
                   break
                vars.append(re.findall(r'\s(--#{\$prefix}[a-z-].*):\s(.*);(\s\/\/.*)?', line))
              vars = (functools.reduce(operator.iconcat, vars, []))
              glob_vars.extend(vars)

# Map variables with prefix (e.g. dropdown, form ecc..)
mapped_vars = {}

for pkt in glob_vars:
    var = pkt[0].replace("--#{$prefix}", "")
    prefixes = var.split('-')
    if len(prefixes) > 1:
        prefix = clean_variable(prefixes[0])
        if prefix not in mapped_vars:
            mapped_vars[prefix] = []
        final_var_name = f"--bsi-{clean_variable(var)}"
        mapped_vars[prefix].append({
          'variable-name': final_var_name,
          'value': pkt[1].replace("--#{$prefix}", "--bsi-"),
          'description': pkt[2].replace('//', '').strip().capitalize()
        })


with open(OUTPUT_JSON, "w") as fapi:
  fapi.write(json.dumps(mapped_vars, sort_keys=True, indent=4))

with open(OUTPUT_JSON_JEKYLL, "w") as fapi:
  fapi.write(json.dumps(mapped_vars, sort_keys=True, indent=4))
