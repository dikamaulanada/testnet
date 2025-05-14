function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/18-UTXO-Model-vs-Account-Model/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1cozsoAKQvKj07zaZf2sVHx1mBhg3uigP/view?usp=drive_link",
    title: "UTXO Model vs Account Model",
    description: "Penjelasan perbedaan antara UTXO Model dan Account Model dalam blockchain",
    link: `${link}1-UTXO-Model-vs-Account-Model`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
