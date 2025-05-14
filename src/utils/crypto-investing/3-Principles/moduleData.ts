function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/3-Principles/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1PCfitE1bCEXZMHNsglDP1RyWax5JBPi2/view?usp=drive_link",
    title: "Keyakinan",
    description: "Membangun keyakinan yang kuat dalam investasi crypto",
    link: `${link}1-Keyakinan`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1DqNkEbF2_o_bokOSUfCtvxQCoa-PlVZL/view?usp=drive_link",
    title: "Keberanian",
    description: "Mengembangkan keberanian dalam mengambil keputusan investasi",
    link: `${link}2-Keberanian`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1PtFYUddjGeIZc8gAXIf3ee_Hy1msxi2W/view?usp=drive_link",
    title: "Keterbukaan",
    description: "Pentingnya keterbukaan pikiran dalam menghadapi pasar crypto",
    link: `${link}3-Keterbukaan`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1ZfTaJQIpmBso8A_olkih5o1vR_REV1qX/view?usp=drive_link",
    title: "Kedisiplinan",
    description: "Membangun disiplin dalam strategi trading dan investasi",
    link: `${link}4-Kedisiplinan`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1C7WYoTKVTKyxT6aSnLje6dVpvCqhq5Ms/view?usp=drive_link",
    title: "Kesabaran",
    description: "Mengembangkan kesabaran dalam menghadapi volatilitas pasar",
    link: `${link}5-Kesabaran`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1qe_LtcAmAHHB2idSCwA0HihVh-MG3Kh2/view?usp=drive_link",
    title: "Kebebasan",
    description: "Mencapai kebebasan finansial melalui investasi crypto",
    link: `${link}6-Kebebasan`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1tnhQ7QfoDNjevKZ7YiHxRZMQDO3HToxE/view?usp=drive_link",
    title: "Kelanjutan",
    description: "Membangun strategi berkelanjutan dalam investasi crypto",
    link: `${link}7-Kelanjutan`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
