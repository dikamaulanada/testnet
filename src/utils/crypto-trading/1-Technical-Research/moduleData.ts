function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/1-Technical-Research/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/11GH5lCeWCjlWMYHx-vuZzh8k8R2MopaN/view?usp=drive_link",
    title: "Cara Melakukan Trend Analysis",
    description: "Panduan untuk menganalisis tren dalam trading crypto.",
    link: `${link}01-Cara-Melakukan-Trend-Analysis`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1WBljjWR3A9MuhabzATHvLXyceg7ExF3p/view?usp=drive_link",
    title: "Cara Melakukan Area Analysis",
    description: "Langkah-langkah untuk menganalisis area support dan resistance.",
    link: `${link}02-Cara-Melakukan-Area-Analysis`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1BT6J3bYp6LAQWzWaqL412pAviAMexMxr/view?usp=drive_link",
    title: "Cara Melakukan Pattern Analysis",
    description: "Cara mengenali pola-pola penting dalam grafik trading.",
    link: `${link}03-Cara-Melakukan-Pattern-Analysis`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1R83me4rtmRxIQJZyHHB2z6P8Fc7oPJKy/view?usp=drive_link",
    title: "Cara Melakukan Trigger Analysis",
    description: "Teknik untuk menentukan pemicu dalam pengambilan keputusan trading.",
    link: `${link}04-Cara-Melakukan-Trigger-Analysis`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/19Y4lRhuymcnQcxOmd__7IowmuW6a5mEm/view?usp=drive_link",
    title: "Cara Melakukan Entry Exit Analysis",
    description: "Strategi untuk menentukan waktu masuk dan keluar dalam trading.",
    link: `${link}05-Cara-Melakukan-Entry-Exit-Analysis`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
