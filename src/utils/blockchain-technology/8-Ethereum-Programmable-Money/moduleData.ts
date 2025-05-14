function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/8-Ethereum-Programmable-Money/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1FklYRyOdiqdlTJBW6bP2R5qSa1_7h1B2/view?usp=drive_link",
    title: "Introduction to Ethereum",
    description: "Pengenalan dasar tentang Ethereum",
    link: `${link}1-Introduction-to-Ethereum`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1yhGzG-vKs-3eeJoKNwJI0VNvF98xfNSY/view?usp=drive_link",
    title: "Ethereum vs Bitcoin",
    description: "Perbandingan antara Ethereum dan Bitcoin",
    link: `${link}2-Ethereum-vs-Bitcoin`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1lf33Dq11YVHuByyszo9CEeCbWOY4pXYl/view?usp=drive_link",
    title: "Ethereum History and Stages",
    description: "Sejarah dan tahapan perkembangan Ethereum",
    link: `${link}3-Ethereum-History-and-Stages`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/17ox5-lGi9j2jtCNdVsu7YS-s6xXx2zZp/view?usp=drive_link",
    title: "Ethereum and Blockchain Components",
    description: "Komponen-komponen Ethereum dan blockchain",
    link: `${link}4-Ethereum-and-Blockchain-Components`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/17cfGTqvBS6X-MBrIunXdVojVzNt_EKTh/view?usp=drive_link",
    title: "Ethereum Denomination Wallet and Networks",
    description: "Denominasi, wallet, dan jaringan Ethereum",
    link: `${link}5-Ethereum-Denomination-Wallet-and-Networks`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/10kvIzHqs_eieZEb-vbdoZiCXNpMZmNRr/view?usp=drive_link",
    title: "Introduction Ethereum Transaction",
    description: "Pengenalan transaksi di Ethereum",
    link: `${link}6-Introduction-Ethereum-Transaction`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1y-wPblhb4WDont4Ei_T15OB84YisSvKb/view?usp=drive_link",
    title: "Structure of Transaction",
    description: "Struktur transaksi Ethereum",
    link: `${link}7-Structure-of-Transaction`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/19c7V3ItKzGlUBxrspRb4UT_TDWKIlsof/view?usp=drive_link",
    title: "Transaction Nonce Gas and Gas Limit",
    description: "Nonce, Gas, dan Gas Limit dalam transaksi",
    link: `${link}8-Transaction-Nonce-Gas-and-Gas-Limit`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1Aam5L3nXCsMqXlKkvApBoZw-vkZyAlsC/view?usp=drive_link",
    title: "The Merge",
    description: "Penjelasan tentang The Merge",
    link: `${link}9-The-Merge`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1S06j9VaDlWRRAfH61XztFNZtVh0G7-in/view?usp=drive_link",
    title: "Myths about the Merge",
    description: "Mitos-mitos seputar The Merge",
    link: `${link}10-Myths-about-the-Merge`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/1P1RQK5hlb0HogQVU3aUywfe4oHGXYYG2/view?usp=drive_link",
    title: "Ethereum Virtual Machine",
    description: "Penjelasan tentang Ethereum Virtual Machine",
    link: `${link}11-Ethereum-Virtual-Machine`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/1JL1Zr0PiIIrH4D09Zzzr0hlbheT7R63w/view?usp=drive_link",
    title: "Stake ETH in LIDO",
    description: "Cara melakukan staking ETH di LIDO",
    link: `${link}12-Stake-ETH-in-LIDO`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/1evFBFV6U5Qas6phA8XfAnXYF-woHvssr/view?usp=drive_link",
    title: "stETH and Withdrawal",
    description: "Penjelasan tentang stETH dan proses withdrawal",
    link: `${link}13-stETH-and-Withdrawal`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
