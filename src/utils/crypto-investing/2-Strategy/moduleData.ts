function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/2-Strategy/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1ZWrjkEoxIYp_n21HKv9IN3vislLYQZIx/view?usp=drive_link",
    title: "Strategi Bajing Loncat",
    description: "Strategi trading dengan memanfaatkan momentum pergerakan cepat pasar",
    link: `${link}1-Strategi-Bajing-Loncat`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1htDsFPCgA6oxoCUIBYBjF-2MpzOD8ugE/view?usp=drive_link",
    title: "Strategi Serigala Domba",
    description: "Teknik trading dengan mengikuti pergerakan smart money",
    link: `${link}2-Strategi-Serigala-Domba`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1UnsqC7PosHXDgvTikJTN6d64vzzieqPL/view?usp=drive_link",
    title: "Strategi Moon Bag",
    description: "Strategi investasi jangka panjang untuk proyek berpotensi tinggi",
    link: `${link}3-Strategi-Moon-Bag`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1KGAC3C0NAnL5kWkDRXOWAPK25Oq2DWhx/view?usp=drive_link",
    title: "Strategi Gulung-gulung",
    description: "Teknik akumulasi aset crypto secara bertahap",
    link: `${link}4-Strategi-Gulung-gulung`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1YXLvfirUc1aiycVQB3QocmCPgLK1Z5x5/view?usp=drive_link",
    title: "Strategi Tebar Jala",
    description: "Strategi diversifikasi portfolio dengan berbagai altcoin",
    link: `${link}5-Strategi-Tebar-Jala`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/19JbSz7ExwHUk4xx-RZ9YXZtsjV-h3ZPm/view?usp=drive_link",
    title: "Strategi Terkonsentrasi",
    description: "Teknik fokus investasi pada beberapa aset crypto terpilih",
    link: `${link}6-Strategi-Terkonsentrasi`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1wcyQn8i5NMkwAedcwCBYNOWFjm4qNSQl/view?usp=drive_link",
    title: "Strategi Cicilan",
    description: "Strategi investasi bertahap dengan metode Dollar Cost Averaging",
    link: `${link}7-Strategi-Cicilan`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
