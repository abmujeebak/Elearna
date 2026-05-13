import ClientsSectionData from './03ClientsSection.js'
import { motion } from 'framer-motion'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'
import 'swiper/css'

function ClientsSection() {
  return (
    <section className="overflow-hidden bg-lightBlue py-[65px]">
      <div className="mx-auto max-w-[1320px] px-4 text-center lg:px-6">
        <motion.h2 className="mb-[25px] font-heading text-xl font-semibold text-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          Learn from 350+ leading universities and companies with us
        </motion.h2>
        <motion.div className="mx-auto max-w-[1120px]" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <Swiper
            modules={[Autoplay]}
            loop
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={2}
            spaceBetween={46}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 58 },
              1024: { slidesPerView: 5, spaceBetween: 76 },
              1280: { slidesPerView: 6, spaceBetween: 91 },
            }}
            className="clients-swiper"
          >
            {[...ClientsSectionData, ...ClientsSectionData].map((logo, index) => (
              <SwiperSlide key={`${logo.image}-${index}`} className="!flex h-12 items-center justify-center">
                <motion.img variants={fadeUp} src={logo.image} alt={logo.alt} className="max-h-9 opacity-35 grayscale transition hover:opacity-80 hover:grayscale-0" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
