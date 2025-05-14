function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/11-Crypto-Order-Flow/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1og5bIcZScWBP6KI_laEGsbZf-ijj2e2z/view?usp=drive_link",
    title: "Apa itu Order Flow",
    description: "Pengenalan dasar tentang Order Flow dan perannya dalam trading.",
    link: `${link}01-Apa-itu-Order-Flow`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1PEef3gsWm5OdpJqSLzagQ4uPCn07wPlz/view?usp=drive_link",
    title: "Dasar dari Order Flow",
    description: "Pemahaman fundamental tentang konsep Order Flow.",
    link: `${link}02-Dasar-dari-Order-Flow`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1XHeBeYgfjz2NQsHhyCG_b5hLcmPGyuzw/view?usp=drive_link",
    title: "Cara melihat Footprint",
    description: "Panduan membaca dan menganalisis Footprint chart.",
    link: `${link}03-Cara-melihat-Footprint`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1owLJVr4VmIC_l5EgSEb-_y-Bkf87grFV/view?usp=drive_link",
    title: "Cara membaca Order Flow",
    description: "Teknik membaca dan menginterpretasi Order Flow.",
    link: `${link}04-Cara-membaca-Order-Flow`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/16Cfnbc46-haqDTkAEVrzqjnq2IUpfkXV/view?usp=drive_link",
    title: "High Value Node dan Delta",
    description: "Analisis High Value Node dan Delta dalam Order Flow.",
    link: `${link}05-High-Value-Node-dan-Delta`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1ORLONb0xPwx8X-g3lofGZGDfxi0s0Zh6/view?usp=drive_link",
    title: "Volume Cluster",
    description: "Memahami dan menggunakan Volume Cluster dalam analisis.",
    link: `${link}06-Volume-Cluster`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1pQ7w9o-CNvdCmz5eflRmVAkW8ichuCWl/view?usp=drive_link",
    title: "Unfinished Business dan Cumulative Delta",
    description: "Konsep Unfinished Business dan penggunaan Cumulative Delta.",
    link: `${link}07-Unfinished-Business-dan-Cumulative-Delta`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1ehoIc-b_XwuKhEv7tJkynAk9Nw0TwuQf/view?usp=drive_link",
    title: "Penggunaan ATAS",
    description: "Panduan menggunakan platform ATAS untuk Order Flow.",
    link: `${link}08-Penggunaan-ATAS`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1EKWBVgXkRUPoFKcSHpjxhRidxxvRsacz/view?usp=drive_link",
    title: "Technical Indicators dalam ATAS",
    description: "Penggunaan indikator teknikal dalam platform ATAS.",
    link: `${link}09-Technical-Indicators-dalam-ATAS`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1i1ezvbJjOosE5_PIlaIEESNx7152sBJQ/view?usp=drive_link",
    title: "Heatmap",
    description: "Cara menggunakan dan menganalisis Heatmap dalam Order Flow.",
    link: `${link}10-Heatmap`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
