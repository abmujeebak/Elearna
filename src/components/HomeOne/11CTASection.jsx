import CTASectionData from './11CTASection.js'
import { motion } from 'framer-motion'
import { scaleIn, viewport } from './motionConfig.js'

function CTASection() {
  return CTASectionData.map((cta) => (
    <section key={cta.title} className="relative z-20 -mb-[100px]">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-6">
        <motion.div className="flex flex-col items-start justify-between gap-5 rounded bg-brand px-[30px] py-[60px] lg:flex-row lg:items-center" variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewport}>
          <h2 className="max-w-[420px] font-heading text-[30px] font-semibold leading-[38px] tracking-[-1px] text-heading sm:text-[35px] sm:leading-[42px]">
            {cta.title}
          </h2>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="btn-dark">{cta.primaryButton}</a>
            <a href="#" className="btn-outline-dark">{cta.secondaryButton}</a>
          </div>
        </motion.div>
      </div>
    </section>
  ))
}

export default CTASection
