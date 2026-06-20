# kampalanlari.co

Türkiye'nin kamp alanları rehberi. Next.js App Router ile SSG/ISR destekli, SEO odaklı statik site.

## Özellikler

- **SSG + ISR**: Tüm il/ilçe/kamp yeri sayfaları `generateStaticParams()` ile statik üretilir, `revalidate: 3600` ile saatlik yenilenir
- **SEO**: Canonical URL, breadcrumb, sitemap.xml, robots.txt, boş sayfalarda noindex
- **Internal linking**: Yakındaki kamp alanları, komşu ilçeler, footer site haritası
- **Responsive**: Mobil uyumlu tasarım, lazy loading görseller

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Ortam değişkenlerini ayarla
cp .env.example .env.local

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Build & Deploy

```bash
# Production build
npm run build

# Production sunucusu
npm start
```

Build hatasız tamamlanmalıdır. Vercel, Netlify veya benzeri platformlara deploy edilebilir.

### Ortam Değişkenleri

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | Kanonik site URL'i (ör. `https://kampalanlari.co`) |
| `NEXT_PUBLIC_CANONICAL_HOST` | www olmadan host adı |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Opsiyonel — harita widget'ı için |

## Yeni Veri Ekleme

Veriler `src/data/` klasöründeki TypeScript ve JSON dosyalarında tutulur.

### Yeni İl / İlçe Ekleme

`src/data/iller.json` dosyasındaki ilgili bölgeye il veya ilçe objesi ekleyin:

```json
{
  "slug": "trabzon",
  "name": "Trabzon",
  "description": "...",
  "image": "https://...",
  "popular": true,
  "coordinates": { "lat": 41.0, "lng": 39.7 },
  "districts": [
    {
      "slug": "uzungol",
      "name": "Uzungöl",
      "description": "...",
      "neighbors": ["caykara", "ikizdere"],
      "coordinates": { "lat": 40.6, "lng": 40.3 }
    }
  ]
}
```

İlçe eklerken `neighbors` dizisindeki slug'ların mevcut ilçelerle eşleştiğinden emin olun.

### Yeni Kamp Alanı Ekleme

`src/data/campsites/{bölge}.ts` dosyasına ekleyin — bölgeye göre dosya seçin:

- `ege.ts`
- `marmara.ts`
- `akdeniz.ts`
- `karadeniz.ts`

Kayıtlar `src/data/campsites/index.ts` üzerinden birleştirilir.

```typescript
{
  slug: "uzungol-doga-kampi",
  name: "Uzungöl Doğa Kampı",
  provinceSlug: "trabzon",
  districtSlug: "uzungol",
  shortDescription: "...",
  description: "...",
  features: [{ icon: "🌲", label: "Orman İçi" }],
  images: [IMAGES.forest, IMAGES.valley],
  rating: 4.5,
  reviewCount: 50,
  category: "orman",
  coordinates: { lat: 40.6, lng: 40.3 },
  googleMapsEmbed: mapEmbed(40.6, 40.3),
  transport: "Ulaşım bilgisi...",
  createdAt: "2026-06-19",
  // Opsiyonel:
  telephone: "+90 ...",
  website: "https://...",
  priceRange: "150-300 TL/gece",
}
```

Veri ekledikten sonra `npm run build` ile SSG'nin sorunsuz çalıştığını doğrulayın.

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── kamp-alanlari/
│   │   └── [il]/[ilce]/[slug]/
│   ├── kategori/[slug]/
│   ├── rehberler/[slug]/
│   ├── [slug]/             # Tematik landing sayfaları
│   ├── arama/
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # React bileşenleri
├── data/
│   ├── iller.json          # İl / ilçe coğrafi veri
│   ├── campsites/          # Bölgesel kamp kayıtları (ege, marmara, ...)
│   ├── categories.ts
│   ├── guides.ts
│   ├── landing-pages.ts
│   └── corporate-pages.ts
└── lib/                    # Yardımcı fonksiyonlar, tipler, SEO, içerik
    ├── content/            # Editöryal metinler (il/ilçe/kamp supplement)
    ├── landing-pages/
    └── seo/
```

## Renk Paleti

Projede **Orman & Kehribar** paleti kullanılmaktadır:
- Forest Green `#2D4A3E` — ana renk
- Amber Gold `#C4A035` — vurgu
- Earth Brown `#8B5E3C` — ikincil
- Cream `#F7F5F0` — arka plan

## Lisans

Özel proje.
