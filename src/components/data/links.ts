interface DomainConfig {
  hostname: string;
  url: string;
  openInNewTab: boolean;
}

export const domainConfigs: DomainConfig[] = [
  {
    hostname: 'localhost',
    url: '/menu/komunitas',
    openInNewTab: true
  },
];

export const getKomunitasLink = () => {
  return '/menu/komunitas';
};

export const navigationLinks = {
  home: "/",
  research: "/menu/research",
  komunitas: getKomunitasLink(),
};
