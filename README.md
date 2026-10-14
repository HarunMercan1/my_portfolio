# Mercan Software

Mercan Software'in web sitesi: uygulama tanıtım sayfaları ve gizlilik politikaları.

Next.js (statik export) + Tailwind CSS. Cloudflare Pages üzerinde yayınlanır.

## Geliştirme

```bash
npm install
npm run dev
```

Site http://localhost:3000 adresinde açılır.

## Yeni uygulama ekleme

1. `lib/apps.ts` içindeki `apps` listesine yeni bir kayıt ekle.
2. Simge ve ekran görüntülerini `public/apps/<slug>/` klasörüne koy (`icon.png`, `screen-1.png`, ...).
3. Sayfalar otomatik oluşur:
   - `/apps/<slug>/` – tanıtım sayfası
   - `/apps/<slug>/privacy/` – gizlilik politikası (Play Console'a bu link verilir)

## Yayın

`npm run build` siteyi `out/` klasörüne statik HTML olarak üretir. Cloudflare Pages ayarları:

- Build command: `npm run build`
- Build output directory: `out`
