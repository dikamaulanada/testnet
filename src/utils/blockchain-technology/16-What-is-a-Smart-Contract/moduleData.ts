function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/16-What-is-a-Smart-Contract/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1CQ4aZTSRThGY5P95NghnotMizyy4ZgP4/view?usp=drive_link",
    title: "Basic Smart Contract",
    description: "Pengenalan dasar tentang smart contract",
    link: `${link}1-Basic-Smart-Contract`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1GPeiSvsByJtMwpZ_FJi4-CCizg70iS9D/view?usp=drive_link",
    title: "Smart Contract Execution",
    description: "Penjelasan tentang eksekusi smart contract",
    link: `${link}2-Smart-Contract-Execution`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/11XKpVUs13mOqfZDBKe6h-VMNVKs0Eekh/view?usp=drive_link",
    title: "Storage and Immutability",
    description: "Memahami konsep penyimpanan dan sifat immutability dalam smart contract",
    link: `${link}3-Storage-and-Immutability`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/12ZGl1ndfgo8gSHxRZmrM_DFjVHco-vud/view?usp=drive_link",
    title: "Smart Contract Upgradeability",
    description: "Pendekatan untuk upgrade smart contract",
    link: `${link}4-Smart-Contract-Upgradeability`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
