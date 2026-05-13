import TopCategorySectionData from './04TopCategorySection.js'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

function TopCategorySection() {
  return (
    <section className="bg-white pb-[90px] pt-20">
      <div className="mx-auto max-w-[1320px] px-4 text-center lg:px-6">
        <motion.p className="small-heading text-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>Top Categories</motion.p>
        <motion.h2 className="mx-auto mb-10 mt-[13px] max-w-[549px] font-heading text-[30px] font-semibold leading-[38px] tracking-[-1px] text-heading sm:text-[35px] sm:leading-[42px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          Discover leading categories to elevate your journey
        </motion.h2>
        <motion.div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {TopCategorySectionData.map((category) => (
            <motion.a key={category.title} variants={fadeUp} href="#" className="group flex min-h-[190px] flex-col items-center justify-center rounded border border-[#6f819733] bg-white px-5 pb-[30px] pt-5 transition duration-300 hover:border-transparent hover:shadow-[0_2px_60px_rgba(79,155,172,0.28)]">
              <span className="mb-[15px] grid h-[70px] w-[70px] place-items-center rounded-full bg-lightBlue">
                <img src={category.icon} alt="Icon" className="h-10 w-10" />
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

export default TopCategorySection
