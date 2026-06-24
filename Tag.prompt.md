Pill tag for listing skills/capabilities (`skill`) or filtering a gallery (`filter`). Skills invert to an ink fill on hover; filter chips toggle with `active`.

```jsx
<div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
  <Tag>Graphic Design</Tag>
  <Tag>Art Direction</Tag>
</div>

<Tag variant="filter" active>All</Tag>
<Tag variant="filter">Photography</Tag>
```

- Always pill-shaped. 14px / weight 500. Use in a `flex` row with `gap: 10px`.
- `skill` is non-interactive (cursor default) but reacts on hover; `filter` is a button-like chip.
