function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/4-Altcoin-Scalping/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1Ip8MP9YQO3wWBvKXszOjB6eptoyV4yVo/view?usp=drive_link",
    title: "Pemahaman Dasar Altcoins",
    description: "Pengenalan dasar tentang altcoins dan perannya dalam trading.",
    link: `${link}01-Pemahaman-Dasar-Altcoins`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1l-Jfq4Ljfn7wKBbMsYpHkcQiAzaPpApO/view?usp=drive_link",
    title: "Pemahaman Dasar Teknik Scalping",
    description: "Dasar-dasar teknik scalping untuk trading altcoins.",
    link: `${link}02-Pemahaman-Dasar-Teknik-Scalping`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1IsWIUs02XIk7Y04YqaWcTpP0TYKdnTYt/view?usp=drive_link",
    title: "Persiapan Mental Sebelum Scalping",
    description: "Panduan untuk mempersiapkan mental sebelum melakukan scalping.",
    link: `${link}03-Persiapan-Mental-Sebelum-Scalping`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1Jwrha1j70G8RLxID77eRpiMnjqozp4hq/view?usp=drive_link",
    title: "Persiapan Teknikal Sebelum Scalping",
    description: "Langkah-langkah teknikal yang perlu dilakukan sebelum scalping.",
    link: `${link}04-Persiapan-Teknikal-Sebelum-Scalping`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/176kBiHVkF0Ntb0PEZYB87-qH7RQoGYhz/view?usp=drive_link",
    title: "Cara Melakukan Screening Altcoins untuk Scalping",
    description: "Panduan untuk melakukan screening altcoins yang cocok untuk scalping.",
    link: `${link}05-Cara-Melakukan-Screening-Altcoins-untuk-Scalping`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
