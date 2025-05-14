function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/5-Guide/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/14AOZPMYew3dgP-MHNZ2XcPFSzskn4iCr/view?usp=drive_link",
    title: "Apakah Bisa Kaya Tanpa Investasi",
    description: "Memahami pentingnya investasi dalam membangun kekayaan",
    link: `${link}1-Apakah-Bisa-Kaya-Tanpa-Investasi`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1ahdBvyeazH4DwHi8h3SZUmQkjpwhVOeJ/view?usp=drive_link",
    title: "Efek Kupu Kupu",
    description: "Dampak keputusan kecil dalam investasi jangka panjang",
    link: `${link}2-Efek-Kupu-Kupu`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1MM6tXA48fYeZCxS8_VTFabijwBYhuQRd/view?usp=drive_link",
    title: "Men Lie Woman Lie Numbers Dont",
    description: "Pentingnya data dan analisis dalam pengambilan keputusan",
    link: `${link}3-Men-Lie-Woman-Lie-Numbers-Dont`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1YNR6Wlgf6EAp254CDLf2WvqD6UJQY3bg/view?usp=drive_link",
    title: "Berinvestasi Crypto Mulai Dari Mana",
    description: "Panduan langkah awal memulai investasi cryptocurrency",
    link: `${link}4-Berinvestasi-Crypto-Mulai-Dari-Mana`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1FcompB6dryIQ61EC7UT78GC3u9FCYBn9/view?usp=drive_link",
    title: "Investor VS Bajing Loncat",
    description: "Membedakan strategi investasi jangka panjang dan trading",
    link: `${link}5-Investor-VS-Bajing-Loncat`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1R9r-hxEQGz9f9jciOLk_ixF9Ui8iCmos/view?usp=drive_link",
    title: "Dimana Saya Beli Crypto",
    description: "Panduan memilih platform untuk membeli cryptocurrency",
    link: `${link}6-Dimana-Saya-Beli-Crypto`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1-H-ch7qYVSsLs9sDfP5JQiT42MIwivO_/view?usp=drive_link",
    title: "Dimana Tempat Menyimpan Crypto Saya",
    description: "Opsi penyimpanan cryptocurrency yang aman",
    link: `${link}7-Dimana-Tempat-Menyimpan-Crypto-Saya`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/10n4AGpQLVHTTDCFbf4LlDOJiP5ZsZJqY/view?usp=drive_link",
    title: "Saya Siap Menjadi Seorang Investor Cryptocurrency",
    description: "Persiapan mental dan teknis menjadi investor crypto",
    link: `${link}8-Saya-Siap-Menjadi-Seorang-Investor-Cryptocurrency`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
