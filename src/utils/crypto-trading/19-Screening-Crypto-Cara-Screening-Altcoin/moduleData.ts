function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/19-Screening-Crypto-Cara-Screening-Altcoin/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1Dlm61_VzxBEho0ARXOmFuoC7hhb3gEt8/view?usp=drive_link",
    title: "Market Cap",
    description: "Analisis Market Cap untuk screening crypto.",
    link: `${link}01-Market-Cap`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1QP-CMJ-ewnlRUw10uy_iH7lCOux_8chk/view?usp=drive_link",
    title: "Analytics",
    description: "Analisis metrics dan data untuk screening.",
    link: `${link}02-Analytics`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1n_thYCAzTtQItnpEJ-WeZ5AgqEJeD58Y/view?usp=drive_link",
    title: "Momentum",
    description: "Menganalisis momentum untuk screening altcoin.",
    link: `${link}03-Momentum`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1WP2gXgykxOuhZD1bUUdEaG3ukLpk4T7G/view?usp=drive_link",
    title: "Cara Screening Altcoin dari 0",
    description: "Panduan lengkap screening altcoin dari dasar.",
    link: `${link}04-Cara-Screening-Altcoin-dari-0`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
