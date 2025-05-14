function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/2-Blockchain-Interoperability/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1-tNpd3SKbU_ErTlZlRh7DJa2gkIRioAM/view?usp=drive_link",
    title: "Landscape in Blockchain Interoperability",
    description: "Pengenalan dasar tentang smart contract development",
    link: `${link}1-Landscape-in-Blockchain-Interoperability`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1-yuWqQ2rX-Zy5sP_MMs5TllbIfHq15Kt/view?usp=drive_link",
    title: "Blockchain Dbms",
    description: "Memahami sistem manajemen database blockchain dan integrasinya",
    link: `${link}02-Blockchain-Dbms`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/101z6RNkonzDgUft2bG6isAUnY72t5r0A/view?usp=drive_link",
    title: "Multi Blockchain Environment",
    description: "Eksplorasi lingkungan multi-blockchain dan interaksinya",
    link: `${link}03-Multi-Blockchain-Environment`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1022EWwgMNmbciWPI1wSrkXo6Wk1mWL_B/view?usp=drive_link",
    title: "Blockchain Joint",
    description: "Pembelajaran tentang penggabungan dan kolaborasi antar blockchain",
    link: `${link}04-Blockchain-Joint`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/104kBXWQqckIGyzZz-z8STDMKklIJFQmb/view?usp=drive_link",
    title: "Blockchain Extension Sidechain",
    description: "Memahami konsep sidechain dan ekstensi blockchain",
    link: `${link}05-Blockchain-Extension-Sidechain`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1080f1GGVsyFyQDEB2byNZH4Un2cmt9K8/view?usp=drive_link",
    title: "Decentralised Exchange",
    description: "Pendalaman tentang pertukaran terdesentralisasi (DEX)",
    link: `${link}06-Decentralised-Exchange`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/10CArQuhfHG-MLBDLtS1AOyK7-Co6F_Gy/view?usp=drive_link",
    title: "State Pinning",
    description: "Konsep dan implementasi state pinning dalam blockchain",
    link: `${link}07-State-Pinning`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/10G8JbWA0GYBbPbtto2wSTzsfBMrcs3lp/view?usp=drive_link",
    title: "Consensus",
    description: "Mekanisme konsensus dalam interoperabilitas blockchain",
    link: `${link}08-Consensus`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/10GWQQewgVnsweHXmmT-tOyKJxPirS-25/view?usp=drive_link",
    title: "Communication and Standardisation",
    description: "Standarisasi dan komunikasi antar blockchain",
    link: `${link}09-Communication-and-Standardisation`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/10HnEC_YMqUV6u1O3XXhECi9N3KIhiD3Q/view?usp=drive_link",
    title: "Bridge",
    description: "Pengenalan teknologi bridge dalam blockchain",
    link: `${link}10-Bridge`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/10K4UJ5y0JkqPngSSnyHnDIj495sKeBWD/view?usp=drive_link",
    title: "Bridge in Summary",
    description: "Ringkasan komprehensif tentang bridge blockchain",
    link: `${link}11-Bridge-in-Summary`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/10T-ACZcwXX7YF7YjNIr2M_1o9JGhiUsE/view?usp=drive_link",
    title: "Benefits and Drawbacks",
    description: "Analisis keuntungan dan kerugian interoperabilitas blockchain",
    link: `${link}12-Benefits-and-Drawbacks`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/10Urk4DDfA18YAfU-hwD8pTL2W78xgZxZ/view?usp=drive_link",
    title: "Case Study Blockchain in SCM approach",
    description: "Studi kasus implementasi blockchain dalam manajemen rantai pasok",
    link: `${link}13-Case-Study-Blockchain-in-SCM-approach`
  },
  {
    id: "14",
    driveLink: "https://drive.google.com/file/d/10Ykmsg8cUVyhXXpaQ973blPpoQu8nU5u/view?usp=drive_link",
    title: "Multi blockchain Multi parties",
    description: "Implementasi multi blockchain dengan berbagai pihak terkait",
    link: `${link}14-Multi-blockchain-Multi-parties`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
