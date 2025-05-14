function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/crypto-investing/7-Self-Custody/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/13rT10vPv7GvyZQAIrk24QMgyU2u-KLMo/view?usp=drive_link",
    title: "Penjelasan Self-Custody",
    description: "Dasar-dasar tentang apa itu self-custody dalam cryptocurrency",
    link: `${link}1-Crypto-Self-Custody-Penjelasan-Self-Custody`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1wDqWWub7pZTU4cbRJhPg7H859yWKlG-a/view?usp=drive_link",
    title: "Berbagai Jenis Wallet",
    description: "Penjelasan tentang berbagai jenis wallet untuk self-custody",
    link: `${link}2-Crypto-Self-Custody-Berbagai-Jenis-Wallet`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1W07eEhs-N1t0_Xk7T2UuH0d-PTxbmnYj/view?usp=drive_link",
    title: "Trezor Safe 3",
    description: "Panduan penggunaan Trezor Safe 3 untuk self-custody",
    link: `${link}3-Crypto-Self-Custody-Trezor-Safe-3`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1oZ1OwTs5R3lFzO38pUY37jnooXmTMNOa/view?usp=drive_link",
    title: "Ledger Nano S Plus",
    description: "Panduan penggunaan Ledger Nano S Plus untuk self-custody",
    link: `${link}4-Crypto-Self-Custody-Ledger-Nano-S-Plus`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1GFeIGyn0Nl3nlm5lGLl28Q9MKXOgoQ7i/view?usp=drive_link",
    title: "Argent X Smart Contract",
    description: "Panduan penggunaan Argent X Smart Contract Wallet",
    link: `${link}5-Crypto-Self-Custody-Argent-X-Smart-Contract`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1YyPWa4OwwI6PQrdREqd57iTMQy9_Fg74/view?usp=drive_link",
    title: "Gnosis Safe Multisig",
    description: "Panduan penggunaan Gnosis Safe Multisig Wallet",
    link: `${link}6-Crypto-Self-Custody-Gnosis-Safe-Multisig`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1SVtJbYAGPEflVYIPq4lZrEnPB4F4Nawi/view?usp=drive_link",
    title: "Rangkuman dan Final Thoughts",
    description: "Kesimpulan dan pemikiran akhir tentang self-custody",
    link: `${link}7-Crypto-Self-Custody-Rangkuman-dan-Final-Thoughts`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
