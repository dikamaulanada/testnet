function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/2-Fundamental-Research/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1HbeQ5VhtNIQHuIhtyfw5N3jbFQlbNO38/view?usp=drive_link",
    title: "Intro to Fundamental Research",
    description: "Pengenalan dasar tentang fundamental research dalam crypto.",
    link: `${link}01-Intro-to-Fundamental-Research`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1mr4XEWxdRCeuNnd4fragyVeIeVL7NAjK/view?usp=drive_link",
    title: "Faktor yang Berperan Dalam Fundamental Research",
    description: "Penjelasan faktor-faktor penting dalam fundamental research.",
    link: `${link}02-Faktor-yang-Berperan-Dalam-Fundamental-Research`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1Qu74YLKaBGVqVFOGGmW5fhMim01a7tCa/view?usp=drive_link",
    title: "Mendalami Tokenomics Project",
    description: "Panduan untuk memahami tokenomics dari sebuah proyek crypto.",
    link: `${link}03-Mendalami-Tokenomics-Project`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
