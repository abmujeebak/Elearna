import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewport } from './motionConfig.js'

const counters = [
  ['15K', 'Finish seasons'],
  ['76.8K', 'Enrolled'],
  ['100%', 'Job placement'],
]

function LearningSection() {
  return (
    <section className="bg-white px-4 py-[90px]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-[50px] lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div className="relative grid gap-5 bg-[url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff2745bc495d2bda978f2_Yellow%20Circle.svg')] bg-left-top bg-no-repeat py-10 sm:grid-cols-[0.7fr_1fr]" variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="z-10 self-end overflow-hidden rounded-tl-[40px] shadow-card">
            <img src="https://cdn.prod.website-files.com/668cb7adec02e140422345de%2F66c86567624ca9dec83f55cc_Home%20One%20Video-poster-00001.jpg" alt="" className="h-[286px] w-full object-cover" />
          </div>
          <img src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff274cdd4c2243b9ba324_Woman%20Image.webp" alt="" className="rounded shadow-card" />
        </motion.div>
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-heading">Why we are</p>
          <h2 className="mb-[30px] mt-[15px] font-heading text-[40px] font-semibold leading-[46px] tracking-[-1.5px] text-heading">
            World-class learning from anywhere
          </h2>
          <p className="mb-10 text-[17px] leading-[27px] text-paragraph">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.
          </p>
          <div className="grid gap-7">
            {counters.map(([value, label]) => (
              <div key={label} className="flex items-center gap-6">
                <span className="min-w-[110px] font-heading text-[48px] font-semibold leading-none text-heading">{value}</span>
                <span className="h-[48px] w-px bg-heading" />
                <span className="text-[13px] font-semibold uppercase leading-[19px] text-paragraph">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded bg-lightBlue p-[30px] sm:flex-row sm:items-center">
            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-[-0.5px] text-heading">Still have questions?</h3>
              <p className="mt-[10px] text-paragraph">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
            </div>
            <a href="/contact-one" className="btn-dark shrink-0">Get Started</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningSection
