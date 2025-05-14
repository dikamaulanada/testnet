function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/12-Crypto-Harmonic-Trading/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1L_JCc1jlU9uv8wDt_xJj6YNDnep3DfI2/view?usp=drive_link",
    title: "Apa itu Harmonic Trading",
    description: "Pengenalan dasar tentang Harmonic Trading dan konsepnya.",
    link: `${link}01-Apa-itu-Harmonic-Trading`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1V6QuF401dtpEnw0K4j_PbdNeHZa_jP92/view?usp=drive_link",
    title: "Tahapan Menerapkan Harmonic",
    description: "Langkah-langkah menerapkan Harmonic Trading dalam analisis.",
    link: `${link}02-Tahapan-Menerapkan-Harmonic`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1VdKXro3J0gP5blt2jyTti76p03S-Lyt5/view?usp=drive_link",
    title: "Fibonacci",
    description: "Peran Fibonacci dalam Harmonic Trading.",
    link: `${link}03-Fibonacci`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1VwknHL9WH-KCLMVoQtGbeLD39AxytnVU/view?usp=drive_link",
    title: "Elliot Wave",
    description: "Penggunaan Elliot Wave dalam Harmonic Trading.",
    link: `${link}04-Elliot-Wave`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1vVQNydEm_82Dc8zOhqhSDxbl1AjtZUBf/view?usp=drive_link",
    title: "Korelasi Elliot Wave dan Fibonacci",
    description: "Hubungan antara Elliot Wave dan Fibonacci dalam Harmonic.",
    link: `${link}05-Korelasi-Elliot-Wave-dan-Fibonacci`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/186P62m02VRv7J-F8mxVt5E9-GUE97beu/view?usp=drive_link",
    title: "Dasar dari Pola dan Rasio Harmonic Trading",
    description: "Fundamental pola dan rasio dalam Harmonic Trading.",
    link: `${link}06-Dasar-dari-Pola-dan-Rasio-Harmonic-Trading`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1wY8xGg97YDCsUpPgaTKzujD0yDIF380j/view?usp=drive_link",
    title: "Berbagai Harmonic Pattern",
    description: "Macam-macam pola Harmonic yang umum digunakan.",
    link: `${link}07-Berbagai-Harmonic-Pattern`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1_JAyp_h7mXS3n9B1YhVzMLduw4IINv6v/view?usp=drive_link",
    title: "Shark Pattern dan Butterfly Pattern",
    description: "Analisis Shark Pattern dan Butterfly Pattern.",
    link: `${link}08-Shark-Pattern-dan-Butterfly-Pattern`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1zXffxGmRFVtG4lO-xOBDFPxRds8fgEeK/view?usp=drive_link",
    title: "Entry Trigger",
    description: "Teknik menentukan entry trigger dalam Harmonic Trading.",
    link: `${link}09-Entry-Trigger`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1JzgTiYweHcaz1dndWfsEciFD1VLhk07L/view?usp=drive_link",
    title: "Rangkuman dan Fakta dari Harmonic Trading",
    description: "Kesimpulan dan fakta penting tentang Harmonic Trading.",
    link: `${link}10-Rangkuman-dan-Fakta-dari-Harmonic-Trading`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
