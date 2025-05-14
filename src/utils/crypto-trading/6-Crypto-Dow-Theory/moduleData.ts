function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/6-Crypto-Dow-Theory/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1Ec1PrgB10GLqnZ06T49PQzHwUIEo_OgF/view?usp=drive_link",
    title: "Pengenalan Dow Theory",
    description: "Dasar-dasar teori Dow dan aplikasinya dalam crypto trading.",
    link: `${link}01-Pengenalan-Dow-Theory`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1wyu7HD6nvej9mrJWl6kRdqPSJoD7xtgB/view?usp=drive_link",
    title: "Memahami Konsep Trend dalam Dow Theory",
    description: "Penjelasan tentang konsep trend dalam teori Dow.",
    link: `${link}02-Memahami-Konsep-Trend-dalam-Dow-Theory`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1gOnH7WheKueI0Ar-hDQz9xvPyw0Tusye/view?usp=drive_link",
    title: "Memahami Konsep Trend Lanjutan Dalam Dow Theory",
    description: "Analisis lanjutan tentang konsep trend dalam teori Dow.",
    link: `${link}03-Memahami-Konsep-Trend-Lanjutan-Dalam-Dow-Theory`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1L89ddSdLrLTUVIVmgmni5FVlLtMbbIA0/view?usp=drive_link",
    title: "Penggunaan Moving Averages dan Validasi Dow",
    description: "Cara menggunakan moving averages untuk validasi teori Dow.",
    link: `${link}04-Penggunaan-Moving-Averages-dan-Validasi-Dow`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1vj9o-XfyvKUe9s9c_Yuz5TgY5gk5xCMN/view?usp=drive_link",
    title: "Fase pada Dow Theory",
    description: "Penjelasan tentang berbagai fase dalam teori Dow.",
    link: `${link}05-Fase-pada-Dow-Theory`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
