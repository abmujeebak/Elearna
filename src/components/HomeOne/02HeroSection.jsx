import HeroSectionData from './02HeroSection.js'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight } from './motionConfig.js'

function HeroSection() {
  return HeroSectionData.map((hero) => (
    <section
      key={hero.titleAfter}
      className="relative overflow-hidden bg-heading bg-cover bg-center text-white"
      style={{ backgroundImage: `url("${hero.background}")` }}
    >
      <div className="mx-auto grid min-h-[640px] max-w-[1170px] items-center gap-10 px-4 pb-10 pt-[115px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-[64px] lg:px-0 lg:pb-0 lg:pt-[82px]">
        <motion.div
          className="relative order-2 min-h-[420px] lg:order-1 lg:min-h-[520px]"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <img src={hero.girl} alt="Hero Girl" className="absolute bottom-0 left-1/2 z-10 w-[76%] max-w-[470px] -translate-x-1/2 lg:w-[72%]" />
          <motion.img initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.65 }} src={hero.achievement} alt="Achievements" className="absolute bottom-[27%] left-[16%] z-20 w-[32%] max-w-[180px] rounded shadow-card" />
          <motion.img initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.65 }} src={hero.trusted} alt="Trusted Image" className="absolute bottom-[5%] right-[8%] z-20 w-[36%] max-w-[205px] rounded-[22px] shadow-card" />
          <img src={hero.halfMoon} alt="" className="absolute bottom-[30%] left-[8%] w-[24%] max-w-[140px]" />
          <img src={hero.blueCircle} alt="" className="absolute left-[18%] top-[14%] w-7" />
          <img src={hero.yellowDot} alt="" className="absolute left-[21%] top-[29%] w-2" />
          <img src={hero.yellowDot} alt="" className="absolute right-0 top-[61%] w-3" />
        </motion.div>
        <motion.div
          className="order-1 max-w-[465px] lg:order-2"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="text-[12px] font-semibold uppercase leading-5 text-white">{hero.eyebrow}</div>
          <h1 className="mt-[12px] font-heading text-[40px] font-semibold leading-[1.03] tracking-[-1.8px] text-white sm:text-[48px]">
            {hero.titleBefore} <span className="text-brand">{hero.titleHighlight}</span> {hero.titleAfter}
          </h1>
          <p className="mb-[26px] mt-[20px] max-w-[470px] text-[13px] font-semibold leading-[22px] text-white">
            {hero.description}
          </p>
          <a href="#" className="inline-flex min-h-[34px] min-w-[116px] items-center justify-center rounded border border-white/25 px-7 py-2 text-[13px] font-semibold text-white transition hover:border-brand hover:text-brand">
            {hero.buttonLabel}
          </a>
        </motion.div>
      </div>
    </section>
  ))
}

export default HeroSection
