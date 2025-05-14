function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/7-Kamus-Pattern-Crypto/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1K1bIgzpsHHgHXsXM05WYebm9buGoq_r9/view?usp=drive_link",
    title: "Apa Itu Pattern",
    description: "Pengenalan tentang apa itu pattern dalam analisis teknikal crypto.",
    link: `${link}01-Apa-Itu-Pattern`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1SSKkf59P8x_lNBWVhoqg1KpUKRvfys0z/view?usp=drive_link",
    title: "ABCD Pattern",
    description: "Penjelasan tentang ABCD pattern dan cara menggunakannya.",
    link: `${link}02-ABCD-Pattern`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1dfUXcJxBcFdoRZyLLQJASZE1t2Wmta1l/view?usp=drive_link",
    title: "Bat Pattern",
    description: "Panduan untuk memahami dan menggunakan Bat pattern.",
    link: `${link}03-Bat-Pattern`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1QZaGiFWa42wpO6iXJlZRT-53-2kEFOfF/view?usp=drive_link",
    title: "Gartley Pattern",
    description: "Penjelasan tentang Gartley pattern dan aplikasinya.",
    link: `${link}04-Gartley-Pattern`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1U_QOJzAIB6JFlPTdP0gThqquBx_4V3at/view?usp=drive_link",
    title: "Crab Pattern",
    description: "Cara mengenali dan menggunakan Crab pattern dalam trading.",
    link: `${link}05-Crab-Pattern`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/19grnws5R0KFmylTaAsD4gx5pjCBGPCae/view?usp=drive_link",
    title: "Diamond Pattern",
    description: "Panduan untuk memahami Diamond pattern dan penggunaannya.",
    link: `${link}06-Diamond-Pattern`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1863cf3BTx20b2YVrTHGAGYYn3-uAW-lk/view?usp=drive_link",
    title: "Broadening Pattern",
    description: "Penjelasan tentang Broadening pattern dan cara mengidentifikasinya.",
    link: `${link}07-Broadening-Pattern`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1C8ilHTX_arsK42Uc98zd49eAIvUyt21m/view?usp=drive_link",
    title: "Andrews Pitchfork Pattern",
    description: "Cara menggunakan Andrews Pitchfork pattern dalam analisis teknikal.",
    link: `${link}08-Andrews-Pitchfork-Pattern`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1W4OG9Vrqq_RT_YsOv6Epxtb6DHWC4pJR/view?usp=drive_link",
    title: "Linear Regression Channel",
    description: "Penjelasan tentang Linear Regression Channel dan aplikasinya.",
    link: `${link}09-Linear-Regression-Channel`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1FVWx4iPZYkJo1BL89ORaI1CaRKmvJNi9/view?usp=drive_link",
    title: "Rectangle Channels",
    description: "Panduan untuk memahami Rectangle Channels dalam analisis teknikal.",
    link: `${link}10-Rectangle-Channels`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
