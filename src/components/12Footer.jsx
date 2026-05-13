import FooterData from './12Footer.js'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from './HomeOne/motionConfig.js'

function Footer() {
  const brand = FooterData.find((item) => item.type === 'brand')
  const footerColumns = FooterData.filter((item) => item.type !== 'brand')

  return (
    <footer
      className="overflow-hidden bg-heading bg-cover bg-center pt-[180px] text-white"
      style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cc74abfe41ded5921fb644_Footer%20One%20Background-3.avif")' }}
    >
      <motion.div className="mx-auto grid max-w-[1320px] gap-[30px] px-4 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] lg:px-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.div variants={fadeUp} className="max-w-[263px]">
          <img src={brand.logo} alt="Elearna" className="h-[26px] brightness-0 invert" />
          <p className="mt-[23px] text-[17px] leading-[27px] text-white/65">{brand.description}</p>
        </motion.div>
        {footerColumns.map((column) => (
          <motion.div key={column.title} variants={fadeUp}>
            <h3 className="mb-[27px] font-heading text-xl font-semibold leading-[25px] tracking-[-0.5px] text-white">{column.title}</h3>
            <div className="flex flex-col gap-3">
              {column.links.map((link) => (
                <a key={link.href} href={link.href} className="text-[17px] leading-[27px] text-white/65 transition hover:text-brand">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mx-auto max-w-[1750px] px-4 lg:px-6">
        <div className="h-px bg-paragraph" />
        <div className="flex flex-col justify-between gap-3 py-4 text-[15px] uppercase leading-5 text-white/65 sm:flex-row">
          <p>Design by <a href="#" className="text-white transition hover:text-brand">Radiant Templates</a></p>
          <p>Powered by <a href="#" className="text-white transition hover:text-brand">Webflow</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
