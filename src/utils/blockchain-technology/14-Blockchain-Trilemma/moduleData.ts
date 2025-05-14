function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/14-Blockchain-Trilemma/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1orcxC_AkNOsQFt7P2_LlaUPAvMXUPFOb/view?usp=drive_link",
    title: "Blockchain Trilemma",
    description: "Penjelasan tentang Blockchain Trilemma dan tantangannya",
    link: `${link}1-Blockchain-Trilemma`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1yyFVtgX2aKQiT1AdVU0sSH1YtYPGJOE9/view?usp=drive_link",
    title: "How To Solve Blockchain Trilemma",
    description: "Pendekatan dan solusi untuk mengatasi Blockchain Trilemma",
    link: `${link}2-How-To-Solve-Blockchain-Trilemma`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
