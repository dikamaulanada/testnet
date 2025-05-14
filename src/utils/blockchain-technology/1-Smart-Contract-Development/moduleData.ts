function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/1-Smart-Contract-Development/"

export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1IYnBahK3PxxKhNCJ-DXt6fIwMvXhSfHO/view?usp=drive_link",
    title: "Introduction",
    description: "Pengenalan dasar tentang smart contract development",
    link: `${link}1-Introduction`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/1jke3CPQuH3iR2-iUN3XE4BAaLJx4P3gg/view?usp=drive_link",
    title: "Sejarah Singkat Ethereum",
    description: "Memahami sejarah dan evolusi platform Ethereum",
    link: `${link}2-Sejarah-Singkat-Ethereum`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/1u0IBPphIrLxAxGp9xJj8taDArg9Ts6Lm/view?usp=drive_link",
    title: "Apa itu Ethereum",
    description: "Penjelasan mendalam tentang platform Ethereum",
    link: `${link}3-Apa-Itu-Ethereum`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/1pT1I-wyenTza6ravF5HzVuJtrc5J5aPv/view?usp=drive_link",
    title: "Berinteraksi dengan Ethereum",
    description: "Penjelasan mendalam tentang platform Ethereum",
    link: `${link}4-Berinteraksi-dengan-Ethereum`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/1fj76Kry_LZ46ow1ShcWeWhmLS96MIDJl/view?usp=drive_link",
    title: "Meta Mask Setup",
    description: "Penjelasan mendalam tentang platform Ethereum",
    link: `${link}5-Meta-Mask-Setup`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/1jwV5FFltpvUr3m6-eRFZSVLYKhnAR4KX/view?usp=drive_link",
    title: "Ethereum Account",
    description: "Penjelasan mendalam tentang platform Ethereum",
    link: `${link}6-Ethereum-Account`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/1OfJE0OnWUV-25BWXgrUWGVU5EXO7P-lc/view?usp=drive_link",
    title: "Cara Mendapatkan Testnet Eth",
    description: "Panduan mendapatkan ETH di jaringan testnet untuk pengembangan",
    link: `${link}7-Cara-Mendapatkan-Testnet-Eth`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1cvZQqkxVnOUA4O0jBov8cghT1PQDvlUq/view?usp=drive_link",
    title: "Transaksi",
    description: "Memahami cara kerja transaksi di blockchain Ethereum",
    link: `${link}8-Transaksi`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/1qqPexXqzsKy3bpeLTAfxS2-NvNDqK9pQ/view?usp=drive_link",
    title: "Kenapa Ada Waktu Tunggu Transaksi",
    description: "Penjelasan tentang proses konfirmasi dan waktu tunggu transaksi",
    link: `${link}9-Kenapa-Ada-Waktu-Tunggu-Transaksi`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/1dEfrqBpaf1W94E55yEOzIt0YJUIupjyH/view?usp=drive_link",
    title: "Basic Blockchain",
    description: "Konsep dasar teknologi blockchain dan cara kerjanya",
    link: `${link}10-Basic-Blockchain`
  },
  {
    id: "11",
    driveLink: "https://drive.google.com/file/d/1DUJURd1Au5OP68PcnTNhStQnJffIh_jK/view?usp=drive_link",
    title: "Block Time",
    description: "Memahami konsep block time dalam jaringan Ethereum",
    link: `${link}11-Block-Time`
  },
  {
    id: "12",
    driveLink: "https://drive.google.com/file/d/1zA8iQHmt1UJJ960Ug6plGmtGjzDTB7ci/view?usp=drive_link",
    title: "Smart Contract",
    description: "Pengenalan dasar tentang smart contract di Ethereum",
    link: `${link}12-Smart-Contract`
  },
  {
    id: "13",
    driveLink: "https://drive.google.com/file/d/14Gf_kbawoNhSmiwK6F5hg-68lupZt1mG/view?usp=drive_link",
    title: "Solidity",
    description: "Pengenalan bahasa pemrograman Solidity untuk smart contract",
    link: `${link}13-Solidity`
  },
  {
    id: "14",
    driveLink: "https://drive.google.com/file/d/1TXPoS0ZVRgZVh_YBMVs9Zn5qo9Ywm1tV/view?usp=drive_link",
    title: "Remix Interface",
    description: "Pengenalan antarmuka Remix IDE untuk development smart contract",
    link: `${link}14-Remix-Interface`
  },
  {
    id: "15",
    driveLink: "https://drive.google.com/file/d/1tXiG7aZKvnMraEOJWBw3YVOrDa1XlODc/view?usp=drive_link",
    title: "Contract Pertama Kita",
    description: "Tutorial membuat smart contract pertama di Ethereum",
    link: `${link}15-Contract-Pertama-Kita`
  },
  {
    id: "16",
    driveLink: "https://drive.google.com/file/d/1rUZcIQ23aMQWmvyyxR8zpTiHZNbbJA5B/view?usp=drive_link",
    title: "Struktur Contract",
    description: "Memahami struktur dasar smart contract Solidity",
    link: `${link}16-Struktur-Contract`
  },
  {
    id: "17",
    driveLink: "https://drive.google.com/file/d/18-XSBvoZUVTy7V74dZICU0GDl8hWmP4P/view?usp=drive_link",
    title: "Deklarasi Function",
    description: "Cara mendeklarasikan fungsi dalam smart contract",
    link: `${link}17-Deklarasi-Function`
  },
  {
    id: "18",
    driveLink: "https://drive.google.com/file/d/1002X8kXa_zeCZPfF3xPKimM3efoedSfn/view?usp=drive_link",
    title: "Testing And Deploying Contract Di Remix",
    description: "Panduan testing dan deployment smart contract menggunakan Remix",
    link: `${link}18-Testing-And-Deploying-Contract-Di-Remix`
  },
  {
    id: "19",
    driveLink: "https://drive.google.com/file/d/1XEkWTmbQgqQyK8P96VASw3q_SL-R9dwY/view?usp=drive_link",
    title: "Re Deploy Smart Contract",
    description: "Cara melakukan re-deployment smart contract",
    link: `${link}19-Re-Deploy-Smart-Contract`
  },
  {
    id: "20",
    driveLink: "https://drive.google.com/file/d/1r-mLpxgLyFmuhU-STHSrVnwdTh-nRqDv/view?usp=drive_link",
    title: "BTS Smart Contract Deployment",
    description: "Behind the scene proses deployment smart contract",
    link: `${link}20-BTS-Smart-Contract-Deployment`
  },
  {
    id: "21",
    driveLink: "https://drive.google.com/file/d/1m_v5fHq0itwkhcBrVKdTx0nZMRPiqzpB/view?usp=drive_link",
    title: "Menjalankan Function In Depth",
    description: "Penjelasan mendalam tentang eksekusi fungsi smart contract",
    link: `${link}21-Menjalankan-Function-In-Depth`
  },
  {
    id: "22",
    driveLink: "https://drive.google.com/file/d/1yzjvVXB87uT5p-4yX5WT3qZl1eOyDOpJ/view?usp=drive_link",
    title: "Wei vs Ether",
    description: "Memahami perbedaan unit Wei dan Ether dalam Ethereum",
    link: `${link}22-Wei-vs-Ether`
  },
  {
    id: "23",
    driveLink: "https://drive.google.com/file/d/1lR1grkZfn7_oO4MwuU_gGkW2FfdgjkN1/view?usp=drive_link",
    title: "Gas dan Transaksi",
    description: "Penjelasan tentang konsep gas dan biaya transaksi",
    link: `${link}23-Gas-dan-Transaksi`
  },
  {
    id: "24",
    driveLink: "https://drive.google.com/file/d/1_cATa9I36yHa-p4V21SBmTofN8ROmFkK/view?usp=drive_link",
    title: "Mnemonic Phrases",
    description: "Memahami seed phrase dan keamanan wallet",
    link: `${link}24-Mnemonic-Phrases`
  },
  {
    id: "25",
    driveLink: "https://drive.google.com/file/d/12PVTKRqEYj-ou7rgISoHubBVBN-rc8e7/view?usp=drive_link",
    title: "Setup Mengeluarkan Smart Contract Dari Remix",
    description: "Cara mengekspor dan mengelola smart contract di luar Remix",
    link: `${link}25-Setup-Mengeluarkan-Smart-Contract-Dari-Remix`
  },
  {
    id: "26",
    driveLink: "https://drive.google.com/file/d/1SpwAoqRrVFKS_LxOp09sv3JwmzUJXX_P/view?usp=drive_link",
    title: "Testing Architecture",
    description: "Arsitektur pengujian untuk smart contract",
    link: `${link}26-Testing-Architecture`
  },
  {
    id: "27",
    driveLink: "https://drive.google.com/file/d/1jewxVX6newEpccujbbGh24su8SYDUksy/view?usp=drive_link",
    title: "Testing Modules",
    description: "Modul-modul pengujian untuk smart contract",
    link: `${link}27-Testing-Modules`
  },
  {
    id: "28",
    driveLink: "https://drive.google.com/file/d/19nLTnYJbqXmEf9RI8OA3aWuMxst67YPD/view?usp=drive_link",
    title: "Mocha Intro",
    description: "Pengenalan framework testing Mocha untuk smart contract",
    link: `${link}28-Mocha-Intro`
  },
  {
    id: "29",
    driveLink: "https://drive.google.com/file/d/17y8upYJRSvoCGLERPF7057CzZA14eljF/view?usp=drive_link",
    title: "Update Compiler Untuk Solidity v0.8.19",
    description: "Cara memperbarui compiler Solidity ke versi terbaru",
    link: `${link}29-Update-Compiler-Untuk-Solidity-v0-8-19`
  },
  {
    id: "30",
    driveLink: "https://drive.google.com/file/d/1TAFleBi8rVICOVNLPP-fDNgmLzy3VQx7/view?usp=drive_link",
    title: "Flow Mocha Test",
    description: "Alur pengujian smart contract dengan Mocha",
    link: `${link}30-Flow-Mocha-Test`
  },
  {
    id: "31",
    driveLink: "https://drive.google.com/file/d/1cWCMrA7_XsMGgzTLGALGFPuG7nJVpY_9/view?usp=drive_link",
    title: "Ganache Accounts",
    description: "Penggunaan Ganache untuk testing dengan akun lokal",
    link: `${link}31-Ganache-Accounts`
  },
  {
    id: "32",
    driveLink: "https://drive.google.com/file/d/1ADvxo_0xLZ2w6xHmfSX8RtgbRLgT2o7s/view?usp=drive_link",
    title: "Contract Deployment Dengan Web3",
    description: "Deployment smart contract menggunakan Web3.js",
    link: `${link}32-Contract-Deployment-Dengan-Web3`
  },
  {
    id: "33",
    driveLink: "https://drive.google.com/file/d/1gz2j1LqqQYQwQcyrBuZiJl53kvCICEJK/view?usp=drive_link",
    title: "Contract Assertion",
    description: "Teknik pengujian assertion untuk smart contract",
    link: `${link}33-Contract-Assertion`
  },
  {
    id: "34",
    driveLink: "https://drive.google.com/file/d/1sUJAG8wifuoDA6SVk-q3eHaYLh8Vu9SB/view?usp=drive_link",
    title: "Deployment Dengan Infura",
    description: "Cara deploy smart contract menggunakan layanan Infura",
    link: `${link}34-Deployment-Dengan-Infura`
  },
  {
    id: "35",
    driveLink: "https://drive.google.com/file/d/1Uzf70txX9W59X0Q3aHPs1ozPenmmj1cz/view?usp=drive_link",
    title: "Wallet Provider Setup",
    description: "Konfigurasi provider wallet untuk deployment",
    link: `${link}35-Wallet-Provider-Setup`
  },
  {
    id: "36",
    driveLink: "https://drive.google.com/file/d/1V8sCpsKj6crQCS85bU1om1qzee5BOpN1/view?usp=drive_link",
    title: "Deploy Ke Goerli",
    description: "Panduan deployment ke testnet Goerli",
    link: `${link}36-Deploy-Ke-Goerli`
  },
  {
    id: "37",
    driveLink: "https://drive.google.com/file/d/1GALXFqpgNC6tmMYfvxdkUbbU2ulcf6Th/view?usp=drive_link",
    title: "Deployed Contracts In Remix",
    description: "Manajemen kontrak yang sudah di-deploy di Remix",
    link: `${link}37-Deployed-Contracts-In-Remix`
  },
  {
    id: "38",
    driveLink: "https://drive.google.com/file/d/1GkfX1vTSEPdDY_uYkGH8Y2qA9vEVxg8O/view?usp=drive_link",
    title: "Smart Contract Design",
    description: "Prinsip desain smart contract yang baik",
    link: `${link}38-Smart-Contract-Design`
  },
  {
    id: "39",
    driveLink: "https://drive.google.com/file/d/1KE9KKa4rI9jFp0kF10gk4X3XHUMhBbpa/view?usp=drive_link",
    title: "Solidity Basic Data Types",
    description: "Tipe data dasar dalam bahasa Solidity",
    link: `${link}39-Solidity-Basic-Data-Types`
  },
  {
    id: "40",
    driveLink: "https://drive.google.com/file/d/18fnFFEIDnSGOUKDiw9Av20dmWGohIx1c/view?usp=drive_link",
    title: "Assign Manager Enter Lottery Flow",
    description: "Implementasi sistem lottery dengan smart contract",
    link: `${link}40-Assign-Manager-Enter-Lottery-Flow`
  },
  {
    id: "41",
    driveLink: "https://drive.google.com/file/d/10QpPAG9l48M15fazEBb42oLq7gdzb5K9/view?usp=drive_link",
    title: "Assign Players Testing",
    description: "Pengujian sistem pendaftaran pemain lottery",
    link: `${link}41-Assign-Players-Testing`
  },
  {
    id: "42",
    driveLink: "https://drive.google.com/file/d/1di8Nq_a9cheUeqmWVziymAzhGivtPFxn/view?usp=drive_link",
    title: "Validasi Dengan Require",
    description: "Implementasi validasi menggunakan require statement",
    link: `${link}42-Validasi-Dengan-Require`
  },
  {
    id: "43",
    driveLink: "https://drive.google.com/file/d/1Muh6v0KzikZXXau3dvOqOEw_Q_sb-nvM/view?usp=drive_link",
    title: "Memilih Pemenang Lottery",
    description: "Implementasi sistem pemilihan pemenang lottery",
    link: `${link}43-Memilih-Pemenang-Lottery`
  },
  {
    id: "44",
    driveLink: "https://drive.google.com/file/d/18DDSGJGwW5VJQfdUiDhylijuNPQBSyAu/view?usp=drive_link",
    title: "Kirim Hadiah Reset Lottery",
    description: "Proses pengiriman hadiah dan reset sistem lottery",
    link: `${link}44-Kirim-Hadiah-Reset-Lottery`
  },
  {
    id: "45",
    driveLink: "https://drive.google.com/file/d/1OrnlJZkx6YdTBRaH1P7goOgzOribYXGw/view?usp=drive_link",
    title: "Function Modifiers",
    description: "Penggunaan function modifiers dalam Solidity",
    link: `${link}45-Function-Modifiers`
  },
  {
    id: "46",
    driveLink: "https://drive.google.com/file/d/1tBxjIqtS0Ifh2x_NrXvJpfHP_qqiSmcQ/view?usp=drive_link",
    title: "Deploying To Sepolia Testnet Challenge",
    description: "Tantangan deployment ke testnet Sepolia",
    link: `${link}46-Deploying-To-Sepolia-Testnet-Challenge`
  },
  {
    id: "47",
    driveLink: "https://drive.google.com/file/d/1wp0BA5C-FXCI-aCAIZ_YJzTyZHE7wmOf/view?usp=drive_link",
    title: "Apa Itu ERC 20",
    description: "Pengenalan standar token ERC-20",
    link: `${link}47-Apa-Itu-ERC-20`
  },
  {
    id: "48",
    driveLink: "https://drive.google.com/file/d/1CFE18Xya2xyPvIyhEfl-4fsBX02ykTHN/view?usp=drive_link",
    title: "ERC20 Smart Contract",
    description: "Implementasi smart contract token ERC-20",
    link: `${link}48-ERC20-Smart-Contract`
  },
  {
    id: "49",
    driveLink: "https://drive.google.com/file/d/1ZAmO1YQuAwcpyO0oxJYoyA3iCgsiuaWi/view?usp=drive_link",
    title: "Add Liquidity Pool",
    description: "Cara menambahkan liquiditas ke pool DEX",
    link: `${link}49-Add-Liquidity-Pool`
  },
  {
    id: "50",
    driveLink: "https://drive.google.com/file/d/1snKL5i5-0hIL1A2JqmtDOH-aMKzXiLfu/view?usp=drive_link",
    title: "Introduction To Oracles",
    description: "Pengenalan oracle dalam smart contract",
    link: `${link}50-Introduction-To-Oracles`
  },
  {
    id: "51",
    driveLink: "https://drive.google.com/file/d/1lmVAAAV2EmjlQ_X2CsBP6P2lI73giyLn/view?usp=drive_link",
    title: "The Oracle Problem Types Of Oracles",
    description: "Memahami masalah dan tipe-tipe oracle",
    link: `${link}51-The-Oracle-Problem-Types-Of-Oracles`
  },
  {
    id: "52",
    driveLink: "https://drive.google.com/file/d/1hjX_x77cO5O5Doa8Wz2_w7crn7zbPwZO/view?usp=drive_link",
    title: "Chainlink VRF LINK Faucet",
    description: "Penggunaan Chainlink VRF dan LINK faucet",
    link: `${link}52-Chainlink-VRF-LINK-Faucet`
  },
  {
    id: "53",
    driveLink: "https://drive.google.com/file/d/1p0bA_sah6rIwQm2AhAOKSHwoi1GcPEz4/view?usp=drive_link",
    title: "Chainlink VRF Subscription Method",
    description: "Implementasi metode subscription Chainlink VRF",
    link: `${link}53-Chainlink-VRF-Subscription-Method`
  },
  {
    id: "54",
    driveLink: "https://drive.google.com/file/d/1iM6klflYx_yF-1RNVH1B1Nlfn9pPu2Pk/view?usp=drive_link",
    title: "Importing Contract",
    description: "Cara mengimpor dan menggunakan kontrak eksternal",
    link: `${link}54-Importing-Contract`
  },
  {
    id: "55",
    driveLink: "https://drive.google.com/file/d/11ZFfND5fOmSi-LEoObs8C1GMVYbRTfw9/view?usp=drive_link",
    title: "Hardhat Tutorial Compile Deploy Testing",
    description: "Panduan lengkap penggunaan Hardhat untuk development smart contract",
    link: `${link}55-Hardhat-Tutorial-Compile-Deploy-Testing`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
