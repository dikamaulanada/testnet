function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/6-Alpha/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1tb2q97GV1KRp5ofz9WnB3D98p_ZszLoW/view?usp=drive_link",
    title: "The Elevator Concept",
    description: "Strategi trading menggunakan konsep elevator dalam market crypto",
    link: `${link}1-The-Elevator-Concept`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/182ahrYzn8xn42_MoyC-qHzi3SvHYTO7I/view?usp=drive_link",
    title: "Konsep Pagi Siang Malam",
    description: "Analisis market berdasarkan periode waktu trading",
    link: `${link}2-Konsep-Pagi-Siang-Malam`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1_-Y_q3tzYEu3Q-fd5soT5MJpHA_Dhm4W/view?usp=drive_link",
    title: "The Wallet Tracker The Crypto Stalker",
    description: "Teknik melacak dan menganalisis wallet crypto berpengaruh",
    link: `${link}3-The-Wallet-Tracker-The-Crypto-Stalker`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/17MpQl80AEfNIxI05xqMqEJiWeb-4VMX2/view?usp=drive_link",
    title: "Analisis Sentimen Fear and Greed",
    description: "Menggunakan indikator fear & greed untuk analisis market",
    link: `${link}4-Analisis-Sentimen-Fear-and-Greed`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/18Mz8BvGchChkHLno6EHgyZzL-fw5akey/view?usp=drive_link",
    title: "Stock To Flow Model",
    description: "Penerapan model S2F dalam analisis crypto",
    link: `${link}5-Stock-To-Flow-Model`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/18KtVlSGqk6ur3d0l56__GRE890irJ89d/view?usp=drive_link",
    title: "Cara Memeriksa Smart Contract",
    description: "Panduan analisis keamanan smart contract",
    link: `${link}6-Cara-Memeriksa-Smart-Contract`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/18cpvMt6VuRwB8-2kntV0AK-dEkhTIKwL/view?usp=drive_link",
    title: "Miximizing AI To Beat a Market",
    description: "Mengoptimalkan AI untuk keunggulan dalam trading",
    link: `${link}7-Miximizing-AI-To-Beat-a-Market`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
