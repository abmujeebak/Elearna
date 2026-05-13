import { motion } from 'framer-motion'
import CategorySectionData from '../HomeOne/04TopCategorySection.js'
import { fadeLeft, fadeRight, staggerContainer, viewport } from './motionConfig.js'

function CategorySection() {
  return (
    <section className="bg-white px-4 py-[90px]">
      <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-10 lg:flex-row lg:items-start">
        <motion.div className="max-w-[397px]" variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-heading">Top Categories</p>
          <h2 className="mb-[30px] mt-[15px] font-heading text-[40px] font-semibold leading-[46px] tracking-[-1.5px] text-heading">
            Discover leading categories
          </h2>
          <a href="/contact-one" className="btn-dark">Get Started</a>
        </motion.div>
        <motion.div className="grid flex-1 gap-[30px] sm:grid-cols-2 lg:max-w-[630px] lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {CategorySectionData.map((category) => (
            <motion.a key={category.title} variants={fadeLeft} href="/course-one" className="group flex min-h-[190px] flex-col items-center justify-center rounded border border-[#6f819733] bg-white px-5 pb-[30px] pt-5 text-center transition duration-300 hover:border-transparent hover:shadow-[0_2px_60px_rgba(79,155,172,0.28)]">
              <span className="mb-[15px] grid h-[70px] w-[70px] place-items-center rounded-full bg-lightBlue">
                <img src={category.icon} alt="" className="h-10 w-10" />
              </span>
              <span className="font-heading text-[18px] font-semibold leading-[22px] text-heading">{category.title}</span>
              <span className="mt-[5px] text-[15px] text-paragraph">{category.courses}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CategorySection
