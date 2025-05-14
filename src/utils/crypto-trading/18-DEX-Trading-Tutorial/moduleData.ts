function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/18-DEX-Trading-Tutorial/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1vtxtFQRvNbVN0RYfap7TwKmQOjPSOVY9/view?usp=drive_link",
    title: "DEX Trading Tutorial 1",
    description: "Tutorial trading di DEX bagian 1.",
    link: `${link}01-DEX-Trading-Tutorial-1`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1NR_TsAz7ZD2No_caNHo0vDU6Hq3eOicT/view?usp=drive_link",
    title: "DEX Trading Tutorial 2",
    description: "Tutorial trading di DEX bagian 2.",
    link: `${link}02-DEX-Trading-Tutorial-2`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1ySSSyx8WdRzeOGPYgekfr6en_rP8v3s9/view?usp=drive_link",
    title: "DEX Trading Tutorial 3",
    description: "Tutorial trading di DEX bagian 3.",
    link: `${link}03-DEX-Trading-Tutorial-3`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1qJ-9aIBRzdFD7JFPoxMTS7l2rlYJKmEa/view?usp=drive_link",
    title: "DEX Trading Tutorial 4",
    description: "Tutorial trading di DEX bagian 4.",
    link: `${link}04-DEX-Trading-Tutorial-4`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1S8bq5-dJLPbY2ui5_W54tvQvHhS65tHu/view?usp=sharing",
    title: "DEX Trading Tutorial 5",
    description: "Tutorial trading di DEX bagian 5.",
    link: `${link}05-DEX-Trading-Tutorial-5`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
