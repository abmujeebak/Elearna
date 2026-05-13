import CoursesSectionData from './06CoursesSection.js'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

const courseTabs = CoursesSectionData[0].tabs

function CourseCard({ course }) {
  return (
    <motion.article variants={fadeUp} className="group overflow-hidden bg-white transition hover:shadow-[0_40px_60px_rgba(140,154,172,0.45)]">
      <div className="relative overflow-visible">
        <div className="overflow-hidden">
          <img src={course.image} alt={course.title} className="aspect-[330/207] w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="absolute -bottom-[38px] right-6 grid h-[62px] w-[62px] place-items-center rounded-full bg-[#254edb] font-heading text-[17px] font-semibold text-white shadow-[0_10px_25px_rgba(37,78,219,0.35)]">
          {course.price}
        </div>
      </div>
      <div className="flex min-h-[220px] flex-col px-6 pb-0 pt-[33px]">
        <p className="mb-[15px] text-[11px] font-semibold uppercase leading-none text-heading">{course.category}</p>
        <h3 className="font-heading text-[21px] font-semibold leading-[26px] tracking-[-0.4px] text-heading">{course.title}</h3>
        <div className="mb-[24px] mt-[18px] flex items-center gap-[5px]">
          <img src={course.ratingIcon} alt="" className="h-[14px] w-[79px]" />
          <span className="text-[12px] leading-none text-paragraph">{course.rating}</span>
        </div>
        <div className="mt-auto grid border-t border-[#7b7c7d33] text-center text-[13px] font-semibold text-heading sm:grid-cols-2">
          <span className="flex items-center justify-center gap-[9px] py-[18px]">
            <img src={course.booksIcon} alt="" className="h-[13px] w-[13px]" />
            {course.lessons}
          </span>
          <span className="flex items-center justify-center gap-[9px] border-l border-[#7b7c7d33] py-[18px]">
            <img src={course.personIcon} alt="" className="h-[13px] w-[13px]" />
            {course.students}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

function CoursesSection() {
  return (
    <section className="bg-lightBlue py-[90px]">
      <div className="mx-auto max-w-[1030px] px-4 lg:px-0">
        <motion.div className="mb-[42px] flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <div>
            <p className="text-[11px] font-semibold uppercase leading-none text-heading">Online learning</p>
            <h2 className="mt-[18px] font-heading text-[36px] font-semibold leading-[42px] tracking-[-1.5px] text-heading sm:text-[40px] sm:leading-[46px]">
              Top online courses
            </h2>
          </div>
          <div className="flex flex-wrap gap-[22px] lg:-mb-1">
            {courseTabs.map((tab, index) => (
              <button key={tab} className={`bg-transparent px-0 py-1 text-[13px] transition hover:text-heading ${index === 0 ? 'font-medium text-heading' : 'text-paragraph/75'}`}>
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div className="grid gap-x-[25px] gap-y-[28px] md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {CoursesSectionData.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </motion.div>
        <motion.div className="mx-auto mt-[70px] flex max-w-[724px] flex-col items-center justify-center rounded-[85px] bg-heading px-8 py-5 text-center text-base leading-[21px] text-white sm:flex-row sm:gap-2 sm:px-[60px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <span>We assist you in finding the ideal tutor at no cost.</span>
          <a href="#" className="text-white underline transition hover:text-brand">Browse all available courses</a>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection
