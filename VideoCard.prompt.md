Video thumbnail card for the reels / videographer grid — a 16:9 thumb with a stroked play glyph and a title + description footer. Lifts on hover; the play glyph brightens and scales `1.08`.

```jsx
<VideoCard title="Brand Story" desc="Company brand narrative" onClick={openModal} />
<VideoCard title="Product Launch" desc="New product reveal" thumbnail="assets/imagery/AW1.jpg" />
```

- Place in a 3-column grid with `gap: 24px` (collapses to 1 column on mobile).
- `onClick` typically opens a Vimeo modal player.
