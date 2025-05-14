function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/3-Smart-Contract-Security/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/10oRwnyEFWZ-aBim0ptEpE6HZ-80kaAQd/view?usp=drive_link",
    title: "Smart Contract Security Context",
    description: "Memahami konteks keamanan dalam pengembangan smart contract",
    link: `${link}01-Smart-Contract-Security-Context`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/10puVqMvAhWVarqmTQZQJ8jXhzBlbezp4/view?usp=sharing",
    title: "How to Become a Security Auditor Requirements",
    description: "Persyaratan dan kualifikasi untuk menjadi auditor keamanan smart contract",
    link: `${link}02-How-to-Become-a-Security-Auditor-Requirements`
  },
  {
    id: "03",
    driveLink: "https://drive.google.com/file/d/10qut57KjsL78v1dnBhWSY-hgbsn5FQe_/view?usp=drive_link",
    title: "How to Become a Security Auditor Experience",
    description: "Pengalaman yang dibutuhkan untuk menjadi auditor keamanan",
    link: `${link}03-How-to-Become-a-Security-Auditor-Experience`
  },
  {
    id: "04",
    driveLink: "https://drive.google.com/file/d/10xeR8Y-_IOK4L87NI6ZUashhBbnPtlk9/view?usp=drive_link",
    title: "How to Become a Security Auditor Risks",
    description: "Risiko dan tantangan dalam profesi auditor keamanan",
    link: `${link}04-How-to-Become-a-Security-Auditor-Risks`
  },
  {
    id: "05",
    driveLink: "https://drive.google.com/file/d/10zffnUO3PLP7pjxtRmHwC_UVL8tIAEUO/view?usp=drive_link",
    title: "Smart Contract Security Overview",
    description: "Gambaran umum keamanan smart contract",
    link: `${link}05-Smart-Contract-Security-Overview`
  },
  {
    id: "06",
    driveLink: "https://drive.google.com/file/d/115ZUXYLa_O2ReiJAVhPBWThFyHK6Sjqr/view?usp=drive_link",
    title: "What is Smart Contract Security",
    description: "Penjelasan mendalam tentang konsep keamanan smart contract",
    link: `${link}06-What-is-Smart-Contract-Security`
  },
  {
    id: "07",
    driveLink: "https://drive.google.com/file/d/117xFG-PhcZC8ZjNcuW0k9xyKDf8lSUm4/view?usp=drive_link",
    title: "Security Auditing Process",
    description: "Proses dan tahapan dalam audit keamanan smart contract",
    link: `${link}07-Security-Auditing-Process`
  },
  {
    id: "08",
    driveLink: "https://drive.google.com/file/d/1199YLP3jpW5boPxmZWEN5MfVtHCcHXuj/view?usp=drive_link",
    title: "Tools and Techniques",
    description: "Alat dan teknik yang digunakan dalam audit keamanan",
    link: `${link}08-Tools-and-Techniques`
  },
  {
    id: "09",
    driveLink: "https://drive.google.com/file/d/11Ab_eKU52EbnTIgcW6HQAmmLYiySBCjS/view?usp=drive_link",
    title: "Security Challenges Part 1",
    description: "Tantangan keamanan dalam pengembangan smart contract (Bagian 1)",
    link: `${link}09-Security-Challenges-Part-1`
  },
  {
    id: "10",
    driveLink: "https://drive.google.com/file/d/11BfjGoOybVX28phxipWI9gCkc8dJmSM5/view?usp=drive_link",
    title: "Security Challenges Part 2",
    description: "Tantangan keamanan dalam pengembangan smart contract (Bagian 2)",
    link: `${link}10-Security-Challenges-Part-2`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
