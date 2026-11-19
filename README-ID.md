# AI Assistant Webchat — Panduan Bahasa Indonesia

Proyek awal ini membuat:
- Halaman chat yang bisa dibuka melalui link.
- Endpoint backend `/api/chat` yang menghubungkan chat ke OpenAI.
- Halaman `/embed` yang dapat ditampilkan di website lain menggunakan iframe.

## Yang perlu disiapkan
1. Akun GitHub untuk menyimpan kode.
2. Akun Vercel untuk hosting.
3. Akun OpenAI Platform dan API key.
4. Komputer/laptop untuk langkah instalasi lokal. Jika hanya memakai HP, proses setup awal lebih sulit; minta bantuan orang dewasa/pendamping yang memahami komputer.

## Menjalankan di komputer
1. Instal Node.js versi LTS dari https://nodejs.org/
2. Ekstrak ZIP proyek ini.
3. Buka Terminal/Command Prompt di folder `ai-assistant-webchat`.
4. Jalankan `npm install`.
5. Salin `.env.example` menjadi `.env.local`.
6. Isi `OPENAI_API_KEY` dengan API key milikmu. Jangan bagikan key ini kepada siapa pun dan jangan pernah menaruhnya di kode frontend.
7. Jalankan `npm run dev`.
8. Buka `http://localhost:3000`.

## Deploy ke Vercel
1. Buat repository GitHub dan unggah seluruh isi folder proyek.
2. Masuk ke https://vercel.com/ dan impor repository tersebut.
3. Pada Project Settings > Environment Variables, tambahkan:
   - `OPENAI_API_KEY` = API key OpenAI
   - `OPENAI_MODEL` = `gpt-4.1-mini`
4. Deploy atau lakukan redeploy setelah menambahkan environment variables.
5. Setelah berhasil, Vercel memberikan URL seperti `https://nama-proyek.vercel.app`.

## Link dan embed
- Link chatbot: `https://DOMAIN-KAMU/`
- Halaman untuk iframe: `https://DOMAIN-KAMU/embed`

Contoh kode untuk dipasang di HTML website:

```html
<iframe
  src="https://DOMAIN-KAMU/embed"
  title="AI Assistant"
  width="100%"
  height="650"
  style="border:0;border-radius:16px;overflow:hidden"
  loading="lazy"
></iframe>
```

Ganti `DOMAIN-KAMU` dengan domain Vercel milikmu.

## Catatan penting sebelum dipakai publik
Ini adalah starter/MVP, belum siap untuk penggunaan publik berskala besar. Belum ada login admin, pembatasan pemakaian per pengunjung, moderasi, rate limiting, pencatatan biaya, penyimpanan riwayat permanen, atau perlindungan penyalahgunaan endpoint. Jangan mengumpulkan data pribadi sensitif. Tambahkan autentikasi, rate limit, validasi origin untuk embed, pemantauan biaya, dan kebijakan privasi sebelum membuka akses publik.
