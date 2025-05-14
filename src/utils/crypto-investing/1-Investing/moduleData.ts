function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/1-Investing/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1Z0zJ2Ee8myNxqMK1AoQ3IMX50rywC2gh/view?usp=drive_link",
    title: "Big Crypto Thesis",
    description: "Memahami dasar-dasar dan potensi masa depan cryptocurrency",
    link: `${link}1-Big-Crypto-Thesis`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1IwKQt6E9vcMQF8xQ6X5OWeEiOGT7a9qZ/view?usp=drive_link",
    title: "Bitcoin a Ponzi Scheme",
    description: "Menganalisis dan membantah anggapan Bitcoin sebagai skema Ponzi",
    link: `${link}2-Bitcoin-a-Ponzi-Scheme`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/11d7vd5Jx_euk4ThOuXuanP4NEudSiiHy/view?usp=drive_link",
    title: "Crypto Basics",
    description: "Pengenalan dasar tentang cryptocurrency dan teknologi blockchain",
    link: `${link}3-Crypto-Basics`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/12-dv5-0qno1UKisJ1HLpzDjQmgJpueNH/view?usp=drive_link",
    title: "Mindset Crypto Gambler Mentality",
    description: "Membangun pola pikir yang benar dalam investasi crypto",
    link: `${link}4-Mindset-Crypto-Gambler-Mentality`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1Xz-vFDl73OMaRYOjqiievpIQkxsqiHCY/view?usp=drive_link",
    title: "Market Cycles",
    description: "Memahami siklus pasar crypto dan cara memanfaatkannya",
    link: `${link}5-Market-Cycles`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1R1vxK85z18d7N3ZhoQo4zGuTvQdbKSYk/view?usp=drive_link",
    title: "Types of Cryptocurrencies",
    description: "Mengenal berbagai jenis cryptocurrency dan karakteristiknya",
    link: `${link}6-Types-of-Cryptocurrencies`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1gDWzDz2n199_OedObVj4yFVq856dc83S/view?usp=drive_link",
    title: "Attention Economy in Crypto",
    description: "Memahami peran ekonomi perhatian dalam pasar crypto",
    link: `${link}7-Attention-Economy-in-Crypto`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1MrQA4QatoNhHCvGbsBPzP2fw71Zhf8FX/view?usp=drive_link",
    title: "How to Research Crypto",
    description: "Panduan melakukan riset yang efektif untuk investasi crypto",
    link: `${link}8-How-to-Research-Crypto`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1Pqe0q6mVePONsL69lh2j--CdIUX1CHwr/view?usp=drive_link",
    title: "Risk and Portfolio Management",
    description: "Strategi mengelola risiko dan portofolio dalam investasi crypto",
    link: `${link}9-Risk-and-Portfolio-Management`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1tmZZg4B6eB7Suvwy7bXJHtQVb7IREcrK/view?usp=drive_link",
    title: "NFT Fundamentals",
    description: "Dasar-dasar NFT dan potensi investasinya",
    link: `${link}10-NFT-Fundamentals`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/1liQWim705K1W3O5ZT_xU_jXgEhrSEx5t/view?usp=drive_link",
    title: "Trade Probablistic Thinking",
    description: "Pendekatan probabilistik dalam trading crypto",
    link: `${link}11-Trade-Probablistic-Thinking`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/1pTEgPXrk2FL3VRJLKZ3vj3Z0k0rKBNha/view?usp=drive_link",
    title: "Bitcoin and Altcoin Correlation",
    description: "Memahami hubungan antara Bitcoin dan altcoin",
    link: `${link}12-Bitcoin-and-Altcoin-Correlation`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/1tQRpxaQfwLN_Kh3TtgOtXibZwFPMJZj9/view?usp=drive_link",
    title: "Crypto Tools",
    description: "Pengenalan tools dan platform penting untuk trading crypto",
    link: `${link}13-Crypto-Tools`
  },
  {
    id: "14",
    driveLink: "https://drive.google.com/file/d/1cmfMeM9uP52UUYWz2DArfHWrDmKdOPmE/view?usp=drive_link",
    title: "Smart Money in Crypto",
    description: "Mengikuti dan memahami pergerakan smart money di crypto",
    link: `${link}14-Smart-Money-in-Crypto`
  },
  {
    id: "15",
    driveLink: "https://drive.google.com/file/d/1ZIHiJZk3O_7GTJnSkAaHKYehO8hxzrex/view?usp=drive_link",
    title: "Portofolio Strategy 2023 Cheat Sheet",
    description: "Panduan strategi portofolio crypto untuk tahun 2023",
    link: `${link}15-Portofolio-Strategy-2023-Cheat-Sheet`
  },
  {
    id: "16",
    driveLink: "https://drive.google.com/file/d/1xatzaO_1lJs26lwwxqMzO2nUI82xYnze/view?usp=drive_link",
    title: "Crypto Staking Strategy",
    description: "Strategi mengoptimalkan pendapatan melalui staking crypto",
    link: `${link}16-Crypto-Staking-Strategy`
  },
  {
    id: "17",
    driveLink: "https://drive.google.com/file/d/1ohK1mbxR-nStBwjDu9RTiohNv30Qfp2q/view?usp=drive_link",
    title: "Tutorial Exchange",
    description: "Panduan lengkap menggunakan cryptocurrency exchange",
    link: `${link}17-Tutorial-Exchange`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
