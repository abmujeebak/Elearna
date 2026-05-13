import { motion } from 'framer-motion'
import ClientsSectionData from './08ClientsSection.js'
import { fadeUp, viewport } from './motionConfig.js'

function ClientsSection() {
  return (
    <section className="-mt-20 px-4">
      <motion.div className="mx-auto flex max-w-[1120px] flex-col items-center gap-[35px] rounded bg-white px-6 py-[45px] text-center shadow-[0_10px_60px_rgba(71,107,115,0.15)] lg:flex-row lg:px-[55px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <p className="max-w-[290px] shrink-0 font-heading text-[20px] font-semibold leading-[26px] tracking-[-0.4px] text-heading">
          Learn from 350+ leading universities and companies with us
        </p>
        <div className="grid w-full flex-1 grid-cols-2 items-center gap-7 sm:grid-cols-3 lg:grid-cols-6">
          {ClientsSectionData.map((logo) => (
            <img key={logo} src={logo} alt="Client" className="mx-auto max-h-[34px]" />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ClientsSection
