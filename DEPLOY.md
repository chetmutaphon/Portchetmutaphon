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

### สร้าง Bucket + Folders

ใช้ **bucket เดียว** แล้วแยก folder ข้างใน:

1. ไปที่ [supabase.com](https://supabase.com) → Project ของคุณ
2. **Storage** → **New Bucket**
   - ชื่อ: **`portfolio`** (bucket หลัก)
   - Public: ✓ เปิด
3. สร้าง folder ข้างใน bucket `portfolio`:
   - **`hero`** — รูปพื้นหลังหน้าแรก (อัปโหลด 1 รูป)
   - **`profile`** — รูปโปรไฟล์ใน About (อัปโหลด 1 รูป)
   - **`artwork`** — รูป Design Work
   - **`photography`** — รูป Photography

```
portfolio/              ← bucket หลัก (public)
├── hero/               ← รูปพื้นหลัง Hero (1 รูป)
├── profile/            ← รูปโปรไฟล์ About (1 รูป)
├── artwork/            ← รูป Design Work
│   └── AW1.jpg
└── photography/        ← รูป Photography
    └── Photo1.jpg
```

### Storage Policy (SQL)

รันใน **SQL Editor** ถ้ายังอ่านรูปไม่ได้:

```sql
CREATE POLICY "Public read portfolio"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'portfolio');
```

### Environment Variables ใน Vercel
ไปที่ Vercel Project → Settings → Environment Variables:
```
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

> ⚠️ เพราะเป็น static HTML ไม่มี server-side rendering, ให้ใส่ค่าตรงๆ ใน `index.html` หรือ `sections.jsx` แทน (ดู Section 4)

---

## 4. Supabase Image Integration

### ขั้นตอนที่ 1 — ใส่ credentials

แก้ไฟล์ `ui_kits/portfolio/supabase-config.js`:

```js
window.__SUPABASE_URL = "https://xxxxxxxxxxxx.supabase.co";
window.__SUPABASE_KEY = "your-anon-key-here";
window.__SUPABASE_BUCKET = "portfolio";
```

> ดูตัวอย่างได้ที่ `ui_kits/portfolio/supabase-config.example.js`
> หา URL และ anon key ได้ที่ Supabase Dashboard → **Project Settings** → **API**

### ขั้นตอนที่ 2 — อัปโหลดรูปเข้า Storage

1. Bucket **`portfolio`** → folder **`hero`** — รูปพื้นหลังหน้าแรก (1 รูป)
2. Bucket **`portfolio`** → folder **`profile`** — รูปโปรไฟล์ About (1 รูป)
3. Bucket **`portfolio`** → folder **`artwork`** — รูป Design Work
4. Bucket **`portfolio`** → folder **`photography`** — รูป Photography

ชื่อไฟล์จะถูกใช้เป็นชื่อการ์ดอัตโนมัติ (เช่น `menu-design.jpg` → "menu design")

### ขั้นตอนที่ 3 — Deploy

```bash
git add ui_kits/portfolio/supabase-config.js
git commit -m "Add Supabase credentials"
git push
```

Vercel จะ redeploy อัตโนมัติ — หน้า Artwork และ Photography จะดึงรูปจาก Supabase

### การทำงาน

- `index.html` โหลด Supabase JS + `supabase-config.js` + `supabase-images.js`
- Section **Hero** ดึงรูปพื้นหลังจาก `portfolio/hero/` (รูปล่าสุด 1 รูป)
- Section **About** ดึงรูปโปรไฟล์จาก `portfolio/profile/` (รูปล่าสุด 1 รูป)
- Section **Artwork** ดึงจาก `portfolio/artwork/`
- Section **Photography** ดึงจาก `portfolio/photography/`
- ถ้า Supabase ยังไม่ได้ตั้งค่า หรือ bucket ว่าง → ใช้รูป static fallback จาก `assets/imagery/`

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
│   ├── image-slot.js           ← Drag-drop image placeholder
│   ├── supabase-config.js      ← Supabase URL + anon key (fill in before deploy)
│   ├── supabase-config.example.js
│   └── supabase-images.js      ← useSupabaseImages hook for Storage buckets
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
