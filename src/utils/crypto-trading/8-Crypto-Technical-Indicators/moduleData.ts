function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-trading/8-Crypto-Technical-Indicators/";

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1gFchIAobH2n0MBZsTrJmaHn6bzH2YIv3/view?usp=drive_link",
    title: "Technical Indicators",
    description: "Pengenalan tentang indikator teknikal dalam analisis crypto.",
    link: `${link}01-Technical-Indicators`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1kG6xjeGXf9tlGuPjKqhWMAJdGJ2s-FKM/view?usp=drive_link",
    title: "Pivot Point",
    description: "Penjelasan tentang Pivot Point dan penggunaannya dalam trading.",
    link: `${link}02-Pivot-Point`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1vyNY1d2ma7sSqi9o7117-bYmgJXHWtvf/view?usp=drive_link",
    title: "Keltner Channel",
    description: "Panduan untuk memahami dan menggunakan Keltner Channel.",
    link: `${link}03-Keltner-Channel`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1FEEQSJ5IKzZCA2THiWoSpzROVkRkWQFH/view?usp=drive_link",
    title: "Parabolic SAR",
    description: "Cara menggunakan indikator Parabolic SAR dalam analisis teknikal.",
    link: `${link}04-Parabolic-SAR`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1zM6-jHA9kd6mhWzGKiQsGG8obAfI4nou/view?usp=drive_link",
    title: "Renko Chart",
    description: "Penjelasan tentang Renko Chart dan aplikasinya dalam trading.",
    link: `${link}05-Renko-Chart`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1XmcsfkTiRbAuGntWsS6K-hwJSP_-jG3h/view?usp=drive_link",
    title: "Know Sure Thing",
    description: "Panduan untuk memahami indikator Know Sure Thing (KST).",
    link: `${link}06-Know-Sure-Thing`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1R-ef45EawVFKj8YYQSGgllmUciTg-njB/view?usp=drive_link",
    title: "Donchain Channel",
    description: "Penjelasan tentang Donchain Channel dan penggunaannya.",
    link: `${link}07-Donchain-Channel`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1DglkZc_LTn_wllT26y6DpDoPNEjN2kaZ/view?usp=drive_link",
    title: "Chaikin Money Flow",
    description: "Cara menggunakan indikator Chaikin Money Flow dalam analisis.",
    link: `${link}08-Chaikin-Money-Flow`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1MRCul29gIsvqes7g6N5S8hit0WGML_Wx/view?usp=drive_link",
    title: "Ichimoku Cloud",
    description: "Panduan untuk memahami dan menggunakan indikator Ichimoku Cloud.",
    link: `${link}09-Ichimoku-Cloud`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1MOXRprVjElash53KAm0RmljTg5gknFz1/view?usp=drive_link",
    title: "Volume Profile Fixed Range",
    description: "Penjelasan tentang Volume Profile Fixed Range dan aplikasinya.",
    link: `${link}10-Volume-Profile-Fixed-Range`
  },
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
