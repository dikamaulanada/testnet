function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/11-Key-Wallets-and-How-They-Work/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1-ROASD-yxlwtx8FyM9DkGHhshcUOP_XK/view?usp=drive_link",
    title: "Keys and Wallets 1",
    description: "Pengenalan tentang kunci dan dompet cryptocurrency (Bagian 1)",
    link: `${link}1-Keys-and-Wallets-1`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1hAQhwLB1meIFM92bLEumFuOCTm6jIIAb/view?usp=drive_link",
    title: "Keys and Wallets 2",
    description: "Pendalaman tentang kunci dan dompet cryptocurrency (Bagian 2)",
    link: `${link}2-Keys-and-Wallets-2`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
