import { motion } from 'framer-motion'
import { fadeUp, viewport } from './motionConfig.js'

function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-heading bg-cover bg-center px-4 pb-[120px] pt-[190px] text-white sm:pt-[230px] lg:pb-[170px] lg:pt-[300px]"
      style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff276e74b05d80c07d986_Rectangle%2017.webp")' }}
    >
      <div className="mx-auto max-w-[1320px]">
        <motion.div className="mb-16 lg:mb-[120px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="text-[18px] font-medium capitalize text-brand">personal</p>
          <h1 className="font-heading text-[76px] font-bold uppercase leading-[70px] tracking-[-2px] text-transparent [background-clip:text] [background-image:linear-gradient(#5f88a3,#51616b00_95%)] sm:text-[110px] sm:leading-[98px]">
            Coach
          </h1>
        </motion.div>
        <motion.div className="ml-auto max-w-[662px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-brand">Online learning</p>
          <h2 className="mt-4 font-heading text-[48px] font-semibold leading-[54px] tracking-[-1.5px] text-white sm:text-[70px] sm:leading-[76px]">
            Transform <span className="text-brand">learning</span> with flexible online education
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
