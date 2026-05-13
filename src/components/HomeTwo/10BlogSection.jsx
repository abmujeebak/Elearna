import { motion } from 'framer-motion'
import BlogSectionData from './10BlogSection.js'
import { fadeUp, staggerContainer, viewport } from './motionConfig.js'

function BlogSection() {
  return (
    <section className="bg-lightBlue px-4 py-[90px]">
      <div className="mx-auto max-w-[1120px]">
        <motion.div className="mx-auto mb-[34px] max-w-[728px] text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="small-heading text-heading">Education Blog</p>
          <h2 className="mt-[15px] font-heading text-[40px] font-semibold leading-[46px] tracking-[-1.5px] text-heading">Our news and ideas</h2>
          <p className="mt-4 text-[17px] leading-[27px] text-paragraph">
            Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.
          </p>
        </motion.div>
        <motion.div className="grid gap-[30px] md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {BlogSectionData.map((post) => (
            <motion.article key={post.title} variants={fadeUp} className="overflow-hidden rounded bg-white shadow-[0_30px_60px_rgba(43,51,79,0.13)]">
              <div className="overflow-hidden">
                <img src={post.image} alt="" className="aspect-[353/255] w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="flex flex-col items-start gap-5 p-6">
                <p className="small-heading text-brand">{post.category}</p>
                <h3 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-0.5px] text-heading">{post.title}</h3>
                <p className="text-[15px] text-paragraph">{post.date}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
