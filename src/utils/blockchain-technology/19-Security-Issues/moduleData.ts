function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/19-Security-Issues/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1abcisugbO8k3H4jIa6MLSw_rlOYspn0_/view?usp=drive_link",
    title: "Reentrancy EXT",
    description: "Penjelasan tentang serangan reentrancy dalam smart contract",
    link: `${link}1-Reentrancy-EXT`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1GFuRLH_7-8HaZ8DUYxLJK-ABl3GUkSdO/view?usp=drive_link",
    title: "Random Generator EXT",
    description: "Masalah keamanan dalam generator angka acak di smart contract",
    link: `${link}2-Random-Generator-EXT`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1EZek3aulqjps3EHNGfvL5f2gdci2fXwA/view?usp=drive_link",
    title: "Smart Contract Security Auditing",
    description: "Panduan audit keamanan smart contract",
    link: `${link}3-Smart-Contract-Security-Auditing`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1WxlMQ2EbTF6Ql9JTq6K_tcSY9d9Eu9nB/view?usp=drive_link",
    title: "Security Contest and Bug Bounty",
    description: "Pentingnya kontes keamanan dan program bug bounty",
    link: `${link}4-Security-Contest-and-Bug-Bounty`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
