# Animated Login Page — React

Halaman login dengan animasi, dibangun pakai **React 18 + Vite**.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build produksi

```bash
npm run build
npm run preview
```

## Struktur

```
.
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx                  # entry point React
   ├─ App.jsx                   # root komponen
   ├─ styles/
   │  └─ global.css             # variabel tema + reset + animasi latar
   ├─ pages/
   │  └─ LoginPage.jsx          # halaman login
   └─ components/
      ├─ AuroraBackground.jsx   # blob gradasi beranimasi
      ├─ LoginCard.jsx          # kartu kaca
      ├─ InputField.jsx         # input dengan floating label
      ├─ PasswordField.jsx      # input password + toggle lihat/sembunyikan
      ├─ Checkbox.jsx           # checkbox kustom "Ingat saya"
      ├─ SubmitButton.jsx       # tombol gradasi + spinner
      └─ Toast.jsx              # notifikasi bawah layar
```

## Fitur

- Latar aurora beranimasi dengan tiga blob gradasi
- Kartu glassmorphism dengan garis gradasi berputar di tepinya
- Floating label pada kolom email dan password
- Toggle lihat/sembunyikan password
- Tombol submit dengan gradasi bergerak, efek kilau, dan spinner
- Validasi email & password di sisi klien
- Checkbox kustom dan notifikasi toast
- Responsif di HP, menghormati `prefers-reduced-motion`

## Menyambungkan ke API

Edit `handleSubmit` di `src/pages/LoginPage.jsx`:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, remember }),
    });
    if (!res.ok) throw new Error("Email atau password salah");
    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.href = "/dashboard";
  } catch (err) {
    showToast(err.message);
  } finally {
    setLoading(false);
  }
};
```

## Kustomisasi

Ganti warna tema di `src/styles/global.css`:

```css
:root {
  --accent-1: #6d5efc;
  --accent-2: #22d3ee;
  --accent-3: #f472b6;
}
```
