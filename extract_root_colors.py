"""
Extract color CSS custom properties from _root.scss and write them to
_data/color-vars.yml for use in Jekyll documentation tables.

Grouped by semantic category (text, link, border, background, status).
The `usage` field is never generated – it is preserved from an existing
color-vars.yml or left empty for manual editing.

Run: python extract_root_colors.py
"""

import os
import re
import yaml

ROOT_SCSS = os.path.join('src', 'scss', 'base', '_root.scss')
OUTPUT_YAML = os.path.join('_data', 'color-vars.yml')

# Maps comment markers in _root.scss to category keys
SECTION_MARKERS = {
    '// Text colors': 'text',
    '// Border colors': 'border',
    '// Background colors': 'background',
    '// Status colors': 'status',
}

# Variables to exclude even if they match the pattern
EXCLUDED_VARS = {
    'color-code',
    'color-outline-focus',
}

# Prefixes allowed per category (guards against stray matches)
CATEGORY_PREFIXES = {
    'text': ('color-text-',),
    'link': ('color-link',),   # matches both color-link and color-link-*
    'border': ('color-border-',),
    'background': ('color-background-',),
    'status': ('color-status-',),
}

VAR_RE = re.compile(r'\s--#\{\$prefix\}([a-z][a-z0-9-]*):\s')


def infer_swatch(var_name):
    """Return the default swatch type for a CSS variable name."""
    if var_name in ('color-border-inverse',):
        return 'border-inverse'
    if var_name.startswith('color-border-'):
        return 'border'
    if var_name in ('color-text-inverse', 'color-link-inverse'):
        return 'inverse-nested'
    if var_name == 'color-background-inverse':
        return 'bg-border'
    return 'bg'


def parse_root_scss():
    """Parse _root.scss and return a dict {category: [{'var': ..., 'swatch': ...}]}."""
    result = {cat: [] for cat in ('text', 'link', 'border', 'background', 'status')}
    current_category = None

    with open(ROOT_SCSS, encoding='utf-8') as f:
        for line in f:
            stripped = line.strip()

            # Detect section changes
            for marker, cat in SECTION_MARKERS.items():
                if stripped == marker or stripped.startswith(marker + ' '):
                    current_category = cat
                    break

            # Skip commented-out variables
            if stripped.startswith('//'):
                continue

            if current_category is None:
                continue

            m = VAR_RE.search(line)
            if not m:
                continue

            var_suffix = m.group(1)  # e.g. "color-text-base"

            if var_suffix in EXCLUDED_VARS:
                continue

            # Determine the actual category: color-link and color-link-* go to
            # 'link' even when encountered in the 'text' section of _root.scss
            if current_category == 'text' and var_suffix.startswith('color-link'):
                target_cat = 'link'
            else:
                target_cat = current_category

            # Validate against expected prefixes for this category
            allowed = CATEGORY_PREFIXES.get(target_cat, ())
            if not any(var_suffix.startswith(p) for p in allowed):
                continue

            full_var = f'--bsi-{var_suffix}'
            result[target_cat].append({
                'var': full_var,
                'swatch': infer_swatch(var_suffix),
            })

    return result


def load_existing_yaml():
    """Load current color-vars.yml if it exists; return empty dict otherwise."""
    if not os.path.exists(OUTPUT_YAML):
        return {}
    with open(OUTPUT_YAML, encoding='utf-8') as f:
        data = yaml.safe_load(f) or {}
    return data


def build_usage_index(existing):
    """Build a flat {var_name: entry} index from existing YAML for fast lookup."""
    index = {}
    for entries in existing.values():
        if not isinstance(entries, list):
            continue
        for entry in entries:
            if 'var' in entry:
                index[entry['var']] = entry
    return index


def merge(parsed, existing_index):
    """
    Merge newly parsed vars with existing data:
    - Preserve 'usage' and manual 'swatch' from existing entries.
    - Add new entries (no 'usage').
    - Warn about removed entries.
    """
    merged = {}
    all_new_vars = {e['var'] for entries in parsed.values() for e in entries}

    # Warn about removed vars
    for old_var in existing_index:
        if old_var not in all_new_vars:
            print(f'[WARNING] Variable removed from _root.scss: {old_var}')

    for cat, entries in parsed.items():
        merged[cat] = []
        for entry in entries:
            var = entry['var']
            if var in existing_index:
                old = existing_index[var]
                merged_entry = {'var': var, 'swatch': old.get('swatch', entry['swatch'])}
                if 'usage' in old:
                    merged_entry['usage'] = old['usage']
            else:
                merged_entry = {'var': var, 'swatch': entry['swatch']}
            merged[cat].append(merged_entry)

    return merged


def write_yaml(data):
    with open(OUTPUT_YAML, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False, sort_keys=False)


if __name__ == '__main__':
    parsed = parse_root_scss()
    existing = load_existing_yaml()
    existing_index = build_usage_index(existing)
    merged = merge(parsed, existing_index)
    write_yaml(merged)
    total = sum(len(v) for v in merged.values())
    print(f'Written {total} color variables to {OUTPUT_YAML}')
    for cat, entries in merged.items():
        missing = [e['var'] for e in entries if 'usage' not in e]
        if missing:
            print(f'  [{cat}] {len(missing)} entries without usage: {", ".join(missing)}')
