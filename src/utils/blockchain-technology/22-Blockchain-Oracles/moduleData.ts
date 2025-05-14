function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/22-Blockchain-Oracles/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1tINCL4RJHpOMhVp8erQEoW4UvsvaEW7x/view?usp=drive_link",
    title: "Price Oracle",
    description: "Penjelasan tentang Price Oracle dalam blockchain",
    link: `${link}1-Price-Oracle`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/14UgiGX38IXKE4jGWLStlRrHC8Rng8eLD/view?usp=drive_link",
    title: "TWAP",
    description: "Penjelasan tentang Time-Weighted Average Price (TWAP) dalam blockchain",
    link: `${link}2-TWAP`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
