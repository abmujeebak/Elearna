import ClientsSection from '../../components/HomeOne/03ClientsSection.jsx'
import CoursesSection from '../../components/HomeOne/06CoursesSection.jsx'
import OfferSection from '../../components/HomeOne/07OfferSection.jsx'
import CTASection from '../../components/HomeOne/11CTASection.jsx'
import { PageHero } from '../shared/index.jsx'

function HomeThree() {
  return (
    <>
      <PageHero eyebrow="Online learning" title="Home Three" text="This Webflow template includes multiple homepage layouts. This route keeps the third homepage variant present in the site map." />
      <ClientsSection />
      <CoursesSection />
      <OfferSection />
      <CTASection />
    </>
  )
}

export default HomeThree
