import TrendingCoursesSectionData from './09TrendingCoursesSection.js'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

function TrendingCourseCard({ course }) {
  return (
    <motion.article variants={fadeUp} className="bg-white">
      <div className="relative overflow-visible">
        <div className="overflow-hidden">
          <img src={course.image} alt={course.title} className="aspect-[236/182] w-full object-cover" />
        </div>
        <div className="absolute right-[14px] top-[14px] grid h-[56px] w-[56px] place-items-center rounded-full bg-[#254edb] font-heading text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(37,78,219,0.35)]">
          {course.price}
        </div>
      </div>
      <div className="px-[24px] pb-[18px] pt-[18px]">
        <p className="mb-[11px] text-[10px] font-medium uppercase leading-none tracking-[0.3px] text-paragraph">{course.category}</p>
        <h3 className="font-heading text-[17px] font-semibold leading-[21px] tracking-[-0.35px] text-heading">{course.title}</h3>
        <div className="mt-[18px] flex items-center gap-[5px]">
          <img src={course.ratingIcon} alt="" className="h-[13px] w-[72px]" />
          <span className="text-[11px] leading-none text-paragraph">{course.rating}</span>
        </div>
      </div>
    </motion.article>
  )
}

function TrendingCoursesSection() {
  return (
    <section className="bg-lightBlue pb-[58px] pt-[37px]">
      <div className="mx-auto max-w-[1015px] px-4 lg:px-0">
        <motion.div className="mb-[25px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="text-[11px] font-semibold uppercase leading-none text-heading">Trending courses</p>
          <h2 className="mt-[16px] font-heading text-[28px] font-semibold leading-[34px] tracking-[-0.7px] text-heading">
            Explore our top programs
          </h2>
        </motion.div>
        <motion.div className="grid gap-[23px] sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {TrendingCoursesSectionData.map((course) => (
            <TrendingCourseCard key={course.title} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrendingCoursesSection
