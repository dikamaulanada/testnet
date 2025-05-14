function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/16-Crypto-WyckOff-Trading/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1ZK0knSw6UW5aDJdlYEAj8X5bXVn26Dbm/view?usp=drive_link",
    title: "Sejarah Wyckoff Trading Strategy",
    description: "Sejarah dan perkembangan strategi Wyckoff dalam trading.",
    link: `${link}01-Sejarah-Wyckoff-Trading-Strategy`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1czqJFnL_OrsQS6r4EZXaAUTNs4PkRnl2/view?usp=drive_link",
    title: "Hukum dan Prinsip dari Wyckoff",
    description: "Hukum dasar dan prinsip utama dalam metode Wyckoff.",
    link: `${link}02-Hukum-dan-Prinsip-dari-Wyckoff`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1YBsLgQ-Fxjx8Fdx81dfUQGMRNfqG7wUa/view?usp=drive_link",
    title: "Penerapan Fase dalam Market Secara Umum",
    description: "Aplikasi fase-fase Wyckoff dalam market secara umum.",
    link: `${link}03-Penerapan-Fase-dalam-Market-Secara-Umum`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1fy7uwteiMTBiJUYDwDUIPquBUAku2vB4/view?usp=drive_link",
    title: "Berbagai Fase Wyckoff dalam Trading Crypto",
    description: "Fase-fase Wyckoff yang relevan dalam trading crypto.",
    link: `${link}04-Berbagai-Fase-Wyckoff-dalam-Trading-Crypto`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1SqYytSr8k_5i4q6KNqEq0jEC7S5VGURa/view?usp=drive_link",
    title: "Supply and Demand",
    description: "Analisis Supply and Demand dalam konteks Wyckoff.",
    link: `${link}05-Supply-and-Demand`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1HWbSWVJDJWXBuqdGlcq4FtHxKUFCxVn8/view?usp=drive_link",
    title: "Volume Spread Analysis",
    description: "Penggunaan Volume Spread Analysis (VSA) dalam Wyckoff.",
    link: `${link}06-Volume-Spread-Analysis`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1xFJNc0lUkK56j8mTMl0sCSX7vNLFzUXQ/view?usp=drive_link",
    title: "Pergerakan Price Action Sederhana",
    description: "Analisis pergerakan harga (price action) sederhana.",
    link: `${link}07-Pergerakan-Price-Action-Sederhana`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1O3UPDf07gNWYOjOccd_RwyDIO5ErNo2R/view?usp=drive_link",
    title: "Fase dari Wyckoff PART-1",
    description: "Pembahasan fase-fase Wyckoff bagian 1.",
    link: `${link}08-Fase-dari-Wyckoff-PART-1`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1dMqkni93IX80WAIqJQJ47rNRMdSRsHct/view?usp=drive_link",
    title: "Fase dari Wyckoff PART-2",
    description: "Pembahasan fase-fase Wyckoff bagian 2.",
    link: `${link}09-Fase-dari-Wyckoff-PART-2`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1_cnst7QWSQxWSPPiGKN5jxvHzskTER_M/view?usp=drive_link",
    title: "Penerapan Wyckoff dalam Crypto",
    description: "Implementasi strategi Wyckoff dalam trading crypto.",
    link: `${link}10-Penerapan-Wyckoff-dalam-Crypto`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
