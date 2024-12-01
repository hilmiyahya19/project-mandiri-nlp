# Project Mandiri: Language Identifier

## Mata Kuliah
Natural Language Processing

## Deskripsi Proyek
Proyek ini bertujuan untuk membuat aplikasi **Pengenalan Bahasa dari Input Teks** (Language Identifier). Aplikasi ini akan mendeteksi bahasa dari teks yang dimasukkan pengguna dengan memanfaatkan framework React untuk frontend dan Flask untuk backend.

## Teknologi yang Digunakan
### Frontend
- **React** dengan Vite sebagai build tool
- **JavaScript** sebagai bahasa pemrograman
- **Tailwind CSS** untuk styling

### Backend
- **Python** untuk logika dan pemrosesan Natural Language Processing (NLP)
- **Flask** sebagai framework backend
- **langdetect** untuk deteksi bahasa
- **pycountry** untuk mendapatkan nama lengkap bahasa

## Struktur Proyek
```
PROJECT-MANDIRI-LANGUAGE-IDENTIFIER/
├── backend/
│   ├── services/
│   │   └── language_identifier.py
│   ├── utils/
│   │   ├── app.py
│   │   └── requirements.txt
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── LanguageIdentifier.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── vite.config.js
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Cara Menjalankan Proyek

### Prasyarat
1. **Node.js** versi terbaru (untuk frontend)
2. **Python** versi 3.x (untuk backend)
3. Paket-paket yang diperlukan di `package.json` (frontend) dan `requirements.txt` (backend)

### Langkah-langkah
#### Frontend
1. Navigasikan ke direktori frontend.
2. Jalankan perintah berikut untuk menginstal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server lokal:
   ```bash
   npm run dev
   ```

#### Backend
1. Navigasikan ke direktori backend.
2. Instal dependensi Python:
   ```bash
   pip install -r requirements.txt
   ```
3. Jalankan server backend:
   ```bash
   python utils/app.py
   ```

#### Menjalankan Proyek Secara Keseluruhan
1. Pastikan server backend sudah berjalan.
2. Buka aplikasi frontend melalui server lokal yang telah disiapkan.
3. Interaksi antara frontend dan backend dilakukan melalui API yang disediakan oleh server backend.

## Pengembang
- **Nama:** Hilmi Yahya
- **Kelas:** 5TI01
