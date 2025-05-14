function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/17-Token-Unlock-Trading-Strategy/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1QrQkiebNFoXF6GxDQOoplMqX52_LkDbs/view?usp=drive_link",
    title: "Apa itu Token Unlock",
    description: "Pengenalan tentang Token Unlock dan mekanismenya.",
    link: `${link}01-Apa-itu-Token-Unlock`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1ZbagYaH7dOe8ikYkE-G-8hOGWkpJvKt5/view?usp=drive_link",
    title: "Jenis-jenis Token Unlock",
    description: "Berbagai jenis Token Unlock yang perlu diketahui.",
    link: `${link}02-Jenis-jenis-Token-Unlock`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1xYT0-SA98vrAXGtxuMXKLbRQJWLSwLsg/view?usp=drive_link",
    title: "Cara Mendapatkan Keuntungan dengan Airdrop Unlock",
    description: "Strategi mendapatkan keuntungan dari Airdrop Unlock.",
    link: `${link}03-Cara-Mendapatkan-Keuntungan-dengan-Airdrop-Unlock`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1vdbJD9B0SVEfSZXpH5qcVLGBsuUIeT9j/view?usp=drive_link",
    title: "Penerapan Trading Airdrop Unlock",
    description: "Implementasi trading dengan memanfaatkan Airdrop Unlock.",
    link: `${link}04-Penerapan-Trading-Airdrop-Unlock`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1wQ_sWIfCWqyiI2k6K1CjFSPZGZMI8MVa/view?usp=drive_link",
    title: "Cliff Unlock Trading Strategy",
    description: "Strategi trading dengan Cliff Unlock.",
    link: `${link}05-Cliff-Unlock-Trading-Strategy`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1SaXyZa3o58a9p41qTA1j_PvwzMalyKGv/view?usp=drive_link",
    title: "Dampak Bullish Cliff Unlock Play",
    description: "Dampak bullish dari Cliff Unlock Play.",
    link: `${link}06-Dampak-Bullish-Cliff-Unlock-Play`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1qmOBzzRe6gcJMaOHkaqVyEEvsRPBUj1E/view?usp=drive_link",
    title: "Penerapan Cliff Unlock Trading Strategy",
    description: "Implementasi strategi trading Cliff Unlock.",
    link: `${link}07-Penerapan-Cliff-Unlock-Trading-Strategy`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
