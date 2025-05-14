function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/7-Monero-Anonymity/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1y-0lri2dORBKEqGT0Ks01gzIAgdi6DAS/view?usp=sharing",
    title: "Norway Cryptocurrency Ransom Case 2018",
    description: "Studi kasus pemerasan cryptocurrency di Norwegia tahun 2018",
    link: `${link}1-Norway-Cryptocurrency-Ransom-Case-2018`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1XIrslmAsXar55SzTxNHXWh6rtTHxH3eE/view?usp=sharing",
    title: "History of Monero",
    description: "Sejarah dan latar belakang cryptocurrency Monero",
    link: `${link}2-History-of-Monero`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1mY0bm0TfnP9yS27BeyZKBNMC5afE1_aw/view?usp=drive_link",
    title: "Cryptocurrency Privacy Background",
    description: "Latar belakang privasi dalam cryptocurrency",
    link: `${link}3-Cryptocurrency-Privacy-Background`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1eqJBzxHiIcKiRMlgxYpJik6XGniSIVyG/view?usp=drive_link",
    title: "Anonimity Monero as Cryptocurrency",
    description: "Fitur anonimitas Monero sebagai cryptocurrency",
    link: `${link}4-Anonimity-Monero-as-Cryptocurrency`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1JMx1_ONO_wmktUQUxPSnGWC38j3yPy8J/view?usp=drive_link",
    title: "Monero Transaction Part 1",
    description: "Penjelasan transaksi Monero bagian pertama",
    link: `${link}5-Monero-Transaction-Part-1`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1QfJyejP9tql4wVWPP_vjMDV7w9REHbkx/view?usp=drive_link",
    title: "Monero Transaction Part 2",
    description: "Penjelasan transaksi Monero bagian kedua",
    link: `${link}6-Monero-Transaction-Part-2`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1odEcCHiOimLJQ3KTzmr_P9bFOyHoMNsB/view?usp=drive_link",
    title: "Known Anonymity Problems",
    description: "Masalah-masalah anonimitas yang telah diketahui",
    link: `${link}7-Known-Anonymity-Problems`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1RCeBl_tmMxy_SptXMTy0Xm_gjWBPmwVp/view?usp=drive_link",
    title: "Monero Ring Attack MRA",
    description: "Penjelasan tentang serangan Ring pada Monero",
    link: `${link}8-Monero-Ring-Attack-MRA`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1j4dh2aDjUKutYOjB6VjIaVPyE7lmZ7e5/view?usp=drive_link",
    title: "Problems of Key Reuse",
    description: "Masalah penggunaan ulang kunci dalam Monero",
    link: `${link}9-Problems-of-Key-Reuse`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
