function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/15-Bitcoin-Anonymity/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1MX_Fm8NFR18G5Cy24u6znoe5gl_PCABs/view?usp=drive_link",
    title: "Bitcoin Anonymity",
    description: "Penjelasan tentang anonimitas dalam transaksi Bitcoin",
    link: `${link}1-Bitcoin-Anonymity`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1iEXZD09tdpRM3MxgsI3iRQARU0ti3g44/view?usp=drive_link",
    title: "Improving Bitcoin Anonymity",
    description: "Pendekatan untuk meningkatkan anonimitas dalam Bitcoin",
    link: `${link}2-Improving-Bitcoin-Anonymity`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
