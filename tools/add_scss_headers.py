#!/usr/bin/env python3
import sys
from pathlib import Path

COMPONENTS_DIR = Path(__file__).resolve().parents[1] / 'src' / 'scss' / 'components'

HEADER_TEMPLATE = """// Component: {name}
//
// Description: Component styles for {name}
//

// Variables
//

// Properties
//

// Styles
//

"""

def make_name(filename: str) -> str:
    name = filename
    if name.startswith('_'):
        name = name[1:]
    if name.endswith('.scss'):
        name = name[:-5]
    name = name.replace('-', ' ')
    return name


def process_file(path: Path):
    text = path.read_text(encoding='utf-8')
    # If header already present (Component:), skip
    if 'Component:' in '\n'.join(text.splitlines()[0:5]):
        return False
    name = make_name(path.name)
    header = HEADER_TEMPLATE.format(name=name)
    new_text = header + text
    path.write_text(new_text, encoding='utf-8')
    return True


def main():
    if not COMPONENTS_DIR.exists():
        print(f"Components dir not found: {COMPONENTS_DIR}")
        sys.exit(1)
    scss_files = sorted(COMPONENTS_DIR.glob('*.scss'))
    changed = []
    for f in scss_files:
        try:
            if process_file(f):
                changed.append(str(f))
        except Exception as e:
            print(f"Failed to process {f}: {e}")
    print(f"Processed {len(scss_files)} files, updated {len(changed)} files")
    for c in changed:
        print(c)

if __name__ == '__main__':
    main()
