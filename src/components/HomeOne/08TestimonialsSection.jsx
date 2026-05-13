import TestimonialsSectionData from './08TestimonialsSection.js'
import { motion } from 'framer-motion'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { fadeLeft, fadeRight, viewport } from './motionConfig.js'
import 'swiper/css'
import 'swiper/css/navigation'

function TestimonialsSection() {
  return TestimonialsSectionData.map((section) => (
    <section
      key={section.testimonials[0].name}
      className="bg-heading bg-cover bg-center py-[88px] text-white"
      style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cd4b7767641295ddbc57c6_Testimonial%20Background.avif")' }}
    >
      <div className="mx-auto grid max-w-[880px] items-start gap-[54px] px-4 lg:grid-cols-[395px_1fr] lg:px-0">
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="text-[11px] font-semibold uppercase leading-none text-white">Our testimonials</p>
          <h2 className="mt-[17px] font-heading text-[32px] font-semibold leading-[38px] tracking-[-1px] text-white">
            Trusted by our successful students
          </h2>
          <img
            src={section.testimonials[0].avatar}
            alt="Testimonial Author"
            className="mt-[26px] aspect-[395/282] w-full rounded object-cover"
          />
        </motion.div>

        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="mb-[46px] grid gap-8 sm:grid-cols-2">
            {section.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-[18px]">
                <span className="font-heading text-[39px] font-semibold leading-none text-white">{stat.value}</span>
                <span className="h-[31px] w-px bg-white/35" />
                <span className="max-w-[92px] text-[12px] uppercase leading-[18px] text-white/55">{stat.label}</span>
              </div>
            ))}
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            speed={700}
            slidesPerView={1}
            className="testimonial-swiper"
          >
            {section.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div>
                  <p className="max-w-[440px] text-[17px] font-medium leading-[29px] text-white/45">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="mt-[34px]">
                    <h3 className="font-heading text-[18px] font-semibold leading-[22px] text-white">{testimonial.name}</h3>
                    <p className="mt-[7px] text-[11px] uppercase tracking-[0.4px] text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-[24px] flex gap-[8px]">
            <button className="testimonial-prev grid h-[29px] w-[29px] place-items-center rounded-full border border-white/35 text-white transition hover:border-brand hover:bg-brand">
              <img src={section.arrow} alt="Icon" className="w-[12px] rotate-180 brightness-0 invert" />
            </button>
            <button className="testimonial-next grid h-[29px] w-[29px] place-items-center rounded-full border border-white/35 text-white transition hover:border-brand hover:bg-brand">
              <img src={section.arrow} alt="Icon" className="w-[12px] brightness-0 invert" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  ))
}

export default TestimonialsSection
