function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/6-Cryptocurrency-Fundamentals/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1Ol68ScjwXRDAy2ObNSwr83UMF1yYaaxZ/view?usp=drive_link",
    title: "Apa Itu Uang",
    description: "Pengenalan konsep dasar uang dan fungsinya",
    link: `${link}1-Apa-Itu-Uang`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1je3S8yrLRpicuA0Wanp2mWLYPPAKQo-V/view?usp=drive_link",
    title: "Kriptografi dan Hash Function",
    description: "Dasar-dasar kriptografi dan fungsi hash dalam blockchain",
    link: `${link}2-Kriptografi-dan-Hash-Function`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1pzgf7eDXgw2QELoxgheSfzGRi9nF-XtX/view?usp=drive_link",
    title: "Byzantine Generals Problem",
    description: "Memahami masalah Byzantine Generals dalam konteks blockchain",
    link: `${link}3-Byzantine-Generals-Problem`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1ex72_FB-NiN5_2mjbQnaKDHMbkf0MqMs/view?usp=drive_link",
    title: "The Basics of Bitcoin and Blockchain",
    description: "Pengenalan dasar Bitcoin dan teknologi blockchain",
    link: `${link}4-The-Basics-of-Bitcoin-and-Blockchain`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1P2Ubbo7PR33YfwVR9JF2DvItk0GF-MxI/view?usp=drive_link",
    title: "Mining Concepts",
    description: "Konsep dasar penambangan cryptocurrency",
    link: `${link}5-Mining-Concepts`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1QdoCANJ00ho_0wdXgqDijbA910nRqnOW/view?usp=drive_link",
    title: "Crypto Wallets",
    description: "Pengenalan berbagai jenis dompet cryptocurrency",
    link: `${link}6-Crypto-Wallets`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/14elOd7X_FPOoDAtL94uQ9qDPhGqQJAq5/view?usp=drive_link",
    title: "How to Earn Bitcoin",
    description: "Berbagai cara untuk mendapatkan Bitcoin",
    link: `${link}7-How-to-Earn-Bitcoin`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1jiFhW7rnIg05iKLkORzeYyz2gMYVXPVs/view?usp=drive_link",
    title: "Bitcoin Usage",
    description: "Cara penggunaan dan pemanfaatan Bitcoin",
    link: `${link}8-Bitcoin-Usage`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1TKhxsrwItVR2_Hfjz7fXvbxQZoCcjaZT/view?usp=drive_link",
    title: "Blockchain and Consensus Algorithm",
    description: "Mekanisme konsensus dalam sistem blockchain",
    link: `${link}9-Blockchain-and-Consensus-Algorithm`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1k7MgKEMoCCWIufk7h4W3Zftn_N5UDcZl/view?usp=drive_link",
    title: "Blockchain Security",
    description: "Aspek keamanan dalam teknologi blockchain",
    link: `${link}10-Blockchain-Security`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/1lH2MRd_vlG-YeyUiFIR1gWbKtGO15dDD/view?usp=drive_link",
    title: "Problem Pada Blockchain",
    description: "Tantangan dan masalah dalam implementasi blockchain",
    link: `${link}11-Problem-Pada-Blockchain`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/1PTwouRl1IslmZ5-rzN-CjKJLg7lfAoba/view?usp=drive_link",
    title: "Privasi dan Anonimitas",
    description: "Aspek privasi dan anonimitas dalam cryptocurrency",
    link: `${link}12-Privasi-dan-Anonimitas`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/1vOBjHgwfPxj9TalbqQ57AVGuT40JxrOg/view?usp=drive_link",
    title: "Perangkat Anonimitas",
    description: "Tools dan teknologi untuk meningkatkan anonimitas",
    link: `${link}13-Perangkat-Anonimitas`
  },
  {
    id: "14",
    driveLink: "https://drive.google.com/file/d/1v26Cyt6up1WFW4sDT1ZuGv8Bboxn9gwQ/view?usp=drive_link",
    title: "Pemanfaatan Blockchain",
    description: "Berbagai aplikasi dan use case teknologi blockchain",
    link: `${link}14-Pemanfaatan-Blockchain`
  },
  {
    id: "15",
    driveLink: "https://drive.google.com/file/d/1EDoEvVVEbMdEBvp_5zXngG0kkWOb8r_4/view?usp=drive_link",
    title: "Teknologi Blockchain",
    description: "Pendalaman teknologi yang mendasari blockchain",
    link: `${link}15-Teknologi-Blockchain`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
