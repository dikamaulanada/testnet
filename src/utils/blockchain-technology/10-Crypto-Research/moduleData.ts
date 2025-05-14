function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/10-Crypto-Research/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/142VZcjro_SFm48rtmTm2IqiRVN-O4mua/view?usp=drive_link",
    title: "Introduction to Crypto Research",
    description: "Pengenalan dasar penelitian cryptocurrency",
    link: `${link}1-Introduction-to-Crypto-Research`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1VAT3R7MrQZYZvbBhkUJiDYp7sxWTXvuM/view?usp=drive_link",
    title: "Value Proposition and Qualitative Analysis",
    description: "Analisis kualitatif dan proposisi nilai cryptocurrency",
    link: `${link}2-Value-Proposition-and-Qualitative-Analysis`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1QsXHo3QYl1FvoODfdBwG1_QJFSoCm4jK/view?usp=drive_link",
    title: "Quantitative Analysis",
    description: "Metode analisis kuantitatif dalam cryptocurrency",
    link: `${link}3-Quantitative-Analysis`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1Grs4aUmTkEVqcX5c2fk3PC3RsiknlYg5/view?usp=drive_link",
    title: "Token Terminal Tutorial",
    description: "Panduan penggunaan platform Token Terminal",
    link: `${link}4-Token-Terminal-Tutorial`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1auh6UwhHcoq0Ph_3MnlIzXBr8SqnJ2yP/view?usp=drive_link",
    title: "Opinion, Strategy, and Follow Up",
    description: "Strategi dan tindak lanjut dalam penelitian crypto",
    link: `${link}5-Opinion-Strategy-and-Follow-Up`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1_WhsNo-IKP4JIyc0K-bwqEAjVmj3cuxI/view?usp=drive_link",
    title: "Blockchain Economics",
    description: "Aspek ekonomi dalam teknologi blockchain",
    link: `${link}6-Blockchain-Economics`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/11qakBNAPIV311hw-7JCGPsrNhIEvBiCi/view?usp=drive_link",
    title: "Introduction to Crypto Airdrop",
    description: "Pengenalan tentang airdrop cryptocurrency",
    link: `${link}7-Introduction-to-Crypto-Airdrop`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1BZTUJ8ZDenbu2P1witikhAqoaIlsGpVF/view?usp=drive_link",
    title: "ZkSync Airdrop Tutorial",
    description: "Panduan mendapatkan airdrop ZkSync",
    link: `${link}8-ZkSync-Airdrop-Tutorial`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1apXJ9eoYvy6ny9neyjCa3iTaPaF9owfo/view?usp=drive_link",
    title: "Layer Zero",
    description: "Penjelasan tentang teknologi Layer Zero",
    link: `${link}9-Layer-Zero`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
