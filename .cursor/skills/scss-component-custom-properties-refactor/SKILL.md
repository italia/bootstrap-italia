---
name: scss-component-custom-properties-refactor
description: Refactors Bootstrap Italia SCSS component files to CSS custom properties following project patterns. Use when converting Sass variables/hardcoded values to design tokens, aligning selector comments, simplifying state/variant variables, checking nesting depth, and removing redundant declarations without regressions.
---

# SCSS Component Custom Properties Refactor

## Quick Start
Use this skill when refactoring Bootstrap Italia component SCSS files from Sass values to CSS custom properties, while preserving visual behavior and existing component conventions.

## Goal
Apply consistent token-based refactors in component SCSS files (for example `_toolbar.scss`) using the same approach used in component files like `_tab.scss` and `_buttons.scss`.

## Required Workflow
1. Read the target component file.
2. Read at least one reference component (prefer `_tab.scss`, optionally `_buttons.scss`).
3. Read token sources (`_root.scss`; use `_variables.scss` only to resolve legacy values).
4. Refactor.
5. Run lint checks on edited files.

## Refactor Rules

### 1) Replace Sass assignments with root custom properties
- In component property blocks, prefer `var(--#{$prefix}...)` tokens from `_root.scss`.
- If a value is raw (px/rem/rgba), replace it with the closest semantic/root token available.
- Keep fallbacks only when necessary for compatibility.

### 2) Do not create duplicate state/variant properties
- If the same property changes by size/state, keep one property name and reassign it in context.
- Example: keep only `--#{$prefix}toolbar-icon-font-size` and override it in `.toolbar-medium`/`.toolbar-small`.
- Same principle for states (`active`, `disabled`, `hover`): reassign base color properties instead of creating `-active`/`-hover`/`-disabled` duplicates.

### 3) Prefer variable overrides for contextual components
- For nested reusable components (for example `.dropdown-menu` inside toolbar), avoid hardcoded contextual values when possible.
- Override the reusable component token (for example `--#{$prefix}dropdown-box-shadow`) via a local component variable.

### 4) Selector comments style
- Use concise, section-style comments aligned with project components:
  - `// Vertical toolbar`
  - `// Dropdown caret`
  - `// Active state`
- Avoid decorative separators, START/END markers, inconsistent casing, and typos.

### 5) Indentation and nesting
- Keep nesting shallow; do not introduce more than 3 levels of indentation in new/refactored code.
- If legacy code exceeds this depth, do not worsen it; prefer flattening when safe.

### 6) Remove unnecessary CSS safely
- Remove duplicate or overridden declarations only when behavior is unchanged.
- Do not remove contextual overrides that are required for component-specific rendering.

## Validation Checklist
- [ ] Target properties migrated to custom properties/tokens.
- [ ] Sass variable assignments removed from migrated property blocks.
- [ ] Raw values replaced by closest root tokens when available.
- [ ] No duplicate state/size custom property names introduced.
- [ ] Comments aligned to component style.
- [ ] No additional deep nesting introduced.
- [ ] Lint run on edited file; handle introduced issues.

## Notes
- Preserve existing behavior first; visual regressions are not acceptable.
- Existing `!important` warnings can remain if pre-existing and unrelated to the refactor scope.
