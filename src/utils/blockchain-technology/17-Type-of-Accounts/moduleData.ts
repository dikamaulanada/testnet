function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : '';
}

const link="/modul/blockchain-technology/17-Type-of-Accounts/"
export const modules = [
  {
    id: "01",
    driveLink: "https://drive.google.com/file/d/1o9SzsvpD8p-HWLtqEYYnzCSdU8p_UDtH/view?usp=drive_link",
    title: "Account Model",
    description: "Penjelasan tentang model akun dalam blockchain",
    link: `${link}1-Account-Model`
  },
  {
    id: "02",
    driveLink: "https://drive.google.com/file/d/19bx4ZmsNYB45991i5v16yFylVcmHR0_F/view?usp=drive_link",
    title: "Account Abstraction",
    description: "Pendekatan abstraksi akun dalam blockchain",
    link: `${link}2-Account-Abstraction`
  }
].map(module => ({
  ...module,
  thumbnailUrl: `https://drive.google.com/thumbnail?id=${extractDriveId(module.driveLink)}`
}));
