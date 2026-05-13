import { motion } from 'framer-motion'
import CoursesSectionData from './05CoursesSection.js'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

const ratingIcon = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b857efb6c4c737b5d_Rating.svg'

function CourseCard({ course }) {
  return (
    <motion.article variants={fadeUp} className="group relative min-h-[494px] overflow-hidden rounded bg-heading text-white">
      <img src={course.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
      <div className="relative z-10 flex min-h-[494px] flex-col justify-end p-6">
        <p className="mb-3 text-[11px] font-semibold uppercase leading-none text-brand">{course.category}</p>
        <h3 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-0.5px]">
          <a href={`/${course.slug}/course-details`} className="transition hover:text-brand">{course.title}</a>
        </h3>
        <div className="mt-5 flex items-center gap-[7px]">
          <img src={ratingIcon} alt="" className="h-[14px] w-[79px]" />
          <span className="text-[12px] text-white/65">{course.rating}</span>
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
          <a href={`/${course.slug}/course-details`} className="font-heading text-[16px] font-semibold transition hover:text-brand">{course.action}</a>
          <span className="font-heading text-[25px] font-semibold">{course.price}</span>
        </div>
      </div>
    </motion.article>
  )
}

function CoursesSection() {
  return (
    <section className="bg-lightBlue px-4 py-[90px]">
      <div className="mx-auto max-w-[1120px]">
        <motion.div className="mb-10 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-heading">Online learning</p>
          <h2 className="mt-[15px] font-heading text-[40px] font-semibold leading-[46px] tracking-[-1.5px] text-heading">Top online courses</h2>
        </motion.div>
        <motion.div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {CoursesSectionData.map((course) => <CourseCard key={course.title} course={course} />)}
        </motion.div>
        <motion.div className="mx-auto mt-[70px] flex max-w-[724px] flex-col items-center justify-center rounded-[85px] bg-heading px-8 py-5 text-center text-base leading-[21px] text-white sm:flex-row sm:gap-2 sm:px-[60px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <span>We assist you in finding the ideal tutor at no cost.</span>
          <a href="/course-one" className="text-white underline transition hover:text-brand">Browse all available courses</a>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection
