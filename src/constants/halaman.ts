import { Course } from '@/types';

interface CourseCategory {
  title: string;
  data: Course[];
}

export const coursesMap: Record<string, CourseCategory> = {
  investing: {
    title: "Investing Courses",
    data: [
      {
        title: "Crypto Investing Basics",
        image: "investing-basics.jpg",
        link: "/courses/investing-basics",
        category: "investing"
      }
      // Add more investing courses as needed
    ]
  },
  // Add more categories as needed
};

export const allCourses: Course[] = Object.values(coursesMap)
  .flatMap(category => category.data);
