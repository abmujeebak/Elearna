import { motion } from 'framer-motion'
import DiscoverSectionData from './04DiscoverSection.js'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

function DiscoverSection() {
  return (
    <section className="bg-[#f1f1e9] px-4 pt-20">
      <div className="mx-auto max-w-[928px]">
        <motion.div className="mx-auto mb-[35px] max-w-[760px] text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-heading">Unlocking Potential</p>
          <h2 className="mt-[15px] font-heading text-[40px] font-semibold leading-[46px] tracking-[-1.5px] text-heading">
            Discover the boundless advantages and transformative power of eLearning for professional growth
          </h2>
        </motion.div>
        <motion.div className="relative overflow-hidden rounded bg-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <img src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff2777e50749c4b90b5dd_Potential%20Image-2.webp" alt="" className="min-h-[580px] w-full object-cover" />
          <motion.div className="absolute inset-0 grid bg-gradient-to-b from-transparent via-heading/20 to-heading md:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {DiscoverSectionData.map((card) => (
              <motion.div key={card.number} variants={fadeUp} className="flex flex-col justify-end border-white/20 p-6 text-white md:border-r lg:px-5 lg:pb-10">
                <p className="mb-4 font-heading text-[18px] font-semibold text-brand">{card.number}</p>
                <h3 className="font-heading text-[20px] font-semibold leading-[25px] tracking-[-0.4px]">{card.title}</h3>
                <p className="mt-4 text-[14px] leading-6 text-white/68">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DiscoverSection
