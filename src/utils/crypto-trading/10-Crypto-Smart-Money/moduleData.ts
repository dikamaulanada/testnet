function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/10-Crypto-Smart-Money/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1THwDoY55wGrHEnIFx8Bvu12lzSCntYzg/view?usp=drive_link",
    title: "Apa itu Smart Money",
    description: "Pengenalan dasar tentang konsep Smart Money dalam trading.",
    link: `${link}01-Apa-itu-Smart-Money`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1_pLB1jObJOLr7V2ritK4dHl2-qpmaG0-/view?usp=drive_link",
    title: "Apa Fokus dari Smart Money",
    description: "Memahami fokus utama dan strategi Smart Money dalam market.",
    link: `${link}02-Apa-Fokus-dari-Smart-Money`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1Gsgbfkz5oD_S5WE_vNl2xWswRRFftpg9/view?usp=drive_link",
    title: "Konsep Liquidity 1",
    description: "Pengenalan dasar tentang konsep likuiditas dalam Smart Money.",
    link: `${link}03-Konsep-Liquidity-1`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1oN_LlL79ZAprMagM9Lk-xVUOHfQvllsR/view?usp=drive_link",
    title: "Konsep Liquidity 2",
    description: "Pendalaman konsep likuiditas dan aplikasinya.",
    link: `${link}04-Konsep-Liquidity-2`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1ORSVK5KswHFnEmLWMzRIhYp8wH3ARHyT/view?usp=drive_link",
    title: "Konsep Liquidity 3",
    description: "Strategi lanjutan dalam mengelola likuiditas.",
    link: `${link}05-Konsep-Liquidity-3`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1czDxhjd6MCUkR7nlC9gIbG2Am6YUQSKG/view?usp=drive_link",
    title: "Market Structure",
    description: "Memahami struktur market dalam perspektif Smart Money.",
    link: `${link}06-Market-Structure`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1cjwEF87AMmCoBWVDuJy5UskB9SHRdb_l/view?usp=drive_link",
    title: "Change of Character",
    description: "Mengidentifikasi perubahan karakter dalam market.",
    link: `${link}07-Change-of-Character`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1W7GNNnwlrLLL6_69X8gTtqNKBcSIvIy7/view?usp=drive_link",
    title: "Orderblock",
    description: "Konsep dan penerapan Orderblock dalam trading.",
    link: `${link}08-Orderblock`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1wCY9lnYcqI37ZLffqvx7gbo3by-SYaXH/view?usp=drive_link",
    title: "Momentum",
    description: "Analisis momentum dalam konteks Smart Money.",
    link: `${link}09-Momentum`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1xzMaIn5Yst0HS4ENCR0fHnc-SJlUqrFY/view?usp=drive_link",
    title: "Penerapan Smart Money",
    description: "Implementasi praktis konsep Smart Money dalam trading.",
    link: `${link}10-Penerapan-Smart-Money`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
