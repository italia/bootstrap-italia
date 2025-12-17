#!/usr/bin/env python3
import sys
from pathlib import Path

COMPONENTS_DIR = Path(__file__).resolve().parents[1] / 'src' / 'scss' / 'components'


def find_block_bounds(text, start_pos):
    # Find first '{' after start_pos
    idx_open = text.find('{', start_pos)
    if idx_open == -1:
        return None
    # Walk forward to find matching '}' using counter
    i = idx_open
    depth = 0
    while i < len(text):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                return (start_pos, i+1)
        i += 1
    return None


def process_file(path: Path):
    text = path.read_text(encoding='utf-8')
    # If no marker, skip
    marker = '// Component properties'
    if marker not in text:
        return False
    header_props_marker = '// Properties\n//\n'
    if header_props_marker not in text:
        return False
    marker_idx = text.find(marker)
    # Extract comment lines and the following rule block
    # We want to include the marker line, following blank line(s), and the CSS rule block
    # Start from marker_idx; find the block bounds
    blk_bounds = find_block_bounds(text, marker_idx)
    if not blk_bounds:
        print(f"No block found in {path}")
        return False
    blk_start, blk_end = blk_bounds
    block_text = text[blk_start:blk_end]
    # Clean up: remove leading/trailing blank lines in block_text
    block_text = block_text.rstrip() + '\n\n'
    # Remove the block from original place
    new_text = text[:blk_start] + text[blk_end:]
    # Insert block into header properties location (after header marker)
    new_text = new_text.replace(header_props_marker, header_props_marker + block_text, 1)
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
