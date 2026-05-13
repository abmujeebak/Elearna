import { motion } from 'framer-motion'
import DetailsSectionData from './02DetailsSection.js'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

function DetailsSection() {
  return (
    <section className="-mt-[50px] px-4">
      <motion.div className="mx-auto grid max-w-[1120px] gap-7 rounded bg-white px-6 py-10 shadow-[0_10px_60px_rgba(71,107,115,0.08)] md:grid-cols-3 lg:px-[30px] lg:pb-[50px] lg:pt-[60px]" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        {DetailsSectionData.map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-6">
            <img src={item.icon} alt="" className="mt-2 h-12 w-12" />
            <div>
              <h3 className="font-heading text-[23px] font-semibold leading-[29px] tracking-[-0.5px] text-heading">{item.title}</h3>
              <p className="mt-2 text-[17px] leading-[27px] text-paragraph">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default DetailsSection
