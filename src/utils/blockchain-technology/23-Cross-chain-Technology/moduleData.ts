function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/23-Cross-chain-Technology/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1J4LK60Asz279ha41HErRHvWi-PoxhZ-A/view?usp=drive_link",
    title: "Intro to Cross-chain Technology",
    description: "Pengenalan dasar tentang teknologi lintas blockchain",
    link: `${link}1-Intro-to-Cross-chain-Technology`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1SN9QHc6y56r-jcs_ofTTJ8qrnvAW1Zof/view?usp=drive_link",
    title: "CCIP",
    description: "Penjelasan tentang Cross-Chain Interoperability Protocol (CCIP)",
    link: `${link}2-CCIP`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
