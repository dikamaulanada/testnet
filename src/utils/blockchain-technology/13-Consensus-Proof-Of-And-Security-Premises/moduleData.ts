function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/13-Consensus-Proof-Of-And-Security-Premises/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/178MQIc3J2o85n-jvTnmiqCPzyPskzkIB/view?usp=drive_link",
    title: "Proof of Work",
    description: "Penjelasan tentang mekanisme konsensus Proof of Work",
    link: `${link}1-Proof-of-Work`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1vheX6Gb5sNU-av1o3GU8x8715ofDc3Ua/view?usp=drive_link",
    title: "Proof of Stake",
    description: "Penjelasan tentang mekanisme konsensus Proof of Stake",
    link: `${link}2-Proof-of-Stake`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1br_eMBIiKoWLL8vmSwIdszKT6eqnfT3P/view?usp=drive_link",
    title: "Proof of Authority",
    description: "Penjelasan tentang mekanisme konsensus Proof of Authority",
    link: `${link}3-Proof-of-Authority`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1ouF7wzZ4vYlKJwQnp9ZiJkL7gIZpUudG/view?usp=drive_link",
    title: "Proof of History",
    description: "Penjelasan tentang mekanisme konsensus Proof of History",
    link: `${link}4-Proof-of-History`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
