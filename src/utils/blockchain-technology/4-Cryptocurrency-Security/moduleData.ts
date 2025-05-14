function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/4-Cryptocurrency-Security/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/13Mz8rsStMgPF_L50B6zrwrWqf-TmeLPo/view?usp=drive_link",
    title: "Blockchain & Security Overview",
    description: "Pengenalan dasar tentang keamanan blockchain dan aspek-aspeknya",
    link: `${link}1-Blockchain-and-Security-Overview`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/13NJnpOqc4Iqzqn5BzeYwb9ayzJrfjAU1/view?usp=drive_link",
    title: "Blockchain System Components",
    description: "Komponen-komponen sistem dalam arsitektur blockchain",
    link: `${link}2-Blockchain-System-Components`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/13QoEKEKmQ88twou6rVbAD31MEMFLmcGo/view?usp=drive_link",
    title: "Blockchain Execution Environment",
    description: "Lingkungan eksekusi dalam sistem blockchain",
    link: `${link}3-Blockchain-Execution-Environment`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/13ZTsPrUSj5DEc4UWgyiRohssiTRrCSe5/view?usp=drive_link",
    title: "Blockchain is a Warzone",
    description: "Tantangan dan ancaman keamanan dalam ekosistem blockchain",
    link: `${link}4-Blockchain-is-a-Warzone`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1eYh3jPsMaaP5aTpjFjNG87haUBTKw2Wq/view?usp=drive_link",
    title: "Instant or Unsafe Products",
    description: "Risiko produk instan dan tidak aman dalam blockchain",
    link: `${link}5-Instant-or-Unsafe-Products`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1_x2wJ3xUZOcJm9vuGHMXS7mWekv_x8bu/view?usp=drive_link",
    title: "Blockchain Security Issues",
    description: "Masalah-masalah keamanan umum dalam blockchain",
    link: `${link}6-Blockchain-Security-Issues`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/126kbiSf9RVi5Ydzb6qvWDNQf5IAFk-i9/view?usp=drive_link",
    title: "Cryptographic Techniques",
    description: "Teknik-teknik kriptografi dalam keamanan blockchain",
    link: `${link}7-Cryptographic-Techniques`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1JS7XNCfA9hVmrSFuSaG4dDEymYjT4S_T/view?usp=drive_link",
    title: "Blockchain Memory Pool Mempool",
    description: "Memahami konsep dan keamanan mempool blockchain",
    link: `${link}8-Blockchain-Memory-Pool-Mempool`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1axgXJtmsd1BbfBnFtTc4bvvIKMSNmtdo/view?usp=drive_link",
    title: "Miner Extractable Value MEV",
    description: "Konsep MEV dan implikasinya terhadap keamanan",
    link: `${link}9-Miner-Extractable-Value-MEV`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1m7m-gyt17VOGB2qeRGLwC20GIbhlX51l/view?usp=drive_link",
    title: "Finality Issues",
    description: "Masalah-masalah terkait finalitas transaksi",
    link: `${link}10-Finality-Issues`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/1w29qILjJnIJaVc4Rixhb8o3zGnuaWAuj/view?usp=drive_link",
    title: "Solidity Issues",
    description: "Masalah keamanan dalam bahasa pemrograman Solidity",
    link: `${link}11-Solidity-Issues`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/1kQycrERcvJBNABRjia7HeAuLPCMRxMPE/view?usp=drive_link",
    title: "Permanent Contract & Upgradeable Contract",
    description: "Perbedaan dan keamanan kontrak permanen dan dapat diupgrade",
    link: `${link}12-Permanent-Contract-and-Upgradeable-Contract`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/1gX0i-LFZYFDBiYO5qFcprJtXFwsno4-0/view?usp=drive_link",
    title: "Decentralized Finance Issues",
    description: "Masalah keamanan dalam DeFi",
    link: `${link}13-Decentralized-Finance-Issues`
  },
  {
    id: "14",
    driveLink: "https://drive.google.com/file/d/1qNPTMRlUfff1IVCwzQrdJIkFXdHsY3u0/view?usp=drive_link",
    title: "User Issues",
    description: "Masalah keamanan dari sisi pengguna",
    link: `${link}14-User-Issues`
  },
  {
    id: "15",
    driveLink: "https://drive.google.com/file/d/1TVKOPkF-IamRtzRnQXWfWZ4VYudOxksf/view?usp=drive_link",
    title: "Security Best Practices",
    description: "Praktik terbaik dalam keamanan blockchain",
    link: `${link}15-Security-Best-Practices`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
