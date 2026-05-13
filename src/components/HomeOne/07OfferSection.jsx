import OfferSectionData from './07OfferSection.js'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewport } from './motionConfig.js'

function OfferSection() {
  return OfferSectionData.map((offer) => (
    <section key={offer.title} className="bg-white py-[90px]">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 lg:grid-cols-[minmax(0,630px)_minmax(0,550px)] lg:justify-between lg:px-6">
        <motion.div className="relative min-h-[520px]" variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <img src={offer.images.courseCount} alt="Course Count" className="absolute left-[25%] top-0 z-20 w-[210px] shadow-card" />
          <img src={offer.images.manGraph} alt="Man Image Holding Graph" className="absolute bottom-0 left-0 z-10 w-[58%] rounded shadow-[0_40px_60px_rgba(0,0,0,0.25)]" />
          <img src={offer.images.womanTab} alt="Woman Image Holding Tab" className="absolute bottom-[12%] right-0 w-[55%] rounded shadow-[0_40px_60px_rgba(0,0,0,0.25)]" />
        </motion.div>
        <motion.div className="max-w-[550px]" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-heading">{offer.eyebrow}</p>
          <h2 className="mb-3 mt-[15px] font-heading text-[36px] font-semibold leading-[42px] tracking-[-1.5px] text-heading sm:text-[48px] sm:leading-[52px]">
            {offer.title}
          </h2>
          <p className="mb-5 text-[17px] leading-[27px] text-paragraph">
            {offer.description}
          </p>
          <div className="mb-[45px] grid max-w-[513px] gap-x-10 gap-y-[13px] sm:grid-cols-2">
            {offer.bullets.map((item) => (
              <div key={item} className="flex items-center gap-3 font-heading font-semibold text-heading">
                <img src={offer.images.tick} alt="Icon" className="h-[10px] w-3" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-6 rounded bg-lightBlue p-[30px] sm:flex-row sm:items-center md:px-10">
            <div className="max-w-[299px]">
              <h3 className="font-heading text-2xl font-semibold tracking-[-0.5px] text-heading">{offer.questionTitle}</h3>
              <p className="mt-[10px] text-paragraph">{offer.questionDescription}</p>
            </div>
            <a href="#" className="btn-dark shrink-0">{offer.buttonLabel}</a>
          </div>
        </motion.div>
      </div>
    </section>
  ))
}

export default OfferSection
