export type Track = {
  id: string
  title: string
  album: string
  year: string
  youtubeId: string
  cover: string
  note: string
}

export type VideoClip = {
  id: string
  title: string
  youtubeId: string
}

export type LifeChapter = {
  year: string
  title: string
  body: string
}

export const artist = {
  name: "Burhan",
  fullName: "Burhan Tekyıldız",
  role: "Sanatçı · Yönetmen · Özel projeler",
  city: "Kulu · Danimarka",
  email: "info@burhantekyildiz.com",
  tagline: "Gerçek neredeyse ben oradayım.",
  quote:
    "Kimse bir adımda ulaşamaz zirveye, yavaş yavaş çıkarsın bak merdiven önünde!",
  bio: [
    "5 Kasım 1990’da Konya’nın Kulu ilçesinde doğdu. 2006’da Danimarka’ya geldi; evindeki küçük stüdyoda müziğe başladı, ardından yönetmen koltuğuna da oturdu.",
    "İlk profesyonel single’ı «İnsan Var», ardından «Keke». Şimdi 15 şarkılık «Bu Nasıl Aşk» albümü yılbaşı için hazırlanıyor.",
  ],
  socials: [
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@BurhanTekyildiz",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/burhantekyildiz",
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@burhantekyildizofficial",
    },
    {
      id: "spotify",
      label: "Spotify",
      href: "https://open.spotify.com/artist/2vfklrL0ac34PJyf6uQXFk",
    },
  ] as const,
}

export type SocialId = (typeof artist.socials)[number]["id"]

export const lifeChapters: LifeChapter[] = [
  {
    year: "1990",
    title: "Kulu",
    body: "5 Kasım 1990 yılında Konya’nın Kulu ilçesinde doğdu. İlkokulunu Fatih İlköğretim Okulu’nda bitirdi.",
  },
  {
    year: "2006",
    title: "Danimarka",
    body: "Liseye başlamadan Danimarka vizesi çıkan Burhan Tekyıldız, 2006 yılında Danimarka’ya gelir ve liseyi orada tamamlar.",
  },
  {
    year: "Atölye",
    title: "Ev stüdyosu",
    body: "Amatörce, evindeki küçük bir stüdyo ile müziğe başlar. Kısa sürede Danimarka halkına kendini sevdirir.",
  },
  {
    year: "Single",
    title: "İnsan Var",
    body: "On yıl aradan geçer. Burhan Tekyıldız ilk kez profesyonel anlamda ilk single’ı «İnsan Var»ı parça ve klip olarak çıkarır. Şarkı büyük ilgi görür, insanlar tarafından çok sevilir.",
  },
  {
    year: "Klip",
    title: "Keke",
    body: "Hayatın gerçeklerini anlatan, «Gerçek neredeyse ben oradayım» diyen genç sanatçı ikinci çalışmasına başlar ve bomba gibi bir single çıkarır: «Keke». Yönetmenliğini de üstlenir; yönetmen koltuğuna oturur ve Danimarka’daki sanatçılara klip bile çeker. «Keke» dilden dile dolaşır.",
  },
  {
    year: "Albüm",
    title: "Bu Nasıl Aşk",
    body: "Şimdilerde albüm aşamasındadır. «Bu Nasıl Aşk» — 15 şarkılık, onun hikâyesi — yılbaşında sizlerle olacak. Başarılı genç sanatçı aynı zamanda iş adamı olarak da tanınıyor ve başarılı işlere imza atıyor.",
  },
]


