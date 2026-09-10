# Burhan Tekyıldız

Burhan Tekyıldız için müzik ve video odaklı kişisel site. **Hayatım** sayfasında Kulu’dan Danimarka’ya uzanan hikâye var; ana sayfada çalar, klipler ve iletişim.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://127.0.0.1:43147](http://127.0.0.1:43147) açılır.

## Kendi işlerini eklemek

Katalog `src/lib/catalog.ts` dosyasında.

- **Media Player / Video:** YouTube klipleri (`youtubeId`). Simply’ye müzik dosyası yüklemeye gerek yok.
- Kapaklar: YouTube küçük resmi veya `public/covers/`
- Fotoğraflar: `public/photos/`

Yeni şarkı için YouTube linkindeki `v=` kodunu `tracks` listesine ekle.

## Tasarım notu

Birlikte bakılabilecek üç yön vardı:

1. **Midnight Atölye** (seçilen) — sinema karanlığı, altın vurgu, müzik + film aynı sahne
2. Açık editorial dergi — daha çok fotoğraf/yazı, müzik ikinci planda kalırdı
3. Neon kulüp — elektronik türe kilitler, video işini boğardı

İsim, biyografi, sosyal linkler ve parçalar `catalog.ts` içinden değişir.

## Automatisk opdatering (GitHub → Simply)

Når koden ligger på GitHub, og secrets er sat, sker dette ved hver push til `main`:

1. GitHub bygger sitet
2. Filene uploades automatisk til Simply `public_html`
3. [burhantekyildiz.com](https://burhantekyildiz.com) opdateres

### Engangsopsætning af secrets

1. Åbn repo: [burhantekyildiz91-maker/muse-stream](https://github.com/burhantekyildiz91-maker/muse-stream)
2. Gå til **Settings** → **Secrets and variables** → **Actions**
3. Tryk **New repository secret** tre gange og opret:

| Secret-navn | Hvor finder du værdien |
|---|---|
| `FTP_SERVER` | Simply → File Manager → **Loginoplysninger** (FTP-vært / host) |
| `FTP_USERNAME` | Samme sted (brugernavn) |
| `FTP_PASSWORD` | Samme sted (adgangskode) |

**Send aldrig adgangskoden i chatten** — kun ind i GitHub Secrets.

4. Gå til **Actions** → vælg **Deploy til Simply** → **Run workflow**

Hvis upload fejler med “folder not found”, sig til — så ændrer vi `server-dir` i workflow-filen.

### Lokal udvikling

```bash
npm install
npm run dev
```

Tarayıcıda [http://127.0.0.1:43147](http://127.0.0.1:43147).

Musik afspilles via YouTube, så Simply `muzik`-mappen er ikke nødvendig for afspilning.
