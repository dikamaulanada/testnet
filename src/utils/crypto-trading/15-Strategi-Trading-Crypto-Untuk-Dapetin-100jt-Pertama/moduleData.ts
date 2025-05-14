function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/15-Strategi-Trading-Crypto-Untuk-Dapetin-100jt-Pertama/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1GcPl6zfXlf4esWxnr6cOQYtn_7fn-lyL/view?usp=drive_link",
    title: "Strategi Trading Crypto Untuk Dapetin 100jt Pertama",
    description: "Strategi trading crypto untuk mencapai target 100 juta pertama.",
    link: `${link}01-Strategi-Trading-Crypto-Untuk-Dapetin-100jt-Pertama`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