export const tracks: Track[] = [
  {
    id: "hep-yalanmis",
    title: "Hep Yalanmış",
    album: "Single",
    year: "2024",
    youtubeId: "IgL2g01n3u0",
    cover: "https://i.ytimg.com/vi/IgL2g01n3u0/hqdefault.jpg",
    note: "YouTube klibi.",
  },
  {
    id: "insan-var",
    title: "İnsan Var",
    album: "Single",
    year: "2024",
    youtubeId: "B0aUTgGsU6k",
    cover: "https://i.ytimg.com/vi/B0aUTgGsU6k/hqdefault.jpg",
    note: "İlk profesyonel single.",
  },
  {
    id: "keke",
    title: "Keke",
    album: "Single",
    year: "2025",
    youtubeId: "F-9OOxcQEEs",
    cover: "https://i.ytimg.com/vi/F-9OOxcQEEs/hqdefault.jpg",
    note: "Yönetmenliğini de kendisi üstlendi.",
  },
  {
    id: "sol-yanim",
    title: "Sol Yanım",
    album: "Single",
    year: "2024",
    youtubeId: "Q6txA2sDZUk",
    cover: "https://i.ytimg.com/vi/Q6txA2sDZUk/hqdefault.jpg",
    note: "YouTube klibi.",
  },
  {
    id: "aklima-sen-dusunce",
    title: "Aklıma Sen Düşünce",
    album: "Single",
    year: "2024",
    youtubeId: "_3KNTzfUXSg",
    cover: "https://i.ytimg.com/vi/_3KNTzfUXSg/hqdefault.jpg",
    note: "YouTube klibi.",
  },
  {
    id: "bu-nasil-ask",
    title: "Bu Nasıl Aşk",
    album: "Bu Nasıl Aşk",
    year: "2026",
    youtubeId: "GUfTHS2SYvc",
    cover: "https://i.ytimg.com/vi/GUfTHS2SYvc/hqdefault.jpg",
    note: "Albümün isim parçası.",
  },
  {
    id: "bu-aralar",
    title: "Bu Aralar",
    album: "Single",
    year: "2025",
    youtubeId: "-PSBOcTO_yY",
    cover: "https://i.ytimg.com/vi/-PSBOcTO_yY/hqdefault.jpg",
    note: "YouTube klibi.",
  },
]

export const videos: VideoClip[] = [
  {
    id: "hep-yalanmis",
    title: "Hep Yalanmış",
    youtubeId: "IgL2g01n3u0",
  },
  {
    id: "insan-var",
    title: "İnsan Var",
    youtubeId: "B0aUTgGsU6k",
  },
  {
    id: "sol-yanim",
    title: "Sol Yanım",
    youtubeId: "Q6txA2sDZUk",
  },
  {
    id: "aklima-sen-dusunce",
    title: "Aklıma Sen Düşünce",
    youtubeId: "_3KNTzfUXSg",
  },
  {
    id: "bu-nasil-ask",
    title: "Bu Nasıl Aşk",
    youtubeId: "GUfTHS2SYvc",
  },
  {
    id: "keke",
    title: "Keke",
    youtubeId: "F-9OOxcQEEs",
  },
  {
    id: "bu-aralar",
    title: "Bu Aralar",
    youtubeId: "-PSBOcTO_yY",
  },
]

export type Photo = {
  id: string
  src: string
  alt: string
  title: string
}

export const photos: Photo[] = [
  {
    id: "sahne-01",
    src: "/photos/sahne-01.jpg",
    alt: "Burhan Tekyıldız, orkestra önünde beyaz smokin ve mikrofon",
    title: "Sahne",
  },
  {
    id: "sahne-02",
    src: "/photos/sahne-02.jpg",
    alt: "Burhan Tekyıldız mikrofonu tutarken sahneye davet eder",
    title: "Mikrofon",
  },
  {
    id: "sahne-03",
    src: "/photos/sahne-03.jpg",
    alt: "Burhan Tekyıldız konser salonunda, arkada seyirci",
    title: "Salon",
  },
  {
    id: "sahne-04",
    src: "/photos/sahne-04.jpg",
    alt: "Burhan Tekyıldız gözleri kapalı şarkı söylerken",
    title: "Nefes",
  },
  {
    id: "sahne-05",
    src: "/photos/sahne-05.jpg",
    alt: "Burhan Tekyıldız sahnede, avize ışığında",
    title: "Işık",
  },
  {
    id: "sahne-06",
    src: "/photos/sahne-06.jpg",
    alt: "Burhan Tekyıldız taburede, mikrofon önünde",
    title: "Portre",
  },
  {
    id: "sahne-07",
    src: "/photos/sahne-07.jpg",
    alt: "Burhan Tekyıldız orkestra sahnesinde gülümserken",
    title: "Bakış",
  },
  {
    id: "sahne-08",
    src: "/photos/sahne-08.jpg",
    alt: "Burhan Tekyıldız orkestra ve şefle sahnede",
    title: "Orkestra",
  },
]

export const featuredTrack = tracks[0]
