import { courses, events, posts, team } from '../../data/site.js'

const heroImage = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bc7a60b0cfc38a197_Hero%20Girl%20Image.webp'
const aboutImage = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cdbb08eca9e52f5fef61f8_Man%20Image%20Holding%20Graph.webp'

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-heading px-4 pb-20 pt-32 text-white lg:pt-36">
      <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-heading text-5xl font-semibold leading-tight tracking-[-0.02em] sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-[600px] text-[18px] leading-8 text-white/70">{text}</p>
        </div>
        <img src={heroImage} alt="" className="mx-auto max-h-[360px] object-contain" />
      </div>
    </section>
  )
}

function CourseCard({ course }) {
  return (
    <article className="overflow-hidden rounded bg-white shadow-card">
      <a href={`/${course.slug}/course-details`}>
        <img src={course.image} alt="" className="h-[220px] w-full object-cover" />
      </a>
      <div className="p-6">
        <p className="small-heading text-brand">{course.category}</p>
        <h3 className="mt-3 font-heading text-[24px] font-semibold leading-[30px] tracking-[-0.5px] text-heading">
          <a href={`/${course.slug}/course-details`} className="transition hover:text-brand">{course.title}</a>
        </h3>
        <div className="mt-5 flex flex-wrap gap-4 text-[15px] text-paragraph">
          <span>{course.rating}</span>
          <span>{course.lessons}</span>
          <span>{course.students}</span>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-heading/10 pt-5">
          <a href={`/${course.slug}/course-details`} className="font-heading text-[16px] font-semibold text-heading transition hover:text-brand">Course Details</a>
          <span className="font-heading text-[22px] font-semibold text-heading">{course.price}</span>
        </div>
      </div>
    </article>
  )
}

