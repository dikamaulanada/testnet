function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/13-Narrative-Research/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1N8D3O1-uob7EVevbCiWw-01blPqd113K/view?usp=drive_link",
    title: "Intro to Narrative Analysis",
    description: "Pengenalan tentang Narrative Analysis dalam investasi crypto.",
    link: `${link}01-Intro-to-Narrative-Analysis`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1LREbjEOtK4y_NQ02xpc_uP3qcAScmpTA/view?usp=drive_link",
    title: "How to be Early in every Narrative",
    description: "Strategi untuk menjadi yang terdepan dalam setiap narasi.",
    link: `${link}02-How-to-be-Early-in-every-Narrative`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1qSQIHsXPGkXWQlYuR5YaXb0Pc0INZ_tH/view?usp=drive_link",
    title: "Portofolio Allocation",
    description: "Cara mengalokasikan portofolio berdasarkan narasi yang berkembang.",
    link: `${link}03-Portofolio-Allocation`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
