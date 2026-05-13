import { motion } from 'framer-motion'
import { fadeUp, viewport } from './motionConfig.js'

function OfferSection() {
  return (
    <section
      className="bg-heading bg-cover bg-center px-4 py-[140px] text-white lg:py-[160px]"
      style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,.5), rgba(0,0,0,0)), url("https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff2751d8bac1df232a433_Boy%20Using%20Laptop%20Image.webp")' }}
    >
      <motion.div className="mx-auto max-w-[1120px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="max-w-[553px]">
          <p className="small-heading text-brand">what we Offer</p>
          <h2 className="mb-4 mt-[15px] font-heading text-[48px] font-semibold leading-[54px] tracking-[-1.5px] text-white">
            Personalized learning for your ambitions
          </h2>
          <p className="mb-10 text-[17px] leading-[27px] text-white/70">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.
          </p>
          <a href="/course-one" className="btn-primary">Get Course</a>
        </div>
      </motion.div>
    </section>
  )
}

export default OfferSection
