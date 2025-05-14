function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/9-Bitcoin-Transaction-in-Depth/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1SAUfcvd2vCuKYuAqlQUaIAXUUkSEVRDi/view?usp=drive_link",
    title: "Bitcoin Transaction In Depth",
    description: "Pemahaman mendalam tentang transaksi Bitcoin",
    link: `${link}1-Bitcoin-Transaction-In-Depth`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1Ybu8By56njwbrw8avWyj-yih3rxznQi2/view?usp=drive_link",
    title: "base58Check Encoding",
    description: "Penjelasan tentang encoding base58Check dalam Bitcoin",
    link: `${link}2-base58Check-Encoding`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1-EJD6eI-lbINkwTONMTJfL6Ubn_QL-UN/view?usp=drive_link",
    title: "Bitcoin Scripting",
    description: "Dasar-dasar scripting dalam Bitcoin",
    link: `${link}3-Bitcoin-Scripting`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1zIATmK29l8bydcExoZHYws-NT70cCQ7u/view?usp=drive_link",
    title: "Pay to Address P2A",
    description: "Memahami mekanisme Pay to Address",
    link: `${link}4-Pay-to-Address-P2A`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/10FzyTGp0qpD0KCE2i2mGnTxqrmxcE8k2/view?usp=drive_link",
    title: "Pay to Public Key P2PK",
    description: "Memahami mekanisme Pay to Public Key",
    link: `${link}5-Pay-to-Public-Key-P2PK`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1aTO7VDtHMIYhlCTFkbqf3lY_gG7jJIYH/view?usp=drive_link",
    title: "Hash Locked Transaction HLT",
    description: "Implementasi Hash Locked Transaction",
    link: `${link}6-Hash-Locked-Transaction-HLT`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1sdgv-8DnHkwgejlxdZFTV_MZjDXJtvWm/view?usp=drive_link",
    title: "Sequence Number",
    description: "Penggunaan sequence number dalam transaksi",
    link: `${link}7-Sequence-Number`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1YROI37NChKD1QSw03k3oBSSL6CYLIVz4/view?usp=drive_link",
    title: "Playing Around with IDE",
    description: "Eksplorasi IDE untuk pengembangan Bitcoin",
    link: `${link}8-Playing-Around-with-IDE`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1GRAuv78IdGUVXEKv80rrWvVISTYKbKVI/view?usp=drive_link",
    title: "QUIZ",
    description: "Evaluasi pemahaman materi",
    link: `${link}9-QUIZ`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1q81_GoSZcugztvHmvlGsTPcJvnSU1SqM/view?usp=drive_link",
    title: "Revisting Bitcoin Transaction",
    description: "Mengulas kembali konsep transaksi Bitcoin",
    link: `${link}10-Revisting-Bitcoin-Transaction`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/1LoAKlvLjcHKA67M6iTex5b0RJL6I2K71/view?usp=drive_link",
    title: "RAW Transaction",
    description: "Pendalaman transaksi RAW Bitcoin",
    link: `${link}11-RAW-Transaction`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/1Digwzhw4n0NOHOv2H_PXcTuYwJ5kSwcb/view?usp=drive_link",
    title: "Creating Bitcoin Script",
    description: "Cara membuat script Bitcoin",
    link: `${link}12-Creating-Bitcoin-Script`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/1bA4HlQ_QeUQjkX5eBHs0qTI6rm2ii5y9/view?usp=drive_link",
    title: "Advanced Bitcoin Protocol",
    description: "Protokol Bitcoin tingkat lanjut",
    link: `${link}13-Advanced-Bitcoin-Protocol`
  },
  {
    id: "14",
    driveLink: "https://drive.google.com/file/d/1XUy2XJ17kJiJtz7ug5P4LmVEtvlhHWKv/view?usp=drive_link",
    title: "Bitcoin Programming with BX",
    description: "Pemrograman Bitcoin menggunakan BX",
    link: `${link}14-Bitcoin-Programming-with-BX`
  },
  {
    id: "15",
    driveLink: "https://drive.google.com/file/d/1Br1m63Nk5ulx1m_hNGvNqqKAjgwsjGm7/view?usp=drive_link",
    title: "Key Generation with BX",
    description: "Generasi kunci menggunakan BX",
    link: `${link}15-Key-Generation-with-BX`
  },
  {
    id: "16",
    driveLink: "https://drive.google.com/file/d/1W4mityX9hyDMiq-R_lxBazuOSHILcUGK/view?usp=drive_link",
    title: "Other Important BX Operations",
    description: "Operasi-operasi penting lainnya dengan BX",
    link: `${link}16-Other-Important-BX-Operations`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
