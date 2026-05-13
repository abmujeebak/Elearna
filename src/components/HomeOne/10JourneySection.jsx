import JourneySectionData from './10JourneySection.js'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

function JourneySection() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1320px] px-4 text-center lg:px-6">
        <motion.p className="small-heading text-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>Why we are</motion.p>
        <motion.h2 className="mt-[13px] font-heading text-[30px] font-semibold leading-[38px] tracking-[-1px] text-heading sm:text-[35px] sm:leading-[42px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          Elevate your professional journey
        </motion.h2>
        <motion.p className="mx-auto mb-10 mt-[10px] max-w-[574px] text-[17px] leading-[27px] text-paragraph" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.
        </motion.p>
        <motion.div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {JourneySectionData.map((item) => (
            <motion.article key={item.title} variants={fadeUp} className="flex flex-col items-center gap-[25px]">
              <img src={item.icon} alt="Icon" className="h-[42px]" />
              <h3 className="font-heading text-xl font-semibold leading-[25px] tracking-[-0.5px] text-heading">{item.title}</h3>
              <p className="max-w-[250px] text-[17px] leading-[27px] text-paragraph">Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default JourneySection
