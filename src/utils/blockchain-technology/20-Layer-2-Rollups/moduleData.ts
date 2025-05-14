function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/20-Layer-2-Rollups/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1LlgILENdfqqcFQrbtFo3D__lOAN1T2DD/view?usp=drive_link",
    title: "Ethereum Scaling",
    description: "Penjelasan tentang solusi scaling Ethereum",
    link: `${link}1-Ethereum-Scaling`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1m0pnFNfSxYRZCCuMR_2yPQwKoVUHiF2e/view?usp=drive_link",
    title: "Ethereum Optimistic Rollup",
    description: "Pendalaman tentang teknologi Optimistic Rollup di Ethereum",
    link: `${link}2-Ethereum-Optimistic-Rollup`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1cNqJ1R9o6hmsH26DsdB78KcpotsWefAg/view?usp=drive_link",
    title: "Ethereum ZK Rollup",
    description: "Pendalaman tentang teknologi ZK Rollup di Ethereum",
    link: `${link}3-Ethereum-ZK-Rollup`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
