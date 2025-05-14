function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/9-Crypto-Fibonacci-Secret/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1PoqRx1F_j2NGQSGQs1hlf-2wrBpP4yyX/view?usp=drive_link",
    title: "Apa itu Fibonacci",
    description: "Pengenalan dasar tentang Fibonacci dan penggunaannya dalam trading.",
    link: `${link}01-Apa-itu-Fibonacci`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/12R3R27gytC06U3QsC4w-xuTCV5Hd5txQ/view?usp=drive_link",
    title: "Keajaiban Fibonacci",
    description: "Eksplorasi tentang keunikan dan keajaiban deret Fibonacci.",
    link: `${link}02-Keajaiban-Fibonacci`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1XP4UmK4MfxsoCFbdtwmwFLFH32fBAiqg/view?usp=drive_link",
    title: "Golden Ratio Fibonacci",
    description: "Pemahaman tentang Golden Ratio dalam konteks Fibonacci.",
    link: `${link}03-Golden-Ratio-Fibonacci`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1aoMH-5B2YXc7ckzwF6cHwC2q4V777xFh/view?usp=drive_link",
    title: "Sistem Angka Fibonacci",
    description: "Penjelasan tentang sistem angka Fibonacci dan aplikasinya.",
    link: `${link}04-Sistem-Angka-Fibonacci`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1iTxvZlGPSTEZcSpXnJmOacm9ItsTNKL_/view?usp=drive_link",
    title: "Retracement Fibonacci",
    description: "Panduan menggunakan Fibonacci Retracement dalam trading.",
    link: `${link}05-Retracement-Fibonacci`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1UxLSrYXGh28RCsz9iu1ExmruTSy837Xp/view?usp=drive_link",
    title: "Harmonic Support Using Fibonacci",
    description: "Teknik menggunakan Fibonacci untuk mencari level support harmonis.",
    link: `${link}06-Harmonic-Support-Using-Fibonacci`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1ZfR4Ags4Xpz2e5RRitsG-f2pQYJ9wq_j/view?usp=drive_link",
    title: "Harmonic Resistance Using Fibonacci",
    description: "Cara menggunakan Fibonacci untuk mengidentifikasi resistance harmonis.",
    link: `${link}07-Harmonic-Resistance-Using-Fibonacci`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/11shvHU_RPJuPaCPomNFNnQ3MtJz0qxQC/view?usp=drive_link",
    title: "Trend Based Fib Extension",
    description: "Strategi menggunakan Fibonacci Extension berdasarkan trend.",
    link: `${link}08-Trend-Based-Fib-Extension`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1bMcdlp782n2QMKKlox2bbuaSAp1IXAuG/view?usp=drive_link",
    title: "Fib Channels",
    description: "Panduan menggunakan Fibonacci Channels dalam analisis teknikal.",
    link: `${link}09-Fib-Channels`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/10gNXpqTbNLH2y_A9mGpShhHzIol1rDRW/view?usp=drive_link",
    title: "Pendalaman Fibonacci",
    description: "Materi lanjutan untuk pendalaman teknik Fibonacci dalam trading.",
    link: `${link}10-Pendalaman-Fibonacci`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
