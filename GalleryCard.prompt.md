Media tile for the artwork / photography / dashboard grids. Lifts and shadows on hover while a black gradient slides the title up. Falls back to the brand's diagonal-stripe placeholder when no `image` is given.

```jsx
<GalleryCard title="Brand Identity System" label="BRAND IDENTITY" hue={260} />
<GalleryCard title="Food Photography" image="assets/imagery/Photo3.jpg" aspectRatio="3/2" />
```

- Aspect ratios by section: `4/3` artwork, `3/2` photography, `16/9` video & dashboards.
- Place in a CSS grid: `grid-template-columns: repeat(3, 1fr); gap: 20px`.
- `onClick` typically opens a lightbox.
