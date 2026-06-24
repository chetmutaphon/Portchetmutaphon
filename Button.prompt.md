Quiet, pill-shaped call-to-action — use `primary` for the single most important action on a view, `outline` for contact CTAs that fill with ink on hover, `ghost` for low-emphasis text actions.

```jsx
<Button variant="primary">View works</Button>
<Button variant="outline" href="mailto:hi@example.com">Contact me</Button>
<Button variant="ghost" size="sm">Back</Button>
```

- Fully pill (`--radius-pill`) regardless of theme radius — buttons stay round.
- `outline` inverts to an ink fill on hover; `primary` darkens to pure black; `ghost` darkens grey→ink.
- Press shrinks to `0.97`. Pass `href` to render an `<a>`. Use sparingly — this is a restrained, typography-led brand.
