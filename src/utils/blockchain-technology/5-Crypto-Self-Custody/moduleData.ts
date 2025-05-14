function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/5-Crypto-Self-Custody/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1AD01Lo8rUH2mMjwA_OOfPkFUXJ-s9FUK/view?usp=drive_link",
    title: "Hot Wallet vs Cold Wallet Doodle",
    description: "Penjelasan perbedaan antara hot wallet dan cold wallet",
    link: `${link}1-Hot-Wallet-vs-Cold-Wallet-Doodle`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1AlCF91zBGgLNPG5cIOtK5S4trDarl-MT/view?usp=drive_link",
    title: "Setup Ledger Cold Wallet",
    description: "Panduan lengkap setup hardware wallet Ledger",
    link: `${link}2-Setup-Ledger-Cold-Wallet`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1UIM9cFgTnMeCtnF_ARWjG3VueHSpZn1E/view?usp=drive_link",
    title: "Reset Recover Ledger",
    description: "Cara mereset dan memulihkan wallet Ledger",
    link: `${link}3-Reset-Recover-Ledger`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1qa-Nr5A98e6xFDvQiHc-WLVuJohnlPqf/view?usp=drive_link",
    title: "Connect Ledger to Ledger Desktop App",
    description: "Panduan menghubungkan Ledger ke aplikasi desktop",
    link: `${link}4-Connect-Ledger-to-Ledger-Desktop-App`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1Px6pTwEIdi42PHauRMTrFqTmMkLzt5UR/view?usp=drive_link",
    title: "Testnet in Ledger",
    description: "Menggunakan jaringan testnet dengan Ledger",
    link: `${link}5-Testnet-in-Ledger`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1v9XO5lamfigtJH-NWaNihpT3m6y8XUfm/view?usp=drive_link",
    title: "Connect Cold Wallet to Metamask",
    description: "Cara menghubungkan cold wallet dengan Metamask",
    link: `${link}6-Connect-Cold-Wallet-to-Metamask`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/184yi-In5ABY6gcTauFZebYbP1L9V0nWU/view?usp=drive_link",
    title: "Transaksi dengan Cold Wallet",
    description: "Panduan melakukan transaksi menggunakan cold wallet",
    link: `${link}7-Transaksi-dengan-Cold-Wallet`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
