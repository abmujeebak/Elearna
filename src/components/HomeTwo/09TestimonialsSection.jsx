import { motion } from 'framer-motion'
import TestimonialsSectionData from './09TestimonialsSection.js'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

const quote = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff274c1ce9bc0b1d47e56_Quote%20Icons.svg'

function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-[90px]">
      <motion.div className="mx-auto max-w-[1038px] text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        {TestimonialsSectionData.map((testimonial, index) => (
          <motion.div key={testimonial.name} variants={fadeUp} className={index === 0 ? '' : 'mt-14 border-t border-heading/10 pt-14'}>
            <img src={quote} alt="" className="mx-auto mb-[30px] h-[50px]" />
            <p className="mx-auto mb-10 max-w-[900px] font-heading text-[27px] font-medium leading-[39px] tracking-[-0.6px] text-heading">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <h3 className="font-heading text-[28px] font-semibold leading-[32px] tracking-[-0.5px] text-heading">{testimonial.name}</h3>
            <p className="mt-[6px] text-[13px] uppercase leading-5 text-paragraph">{testimonial.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TestimonialsSection
