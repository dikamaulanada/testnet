function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/12-Digital-Money-And-Double-Spending/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1OwGJB5oAdc6OM_dEbOsE79UPb5IB9BGl/view?usp=drive_link",
    title: "Digital Money and Spending Problem",
    description: "Penjelasan tentang masalah pengeluaran ganda dalam uang digital",
    link: `${link}1-Digital-Money-and-Spending-Problem`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
