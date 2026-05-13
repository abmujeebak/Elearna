import NavbarData from '../01Navbar.js'

const logo = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg'

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="border-b border-[#a9b3c140] bg-heading/35 px-4 py-[6px] backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-2 text-[12px] leading-5 text-[#d6d6d6] md:flex-row md:items-center">
          <p>Are you interested in online coaching? <a href="/contact-one" className="text-white underline decoration-white/40 transition hover:text-brand">Contact us.</a></p>
          <div className="flex flex-wrap gap-x-[30px] gap-y-1">
            <a href="mailto:support@example.com" className="transition hover:text-brand">support@example.com</a>
            <a href="tel:8881234567" className="transition hover:text-brand">Call: (888) 123 4567</a>
          </div>
        </div>
      </div>
      <nav className="bg-transparent px-4">
        <div className="mx-auto grid h-[72px] max-w-[1320px] grid-cols-[185px_1fr_185px] items-center">
          <a href="/home-two">
            <img src={logo} alt="Elearna" className="h-[26px] brightness-0 invert" />
          </a>
          <div className="hidden items-center justify-center lg:flex">
            {NavbarData.map((item) => (
              <div key={item.label} className="group relative">
                <a href={item.href} className="flex items-center gap-[5px] px-5 py-[26px] text-[13px] font-semibold leading-none text-white transition hover:text-brand">
                  <span>{item.label}</span>
                  <svg className="h-[7px] w-[7px] transition group-hover:translate-y-0.5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 translate-y-3 rounded-b bg-white p-6 text-heading opacity-0 shadow-card transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className={`grid gap-6 ${item.groups.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-3 font-heading text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">{group.title}</p>
                        <div className="flex flex-col gap-2">
                          {group.links.map((link) => (
                            <a key={link.href} href={link.href} className="text-[14px] leading-5 text-heading/75 transition hover:text-heading">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden items-center justify-end gap-[18px] lg:flex">
            <a href="/checkout" className="relative text-white transition hover:text-brand" aria-label="Cart">
              <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 8h13l-1.4 7.2a2 2 0 0 1-2 1.6H9.3a2 2 0 0 1-2-1.7L6 4H3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21h.01M17 21h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="absolute -right-[7px] -top-[7px] grid h-[14px] min-w-[14px] place-items-center rounded-full bg-brand px-[3px] text-[9px] font-semibold leading-none text-heading">0</span>
            </a>
            <a href="/sign-up" className="text-[12px] font-semibold leading-none text-white transition hover:text-brand">Register</a>
          </div>
          <button className="ml-auto grid h-9 w-9 place-items-center rounded border border-white/20 text-white lg:hidden">
            <span className="h-0.5 w-5 bg-current shadow-[0_7px_0_currentColor,0_-7px_0_currentColor]" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
