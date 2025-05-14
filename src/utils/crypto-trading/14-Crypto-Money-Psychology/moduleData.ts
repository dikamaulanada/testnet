function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/14-Crypto-Money-Psychology/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1LL1RYubldThPP1plOpwp_ntkIdJ6RJwl/view?usp=drive_link",
    title: "Money Management Kalimasada",
    description: "Strategi money management dengan pendekatan Kalimasada.",
    link: `${link}01-Money-Management-Kalimasada`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/12Xi91Pt9xX0GwrwOyE9qx_EMmO7M_AIG/view?usp=drive_link",
    title: "Mind Management Kalimasada",
    description: "Teknik mind management untuk trading yang lebih baik.",
    link: `${link}02-Mind-Management-Kalimasada`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1Oq30jkKT2VwmsACDRIoskapWx-KljBTw/view?usp=drive_link",
    title: "Psikologi Faktor yang Penting",
    description: "Faktor psikologis penting dalam pengambilan keputusan trading.",
    link: `${link}03-Psikologi-Faktor-yang-Penting`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/15QWQhpOsWSYcQGY5bhERn-l4QHggvTzh/view?usp=drive_link",
    title: "Psikologis ketika trading",
    description: "Memahami kondisi psikologis saat melakukan trading.",
    link: `${link}04-Psikologis-ketika-trading`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1jplibjos1ckmugxREAPTEyapFAc69C7z/view?usp=drive_link",
    title: "Mekanisme dalam Otak yang Menyebabkan Bias",
    description: "Mekanisme otak yang memicu bias dalam trading.",
    link: `${link}05-Mekanisme-dalam-Otak-yang-Menyebabkan-Bias`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1xfCzsvuGzDKZep-dlkI1whELFp7MoeLp/view?usp=drive_link",
    title: "Pola Prilaku para Trader dan Investor",
    description: "Pola perilaku umum trader dan investor.",
    link: `${link}06-Pola-Prilaku-para-Trader-dan-Investor`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1fcTI3idhP0Auz_7TpARfy_LNdZXOmc1J/view?usp=drive_link",
    title: "Overconfidence Bias",
    description: "Mengenali dan mengatasi Overconfidence Bias.",
    link: `${link}07-Overconfidence-Bias`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1XvKSRu7n18-g3NfQBl6irKx3-A2fBdA7/view?usp=drive_link",
    title: "Herding Bevahior Bias",
    description: "Memahami Herding Behavior Bias dan dampaknya.",
    link: `${link}08-Herding-Bevahior-Bias`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1w8qIESFPpFP8KOdL0Efzq1DS--yZsXcB/view?usp=drive_link",
    title: "Loss Aversion Bias",
    description: "Mengelola Loss Aversion Bias dalam trading.",
    link: `${link}09-Loss-Aversion-Bias`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
