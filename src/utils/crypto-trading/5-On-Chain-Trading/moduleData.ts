function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/5-On-Chain-Trading/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1jN5QEGYWUXgRI2drSjhQmz8rJdxowlhx/view?usp=drive_link",
    title: "Pengenalan On-Chain Trading",
    description: "Dasar-dasar tentang on-chain trading dan cara kerjanya.",
    link: `${link}01-Pengenalan-On-Chain-Trading`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1n7yZKRwiJK7fYR506O-BQRCWhYdbPMDD/view?usp=drive_link",
    title: "Menggali Decentralized Exchange",
    description: "Panduan untuk memahami dan menggunakan decentralized exchange.",
    link: `${link}02-Menggali-Decentralized-Exchange`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1taIfSYxQ9qSN0AGzS8KyVLpTUz6nBH-o/view?usp=drive_link",
    title: "Cara Menggunakan Wallet Exchange",
    description: "Langkah-langkah untuk menggunakan wallet dalam transaksi on-chain.",
    link: `${link}03-Cara-Menggunakan-Wallet-Exchange`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1xRE4wlPTwMri8nzpgF-keMfk9gzGWZAE/view?usp=drive_link",
    title: "Tools untuk On-Chain",
    description: "Alat-alat yang dapat membantu dalam melakukan on-chain trading.",
    link: `${link}04-Tools-untuk-On-Chain`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1e8PYokKQJ4kKvSztff0YpyIN0jtilPqa/view?usp=drive_link",
    title: "Kesalahan yang Harus Dihindari Sebelum Transaksi On-Chain",
    description: "Daftar kesalahan umum yang harus dihindari sebelum melakukan transaksi on-chain.",
    link: `${link}05-Kesalahan-yang-harus-dihindari-Sebelum-Transaksi-On-Chain`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
