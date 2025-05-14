import { modules } from '@/utils/crypto-investing/3-Principles/moduleData';

export function getModuleData(moduleNumber: string) {
  const module = modules.find(m => m.id === moduleNumber);
  if (!module) throw new Error(`Module ${moduleNumber} not found`);
  
  const driveId = module.driveLink.match(/\/d\/([^/]+)/)![1];
  
  return {
    id: module.id,
    driveLink: `https://drive.google.com/file/d/${driveId}/preview`,
    title: module.title,
    link: module.link
  };
}
