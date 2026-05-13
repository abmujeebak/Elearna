import QuickStartSectionData from './05QuickStartSection.js'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewport } from './motionConfig.js'

function QuickStartSection() {
  return (
    <section className="bg-white pb-[90px]">
      <div className="mx-auto grid max-w-[1320px] gap-[35px] px-4 lg:grid-cols-2 lg:px-6">
        {QuickStartSectionData.map((card, index) => (
          card.type === 'courseAccess' ? (
            <motion.div
              key={card.title}
              className="min-h-[300px] rounded bg-lightBlue bg-contain bg-right bg-no-repeat px-[30px] py-[67px]"
              style={{ backgroundImage: `url("${card.background}")` }}
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="max-w-[259px]">
                <h2 className="font-heading text-[35px] font-semibold leading-[42px] tracking-[-1px] text-heading">
                  {card.title}
                </h2>
                <a href="#" className="btn-dark mt-[30px]">
                  {card.buttonLabel}
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div key={card.title} className="grid items-center gap-[30px] rounded bg-lightYellow px-[30px] py-[33px] md:grid-cols-[200px_1fr]" variants={index === 0 ? fadeRight : fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <div>
                <h2 className="font-heading text-[35px] font-semibold leading-[42px] tracking-[-1px] text-heading">
                  {card.title}
                </h2>
                <a href="#" className="btn-primary mt-[30px]">
                  {card.buttonLabel}
                </a>
              </div>
              <div className="relative aspect-[283/222] overflow-hidden rounded-[14px]">
                <img src={card.image} alt="Course video" className="h-full w-full object-cover" />
                <img src={card.controls} alt="Controls" className="absolute bottom-5 left-1/2 w-28 -translate-x-1/2" />
              </div>
            </motion.div>
          )
        ))}
      </div>
    </section>
  )
}

export default QuickStartSection
