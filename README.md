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

Veriler `src/data/` klasöründeki TypeScript dosyalarında tutulur.

### Yeni İl Ekleme

`src/data/provinces.ts` dosyasına yeni bir `Province` objesi ekleyin:

```typescript
{
  slug: "trabzon",           // URL'de kullanılacak slug (küçük harf, tire)
  name: "Trabzon",
  description: "...",        // SEO metni (min. 200 kelime önerilir)
  image: "https://...",      // Unsplash veya kendi CDN'iniz
  popular: true,             // Ana sayfada gösterilsin mi
  coordinates: { lat: 41.0, lng: 39.7 },
}
```

### Yeni İlçe Ekleme

`src/data/districts.ts` dosyasına ekleyin. `provinceSlug` mevcut il slug'ı ile eşleşmeli:

```typescript
{
  slug: "uzungol",
  name: "Uzungöl",
  provinceSlug: "trabzon",
  description: "...",        // İl metninden farklı, özgün SEO içeriği
  neighbors: ["caykara", "ikizdere"],
  coordinates: { lat: 40.6, lng: 40.3 },
}
```

### Yeni Kamp Alanı Ekleme

`src/data/campsites.ts` dosyasına ekleyin:

```typescript
{
  slug: "uzungol-doga-kampi",
  name: "Uzungöl Doğa Kampı",
  provinceSlug: "trabzon",
  districtSlug: "uzungol",
  shortDescription: "...",
  description: "...",
  features: [{ icon: "🌲", label: "Orman İçi" }],
  images: ["https://images.unsplash.com/..."],
  rating: 4.5,
  reviewCount: 50,
  category: "orman",
  coordinates: { lat: 40.6, lng: 40.3 },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",
  transport: "Ulaşım bilgisi...",
  createdAt: "2026-06-19",
}
```

Veri ekledikten sonra `npm run build` ile SSG'nin sorunsuz çalıştığını doğrulayın.

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── kamp-alanlari/
│   │   └── [il]/[ilce]/[slug]/
│   ├── arama/
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # React bileşenleri
├── data/                   # Statik veri (il, ilçe, kamp yeri)
└── lib/                    # Yardımcı fonksiyonlar, tipler, SEO
```

## Renk Paleti

Projede **Orman & Kehribar** paleti kullanılmaktadır:
- Forest Green `#2D4A3E` — ana renk
- Amber Gold `#C4A035` — vurgu
- Earth Brown `#8B5E3C` — ikincil
- Cream `#F7F5F0` — arka plan

## Lisans

Özel proje.
