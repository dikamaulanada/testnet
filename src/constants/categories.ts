import { Category } from '@/types';

export const categories: Record<string, Category> = {
  all: {
    label: 'All Courses',
    icon: 'IoGridOutline'
  },
  investing: {
    label: 'Investing',
    icon: 'IoTrendingUpOutline'
  },
  trading: {
    label: 'Trading',
    icon: 'IoStatsChartOutline'
  },
  fundamental: {
    label: 'Fundamental',
    icon: 'IoBookOutline'
  }
};
