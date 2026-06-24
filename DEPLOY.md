# Chet Mutaphon Portfolio — Deploy Guide

## Stack
- **Frontend**: Vanilla HTML + React 18 (CDN) + Babel standalone
- **Design System**: Chet Mutaphon Design System (`_ds_bundle.js`)
- **Hosting**: Vercel (static)
- **Storage**: Supabase Storage (images)
- **Auth**: localStorage-based admin edit mode (password: `admin2026`)

---

## 1. Push to GitHub

### ตัวเลือก A — ผ่าน VS Code / Cursor
```bash
git init
git remote add origin https://github.com/chetmutaphon/Chetportfolio2026.git
git add .
git commit -m "Initial portfolio deploy"
git push -u origin main
```

### ตัวเลือก B — ผ่าน GitHub Desktop
1. Open GitHub Desktop → Add Existing Repository
2. เลือก folder ที่ download มา
3. Publish repository → เลือก `Chetportfolio2026`

---

## 2. Deploy to Vercel

1. ไปที่ [vercel.com](https://vercel.com) → **Add New Project**
2. Import `chetmutaphon/Chetportfolio2026`
3. Settings:
   - **Framework Preset**: Other
   - **Root Directory**: `.` (root)
   - **Build Command**: _(ปล่อยว่าง)_
   - **Output Directory**: `.` (root)
4. กด **Deploy** ✓

> หน้า portfolio จะออกมาที่ `/` ของ domain อัตโนมัติ เพราะมี `index.html` อยู่ที่ root แล้ว

---

## 3. Supabase Storage Setup

### สร้าง Bucket
1. ไปที่ [supabase.com](https://supabase.com) → Project ของคุณ
2. **Storage** → **New Bucket**
   - ชื่อ: `artwork` (สำหรับ Design Work)
   - Public: ✓ เปิด
3. สร้างอีก bucket:
   - ชื่อ: `photography`
   - Public: ✓ เปิด

### Environment Variables ใน Vercel
ไปที่ Vercel Project → Settings → Environment Variables:
```
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

> ⚠️ เพราะเป็น static HTML ไม่มี server-side rendering, ให้ใส่ค่าตรงๆ ใน `index.html` หรือ `sections.jsx` แทน (ดู Section 4)

---

## 4. Supabase Image Integration (ต่อใน Cursor)

### ติดตั้ง Supabase JS ใน index.html
เพิ่มใน `<head>` ก่อน `_ds_bundle.js`:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
<script>
  window.__SUPABASE_URL = "https://xxxxxxxxxxxx.supabase.co";
  window.__SUPABASE_KEY = "your-anon-key";
  window.__supabase = supabase.createClient(window.__SUPABASE_URL, window.__SUPABASE_KEY);
</script>
```

### แก้ sections.jsx — ดึงภาพจาก Supabase Storage

แทนที่ `const ARTWORK = [...]` ด้วย dynamic loading:

```jsx
function useSupabaseImages(bucket) {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!window.__supabase) return;
    window.__supabase.storage
      .from(bucket)
      .list('', { limit: 50, sortBy: { column: 'created_at', order: 'desc' } })
      .then(({ data, error }) => {
        if (error || !data) return;
        const urls = data
          .filter(f => f.name.match(/\.(jpg|jpeg|png|webp|gif)$/i))
          .map((f, i) => ({
            id: f.name,
            title: f.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
            label: bucket.toUpperCase(),
            hue: (i * 40) % 360,
            img: `${window.__SUPABASE_URL}/storage/v1/object/public/${bucket}/${f.name}`,
          }));
        setImages(urls);
        setLoading(false);
      });
  }, [bucket]);

  return { images, loading };
}

// ใน ArtworkSection:
function ArtworkSection({ onOpen }) {
  const { images, loading } = useSupabaseImages('artwork');
  const items = images.length > 0 ? images : ARTWORK; // fallback to static
  return (
    <section className="section section--alt" id="artwork">
      <div className="section-inner">
        <ScrollReveal><div className="section-head"><SectionLabel title="Design work.">Artwork</SectionLabel></div></ScrollReveal>
        {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-secondary)' }}>Loading...</div>
          : <Grid items={items} aspectRatio="3/4" columns={4} onOpen={onOpen} />}
      </div>
    </section>
  );
}

// เหมือนกันสำหรับ PhotographySection → bucket: 'photography'
```

---

## 5. Admin Edit Mode

- URL ของ deploy แล้ว กด **Login** ที่ nav
- Password: **`admin2026`** (เปลี่ยนได้ใน `app.jsx` บรรทัด `if (pwd === "admin2026")`)
- เมื่อ login: คลิกที่ข้อความใดก็ได้เพื่อแก้ไข, เลือก text แล้วเปลี่ยนสีได้
- การเปลี่ยนแปลงเซฟใน `localStorage` ของ browser

---

## 6. Project Structure

```
/
├── index.html                  ← entry point (Vercel root)
├── vercel.json                 ← Vercel config
├── styles.css                  ← Design system tokens
├── _ds_bundle.js               ← Compiled design system
├── assets/
│   └── imagery/                ← Local fallback images
├── ui_kits/portfolio/
│   ├── sections.jsx            ← All sections + LoginModal + EditToolbar
│   ├── app.jsx                 ← App root + useEditMode hook
│   ├── kit.css                 ← Portfolio-specific styles
│   └── image-slot.js           ← Drag-drop image placeholder
└── components/
    ├── core/                   ← Button, Tag, SectionLabel
    └── portfolio/              ← GalleryCard, VideoCard, TimelineCard
```

---

## 7. Continue in Cursor

เปิด folder ใน Cursor แล้วบอก Claude:

> "This is a static HTML portfolio for Chet Mutaphon. The main entry is `index.html` at root. It uses React 18 (CDN), Babel standalone, and a compiled design system bundle (`_ds_bundle.js`). I want to add Supabase image loading to the Artwork and Photography sections — the code snippet is in `DEPLOY.md` Section 4."

---

*Generated by Claude Design — Chet Mutaphon Design System*
