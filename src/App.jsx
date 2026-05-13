import Navbar from './components/01Navbar.jsx'
import Footer from './components/12Footer.jsx'
import AboutOne from './pages/AboutOne/index.jsx'
import AboutTwo from './pages/AboutTwo/index.jsx'
import BlogOne from './pages/BlogOne/index.jsx'
import BlogThree from './pages/BlogThree/index.jsx'
import BlogTwo from './pages/BlogTwo/index.jsx'
import ContactOne from './pages/ContactOne/index.jsx'
import ContactThree from './pages/ContactThree/index.jsx'
import ContactTwo from './pages/ContactTwo/index.jsx'
import CourseDetailsPage from './pages/CourseDetails/index.jsx'
import CourseOne from './pages/CourseOne/index.jsx'
import CourseThree from './pages/CourseThree/index.jsx'
import CourseTwo from './pages/CourseTwo/index.jsx'
import HomeOne from './pages/HomeOne/index.jsx'
import HomeThree from './pages/HomeThree/index.jsx'
import HomeTwo from './pages/HomeTwo/index.jsx'
import PricingOne from './pages/PricingOne/index.jsx'
import PricingThree from './pages/PricingThree/index.jsx'
import PricingTwo from './pages/PricingTwo/index.jsx'
import Product from './pages/ProductPage/index.jsx'
import Simple from './pages/SimplePage/index.jsx'

function getPage(pathname) {
  const path = pathname === '/' ? '/home-one' : pathname
  const courseMatch = path.match(/^\/([^/]+)\/course-details$/)
  const productMatch = path.match(/^\/product\/([^/]+)$/)

  if (path === '/home-one') return <HomeOne />
  if (path === '/home-two') return <HomeTwo />
  if (path === '/home-three') return <HomeThree />
  if (path === '/course-one') return <CourseOne />
  if (path === '/course-two') return <CourseTwo />
  if (path === '/course-three') return <CourseThree />
  if (path === '/about-one') return <AboutOne />
  if (path === '/about-two') return <AboutTwo />
  if (path === '/pricing-one') return <PricingOne />
  if (path === '/pricing-two') return <PricingTwo />
  if (path === '/pricing-three') return <PricingThree />
  if (path === '/blog-one') return <BlogOne />
  if (path === '/blog-two') return <BlogTwo />
  if (path === '/blog-three') return <BlogThree />
  if (path === '/contact-one') return <ContactOne />
  if (path === '/contact-two') return <ContactTwo />
  if (path === '/contact-three') return <ContactThree />
  if (['/faq', '/career', '/events', '/team', '/sign-up', '/checkout'].includes(path)) return <Simple type={path.slice(1)} />
  if (courseMatch) return <CourseDetailsPage slug={courseMatch[1]} />
  if (productMatch) return <Product slug={productMatch[1]} />

  return <HomeOne />
}

function App() {
  const path = window.location.pathname === '/' ? '/home-one' : window.location.pathname

  return (
    <>
      <Navbar showTopBar={path === '/home-two'} />
      <main>{getPage(path)}</main>
      <Footer />
    </>
  )
}

export default App
