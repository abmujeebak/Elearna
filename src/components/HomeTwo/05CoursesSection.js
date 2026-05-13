import HomeOneCoursesSectionData from '../HomeOne/06CoursesSection.js'
import HomeOneTrendingCoursesSectionData from '../HomeOne/09TrendingCoursesSection.js'

const homeTwoCourseAssets = [
  {
    course: HomeOneTrendingCoursesSectionData[0],
    slug: 'building-single-page-applications-with-angular',
    image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ebabcd61399462d208146a_Course%20Portrait%20Image.webp',
  },
  {
    course: HomeOneCoursesSectionData[3],
    slug: 'database-integration-with-mongodb',
    image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ebabde3e87f8984b6782a1_Course%20Portrait%20Image-9.webp',
  },
  {
    course: HomeOneCoursesSectionData[2],
    slug: 'operations-management-and-process-improvement',
    image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ebabf4c17d78e3224b9b5b_Course%20Portrait%20Image-8.webp',
  },
  {
    course: HomeOneCoursesSectionData[4],
    slug: 'risk-management-and-business-continuity',
    image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ebac0cfd1f38c62e59431b_Course%20Portrait%20Image-7.webp',
  },
  {
    title: 'Design systems and pattern libraries',
    category: 'Design',
    rating: '5.00 (1.2K)',
    price: '$99',
    action: 'Buy course',
    slug: 'design-systems-and-pattern-libraries',
    image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66fe66cdef763efcc757aefb_Course%20Image-2.webp',
  },
  {
    course: HomeOneCoursesSectionData[5],
    slug: 'full-stack-development-with-the-mern-stack',
    image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ebac3db9565bc62a90430e_Course%20Portrait%20Image-5.webp',
  },
]

const CoursesSectionData = homeTwoCourseAssets.map(({ course, ...homeTwoFields }) => ({
  ...course,
  ...homeTwoFields,
  action: (course?.price || homeTwoFields.price) === 'Free' ? 'Course details' : 'Buy course',
}))

export default CoursesSectionData
