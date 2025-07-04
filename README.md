# Ege Harfiyat Yıkım Landing Page

Bu proje, İzmir/Türkiye merkezli profesyonel moloz atımı ve yıkım firması Ege Harfiyat Yıkım için hazırlanmış, minimalist ve modern bir landing page örneğidir. Mobilden masaüstüne kadar mükemmel uyum, hızlı açılış, yüksek SEO uyumu ve kullanıcı dostu arayüz hedeflenmiştir.

## Dosya Yapısı

```
project-root/
│
├── index.html            # Ana HTML dosyası, tüm içerik tek sayfa içinde
├── styles.css            # Modern, minimal, responsive CSS dosyası
├── main.js               # (Opsiyonel) Interaktiflik ve animasyonlar için JS
│
├── /icons                # SVG ikonlar (her bir hizmet ve avantaj için, optimize edilmiş)
│     ├── wall.svg
│     ├── debris.svg
│     ├── bath.svg
│     ├── ...
│
├── /gallery              # Galeri görselleri (before-after ve thumb/full)
│     ├── before1.webp
│     ├── after1.webp
│     ├── thumb1.webp
│     └── ...
│
├── /clients              # Müşteri fotoğrafları
│     ├── client1.webp
│     └── ...
│
├── /clients                 # Blog thumbnail görselleri
│     ├── thumb1.webp
│     └── ...
│
└── hero-bg.webp          # Bulanık arka plan için görsel
```

## Kısa Açıklamalar

* **index.html:** Tüm bölümler tek sayfa içinde, SEO için semantic ve structured data içerir.
* **styles.css:** Ana tema, responsive grid, fade animasyonlar, hover geçişler.
* **main.js:** Galeri lightbox, sayaç animasyonları, testimonials carousel, hamburger menü ve FAQ açılır kapanır gibi interaktif davranışlar.
* **/icons:** Her bir hizmet kartı ve avantaj bullet’ı için kendi inline SVG dosyası. (SEO ve hız için önerilir, arka plan olarak değil.)
* **/gallery, /clients, /blog:** Görsellerin yüksek performanslı, WebP formatında olması tavsiye edilir. Her bir görsele alt ve srcset verilmeli.
* **hero-bg.webp:** Blurred veya yarı opak bir inşaat/şantiye temalı görsel.

## Kurulum ve Kullanım

1. Proje klasörünü kopyalayın.
2. Tüm görselleri optimize ederek yerleştirin (WebP, uygun boyutlar, lazy load).
3. HTML ve CSS’i sunucunuza/hosting’inize doğrudan yükleyebilirsiniz.
4. `main.js` dosyasını HTML’de eklemeyi unutmayın (galeri, sayaç, menü için gerekli).

## Geliştirici Notları

* SEO ve erişilebilirlik için görsel ve ikonlarda `alt` ve `aria-label` unutulmamalı.
* Hamburger menü, slider ve sayaç animasyonları için Vanilla JS yeterli. React/Vue gibi framework gerekmez.
* Her şeyde minimalist, hızlı ve kullanışlı kalın. Fazla efektten kaçının.

---

Devamında örnek **main.js** veya SVG ikon seti ister misiniz?