export function CourseListing({ variant = 'one' }) {
  const limit = variant === 'three' ? 9 : variant === 'two' ? 8 : 6

  return (
    <>
      <PageHero eyebrow="Online courses" title={`Course ${variant[0].toUpperCase()}${variant.slice(1)}`} text="Browse the learning tracks, categories, and course detail pages from the Elearna template." />
      <section className="section-wrap bg-lightBlue px-4">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Top programs</p>
              <h2 className="section-title">Popular course collection</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-[14px] font-semibold text-heading">
              {['All courses', 'Design', 'Development', 'Management', 'Finance'].map((tab) => (
                <span key={tab} className="rounded border border-heading/10 bg-white px-4 py-2">{tab}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, limit).map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export function CourseDetails({ slug }) {
  const course = courses.find((item) => item.slug === slug) || courses[0]

  return (
    <>
      <PageHero eyebrow={course.category} title={course.title} text="A focused course detail page with the same structure as the Webflow template: hero, highlights, curriculum, and enrollment action." />
      <section className="section-wrap px-4">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <img src={course.image} alt="" className="mb-8 h-[420px] w-full rounded object-cover" />
            <h2 className="section-title">What you will learn</h2>
            <p className="mt-5 text-[18px] leading-8 text-paragraph">Build practical skills through guided lessons, hands-on assignments, and project-based learning designed for steady progress.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Skill-based instruction', 'Analytics and insights', 'Global certification', 'Customizable courses'].map((item) => (
                <div key={item} className="rounded bg-lightBlue p-5 font-heading text-[18px] font-semibold text-heading">{item}</div>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded bg-heading p-7 text-white">
            <p className="font-heading text-4xl font-semibold text-brand">{course.price}</p>
            <div className="mt-6 grid gap-4 text-white/75">
              <span>{course.rating}</span>
              <span>{course.lessons}</span>
              <span>{course.students}</span>
            </div>
            <a href={`/product/${course.slug}`} className="btn-primary mt-8 w-full">Enroll now</a>
          </aside>
        </div>
      </section>
    </>
  )
}

export function AboutPage({ variant = 'one' }) {
  return (
    <>
      <PageHero eyebrow="About Elearna" title={`About ${variant[0].toUpperCase()}${variant.slice(1)}`} text="An online education platform layout for programs, tutors, certifications, and student success stories." />
      <section className="section-wrap px-4">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-2 lg:items-center">
          <img src={aboutImage} alt="" className="rounded object-cover" />
          <div>
            <p className="eyebrow">What we offer</p>
            <h2 className="section-title">Personalized learning for your ambitions</h2>
            <p className="mt-5 text-[18px] leading-8 text-paragraph">The template combines course catalogs, learner outcomes, instructor profiles, pricing, and contact flows into one education website system.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['350+ partners', '25k+ learners', '12k placements', 'Global certification'].map((item) => (
                <div key={item} className="rounded bg-lightBlue p-5 font-heading text-xl font-semibold text-heading">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function PricingPage({ variant = 'one' }) {
  const plans = ['Basic', 'Professional', 'Enterprise']

  return (
    <>
      <PageHero eyebrow="Pricing" title={`Pricing ${variant[0].toUpperCase()}${variant.slice(1)}`} text="Three pricing layouts are represented with plan cards, feature lists, and clear enrollment actions." />
      <section className="section-wrap bg-lightBlue px-4">
        <div className="mx-auto grid max-w-[1120px] gap-7 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article key={plan} className="rounded bg-white p-8 shadow-card">
              <p className="small-heading text-brand">{plan}</p>
              <h2 className="mt-4 font-heading text-5xl font-semibold text-heading">${[19, 49, 99][index]}</h2>
              <div className="mt-7 grid gap-3 text-paragraph">
                <span>Unlimited course access</span>
                <span>Learning analytics</span>
                <span>Certificate support</span>
              </div>
              <a href="/contact-one" className="btn-outline-dark mt-8 w-full">Get Started</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export function BlogPage({ variant = 'one' }) {
  return (
    <>
      <PageHero eyebrow="Blog" title={`Blog ${variant[0].toUpperCase()}${variant.slice(1)}`} text="Editorial pages for learning advice, platform updates, and student success content." />
      <section className="section-wrap px-4">
        <div className="mx-auto grid max-w-[1120px] gap-7 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post} className="rounded bg-lightBlue p-7">
              <p className="small-heading text-brand">Article 0{index + 1}</p>
              <h2 className="mt-4 font-heading text-[26px] font-semibold leading-[32px] text-heading">{post}</h2>
              <p className="mt-4 text-paragraph">Practical notes for students building momentum through online courses.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export function SimplePage({ type }) {
  const content = {
    faq: ['FAQ', 'Answers for common questions about courses, enrollment, certificates, and learning access.'],
    career: ['Career', 'Open roles, application guidance, and education team opportunities.'],
    events: ['Events', 'Upcoming workshops and live learning sessions.'],
    team: ['Team', 'Instructor and support team profiles.'],
    'sign-up': ['Register', 'Account access and learner registration.'],
    checkout: ['Checkout', 'Cart and checkout flow.'],
  }
  const [title, text] = content[type] || ['Page', 'Template page']
  const items = type === 'events' ? events : type === 'team' ? team : ['Flexible learning', 'Expert tutors', 'Project practice', 'Certification']

  return (
    <>
      <PageHero eyebrow="Elearna" title={title} text={text} />
      <section className="section-wrap px-4">
        <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="rounded bg-lightBlue p-6 font-heading text-xl font-semibold text-heading">{item}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export function ContactPage({ variant = 'one' }) {
  return (
    <>
      <PageHero eyebrow="Contact" title={`Contact ${variant[0].toUpperCase()}${variant.slice(1)}`} text="Contact layouts with education-focused support and lead capture." />
      <section className="section-wrap px-4">
        <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded bg-heading p-8 text-white">
            <h2 className="font-heading text-3xl font-semibold">Still have questions?</h2>
            <p className="mt-4 text-white/70">Talk with the admissions team about courses, pricing, and enrollment paths.</p>
          </div>
          <form className="grid gap-4 rounded bg-lightBlue p-8 sm:grid-cols-2">
            <input className="rounded border-0 px-4 py-4" placeholder="Name" />
            <input className="rounded border-0 px-4 py-4" placeholder="Email" />
            <textarea className="min-h-[150px] rounded border-0 px-4 py-4 sm:col-span-2" placeholder="Message" />
            <button className="btn-dark sm:w-fit" type="button">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export function ProductPage({ slug }) {
  const course = courses.find((item) => item.slug === slug) || courses[0]
  return <CourseDetails slug={course.slug} />
}
