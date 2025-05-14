function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/3-Narative-Analysis/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1wbRQS9btbVicQ4Ods4x7D24xoKUYb7F3/view?usp=drive_link",
    title: "Intro To Narrative Analysis",
    description: "Pengenalan dasar tentang analisis naratif dalam dunia crypto.",
    link: `${link}01-Intro-To-Narrative-Analysis`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1nNI_btpXvtPXvYG6YxiqC54DLUT7szSx/view?usp=drive_link",
    title: "How to be Early in Every Narratives",
    description: "Strategi untuk menjadi yang terdepan dalam setiap narasi crypto.",
    link: `${link}02-How-to-be-Early-in-Every-Narratives`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1pcHk1OM9ksJhBN9KcxxulmkJG3q34aOA/view?usp=drive_link",
    title: "Portofolio Allocation",
    description: "Panduan untuk mengalokasikan portofolio berdasarkan narasi.",
    link: `${link}03-Portofolio-Allocation`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/11XkHMluQwfgGHLZpiu0H04g6LMkmgFye/view?usp=drive_link",
    title: "Possible Narratives For Next Bull Run",
    description: "Analisis narasi yang mungkin mendominasi bull run berikutnya.",
    link: `${link}04-Possible-Narratives-For-Next-Bull-Run`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1P8NU5DBs2WV4sNQYjGD3rTIGuVgLN9Ez/view?usp=drive_link",
    title: "Spatial Computing Narrative",
    description: "Eksplorasi narasi tentang spatial computing dalam crypto.",
    link: `${link}05-Spatial-Computing-Narative`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
