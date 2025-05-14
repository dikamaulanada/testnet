function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/4-Tools/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1r_x99OEzqHNu7SHiajcws5eA6wdp3Ye-/view?usp=drive_link",
    title: "Basic Crypto Data",
    description: "Pengenalan tools dasar untuk mengakses data cryptocurrency",
    link: `${link}1-Basic-Crypto-Data`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1GzqGhZOC04eL1xhRXuexulNjfTywj3Ch/view?usp=drive_link",
    title: "Portofolio Tracker",
    description: "Tools untuk melacak dan menganalisis portofolio crypto",
    link: `${link}2-Portofolio-Tracker`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/18_qHg88X1nzvQDlKKnDRdQdyy-np3YMY/view?usp=drive_link",
    title: "Cryptocurrency Wallet",
    description: "Panduan penggunaan berbagai jenis wallet cryptocurrency",
    link: `${link}3-Cryptocurrency-Wallet`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1vSZB54dDRpjm4rU7oZWzzCRJ270ctYEz/view?usp=drive_link",
    title: "Crypto Quantitative Tools",
    description: "Tools analisis kuantitatif untuk trading crypto",
    link: `${link}4-Crypto-Quantitative-Tools`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1CZwedl6BRDYDGtkVX4x11Z13PM8gqz4c/view?usp=drive_link",
    title: "Blockchain Fundamental Tools",
    description: "Tools dasar untuk berinteraksi dengan blockchain",
    link: `${link}5-Blockchain-Fundamental-Tools`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
