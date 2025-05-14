function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/21-Tokens/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1143QOPtzpapR_ImjOmV0AAolvE-GiH6N/view?usp=drive_link",
    title: "ERC20",
    description: "Pengenalan standar token ERC20 dan implementasinya",
    link: `${link}1-ERC20`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1wot0GGFI_ZcN4JDvV__9QsaGKf5bK7Ci/view?usp=drive_link",
    title: "ERC721",
    description: "Pengenalan standar token ERC721 untuk NFT",
    link: `${link}2-ERC721`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1N38-99AFqq71c5iVCzGQDHmvRz8OYZZc/view?usp=drive_link",
    title: "ERC4626",
    description: "Pengenalan standar token ERC4626 untuk vaults",
    link: `${link}3-ERC4626`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
