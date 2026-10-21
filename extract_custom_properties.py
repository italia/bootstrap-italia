import os
import re
import functools
import operator
import json
import subprocess


SCSS_BASE_PATH = os.path.join('src', 'scss')
OUTPUT_JSON = os.path.join('api', 'custom_properties.json')
OUTPUT_JSON_JEKYLL = os.path.join('_data', 'cprops.json')
EXCLUDED_FOLDERS = ['base']

mapped_vars = {}


# Substitute in `src/scss/base/_root.scss` the string `@use 'design-tokens-italia/` with `@use '../../../node_modules/design-tokens-italia/` to ensure that the design tokens are correctly imported from the node_modules folder. This is necessary because the `_root.scss` file is located in the `src/scss/base/` directory, and we need to go up three levels to reach the `node_modules` folder.
with open(os.path.join(SCSS_BASE_PATH, 'base', '_root.scss'), 'r') as f:
    root_scss_content = f.read()
root_scss_content = root_scss_content.replace("@use 'design-tokens-italia/", "@use '../../../node_modules/design-tokens-italia/")
with open(os.path.join(SCSS_BASE_PATH, 'base', '_root.scss'), 'w') as f:
    f.write(root_scss_content)


# Generate root.scss file with all the custom properties from _root.scss and the design tokens

ROOT_COMPILATION_CMD = "node -e \"const sass = require('sass');const result = sass.compile('src/scss/base/_root.scss');console.log(result.css);\""

result = subprocess.run(ROOT_COMPILATION_CMD, shell=True, stdout=subprocess.PIPE)
result.stdout

# Write the compiled CSS to /src/scss/components/_root.scss file
with open(os.path.join(SCSS_BASE_PATH, 'components', '_root.scss'), 'w') as broot_file:
    broot_file.write("// Properties\n\n" + result.stdout.decode('utf-8').replace('--bsi', '--#{$prefix}') + "\n\n// Styles\n")


# Revert the changes made to `src/scss/base/_root.scss` to restore the original import statement for design tokens
with open(os.path.join(SCSS_BASE_PATH, 'base', '_root.scss'), 'r') as f:
    root_scss_content = f.read()
root_scss_content = root_scss_content.replace("@use '../../../node_modules/design-tokens-italia/", "@use 'design-tokens-italia/")
with open(os.path.join(SCSS_BASE_PATH, 'base', '_root.scss'), 'w') as f:
    f.write(root_scss_content)

# Look for all available variables

for root, dirs, files in os.walk(SCSS_BASE_PATH, topdown=True):
    dirs[:] = [d for d in dirs if d not in EXCLUDED_FOLDERS]
    for file in files:
        if file.endswith(".scss"):
            css_file_to_inspect = os.path.join(root, file)
            css_file_to_inspect_name = css_file_to_inspect.replace(SCSS_BASE_PATH, '').replace('/components/', '')
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
                            selector = re.match(r'^\s*([.#:][a-z0-9-]+)\s*{', line)
                            if selector:
                                selector = selector.group(1)
                                selector = selector.replace(".", "")
                                if selector.startswith(":root"):
                                    selector = selector.replace(":root", file.replace(".scss", "").replace("_", ""))
                        else:
                            vars.append(re.findall(r'\s+(--#{\$prefix}[a-z0-9-]+):\s(.*);(\s\/\/.*)?', line))
            if selector and vars:
                vars = (functools.reduce(operator.iconcat, vars, []))
                print (f"📤 Extracting variables for `.{selector}` selector from {css_file_to_inspect}.scss file")
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
                            'other_values': [],
                            'files': [css_file_to_inspect_name]
                        })


for root, dirs, files in os.walk(SCSS_BASE_PATH, topdown=True):
    dirs[:] = [d for d in dirs if d not in EXCLUDED_FOLDERS]
    for file in files:
        if file.endswith(".scss"):
            css_file_to_inspect = os.path.join(root, file)
            css_file_to_inspect_name = css_file_to_inspect.replace(SCSS_BASE_PATH, '').replace('/components/', '')
            with open(css_file_to_inspect, "r") as f:
                inspect_other_values = False
                vars = []
                for line in f:
                    if '// Styles' in line:
                        inspect_other_values = True
                    if inspect_other_values:
                        for new_var in re.findall(r'\s+(--#{\$prefix}[a-z0-9-]+):\s(.*);(\s\/\/.*)?', line):
                            name, value, description = new_var
                            name = name.replace("--#{$prefix}", "--bsi-")
                            value = value.replace("--#{$prefix}", "--bsi-")
                            # Check if the variable already exists in the mapped_vars dictionary
                            for selector, variables in mapped_vars.items():
                                for existing_var in variables:
                                    if existing_var['variable-name'] == name:
                                        # If the variable already exists, add the new value to the other_values list
                                        if value != existing_var['value'] and value not in existing_var['other_values']:
                                            existing_var['other_values'].append(value)
                                        if css_file_to_inspect_name not in existing_var['files']:
                                            existing_var['files'].append(css_file_to_inspect_name)
                                        break
                                else:
                                    continue
                                break

for variables in mapped_vars.values():
    for var in variables:
        var['other_values'] = sorted(var['other_values'])
        var['files'] = sorted(var['files'])

with open(OUTPUT_JSON, "w") as fapi:
    fapi.write(json.dumps(mapped_vars, sort_keys=True, indent=4))

with open(OUTPUT_JSON_JEKYLL, "w") as fapi:
    fapi.write(json.dumps(mapped_vars, sort_keys=True, indent=4))
