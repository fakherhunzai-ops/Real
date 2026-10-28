import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { practices, serviceBySlug } from '../data';

export function Brand({ large = false }) {
  return <Link className={`brand ${large ? 'brand-large' : ''}`} to="/" aria-label="Horizon Consults home">
    <svg className="brand-mark" width="35" height="35" viewBox="0 0 35 35" aria-hidden="true"><path d="M2 4h5v11h21V4h5v27h-5V20H7v11H2z" fill="currentColor"/><path d="M11 8h13v2H11z" fill="currentColor"/></svg>
    <span><strong>HORIZON</strong>{' '}<small>CONSULTS</small></span>
  </Link>;
}

function ServiceMenu({ close }) {
  return <div className="mega mega-services" id="service-menu" onClick={(event) => event.stopPropagation()}>
    <div className="mega-head"><span>WHAT WE DO</span><span><i className="dot" /> 15 SERVICES <b>—</b> 4 PRACTICES</span></div>
    <div className="mega-columns">
      {[practices.slice(0, 2), practices.slice(2)].map((column, index) => <div className="mega-column" key={index}>
        {column.map(group => <div className="mega-group" key={group.id}>
          <div className="micro lime">{group.title}</div>
          <div className="mega-links">{group.services.map(slug => { const item = serviceBySlug(slug); return <Link onClick={close} to={`/services/${slug}`} className="mega-service" key={slug}><span><strong>{item.title}</strong><small>{item.short}</small></span><ArrowUpRight size={15}/></Link>; })}</div>
        </div>)}
      </div>)}
    </div>
    <div className="mega-bottom"><span>Not sure which fits? <strong>Start with the problem.</strong></span><div><Link onClick={close} to="/services">View all services <ArrowUpRight size={15}/></Link><Link onClick={close} className="lime" to="/book-a-call">Book a call <ArrowRight size={15}/></Link></div></div>
  </div>;
}
function CompanyMenu({ close }) {
  const items = [['About Horizon','/about'],['Delivery Model','/delivery-model'],['Capabilities','/capabilities'],['Who We Work With','/who-we-work-with'],['Contact','/contact']];
  return <div className="mega company-menu" id="company-menu"><div className="micro lime">THE COMPANY</div>{items.map(([text,to]) => <Link onClick={close} to={to} key={to}>{text}<ArrowUpRight size={16}/></Link>)}</div>;
}

export function Header() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(null); setMobile(false); setMobileSection(null); }, [location.pathname]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    const key = e => { if(e.key === 'Escape') { setOpen(null); setMobile(false); } };
    window.addEventListener('scroll', scroll, { passive:true }); window.addEventListener('keydown', key);
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('keydown', key); };
  }, []);
  useEffect(() => { document.body.classList.toggle('menu-open', mobile); return () => document.body.classList.remove('menu-open'); }, [mobile]);
  const close = () => setOpen(null);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} onMouseLeave={() => setOpen(null)}>
    <div className="header-inner shell-wide">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <div className="nav-item" onMouseEnter={() => setOpen('services')}>
          <button className={(location.pathname.startsWith('/services') || open === 'services') ? 'active' : ''} aria-expanded={open === 'services'} aria-controls="service-menu" onClick={() => setOpen(open === 'services' ? null : 'services')}>Services <ChevronDown size={12}/></button>
        </div>
        <NavLink to="/how-we-work" onMouseEnter={close}>How We Work</NavLink>
        <NavLink to="/case-studies" onMouseEnter={close}>Case Studies</NavLink>
        <NavLink to="/insights" onMouseEnter={close}>Insights</NavLink>
        <div className="nav-item" onMouseEnter={() => setOpen('company')}>
          <button className={(['/about','/delivery-model','/capabilities','/who-we-work-with','/contact'].includes(location.pathname) || open === 'company') ? 'active' : ''} aria-expanded={open === 'company'} aria-controls="company-menu" onClick={() => setOpen(open === 'company' ? null : 'company')}>Company <ChevronDown size={12}/></button>
        </div>
      </nav>
      <div className="header-actions"><Link className="header-contact" to="/contact">UK Contact <ArrowUpRight size={14}/></Link><Link className="button button-lime button-small" to="/book-a-call">Book a call <ArrowUpRight size={15}/></Link></div>
      <button className="mobile-toggle" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} onClick={() => { setMobile(!mobile); setOpen(null); }}>{mobile ? <X size={25}/> : <Menu size={25}/>}</button>
    </div>
    {open === 'services' && <ServiceMenu close={close}/>} {open === 'company' && <CompanyMenu close={close}/>}
    {mobile && <div className="mobile-menu"><nav aria-label="Mobile navigation">
      <Link to="/">Home <ArrowUpRight size={18}/></Link>
      <button onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')} aria-expanded={mobileSection === 'services'}>Services <span>{mobileSection === 'services' ? '−' : '+'}</span></button>
      {mobileSection === 'services' && <div className="mobile-submenu"><Link to="/services">All services <ArrowUpRight size={15}/></Link>{practices.map(group => <div key={group.id}><div className="micro lime">{group.title}</div>{group.services.map(slug => <Link to={`/services/${slug}`} key={slug}>{serviceBySlug(slug).title}</Link>)}</div>)}</div>}
      <Link to="/how-we-work">How We Work <ArrowUpRight size={18}/></Link><Link to="/case-studies">Case Studies <ArrowUpRight size={18}/></Link><Link to="/insights">Insights <ArrowUpRight size={18}/></Link>
      <button onClick={() => setMobileSection(mobileSection === 'company' ? null : 'company')} aria-expanded={mobileSection === 'company'}>Company <span>{mobileSection === 'company' ? '−' : '+'}</span></button>
      {mobileSection === 'company' && <div className="mobile-submenu">{[['About Horizon','/about'],['Delivery Model','/delivery-model'],['Capabilities','/capabilities'],['Who We Work With','/who-we-work-with'],['Contact','/contact']].map(([label,to]) => <Link to={to} key={to}>{label}</Link>)}</div>}
      <Link className="mobile-book" to="/book-a-call">Book a call <ArrowUpRight size={18}/></Link>
    </nav></div>}
  </header>;
}

export function Eyebrow({ children, number, className = '' }) { return <div className={`eyebrow ${className}`}><span className="eyebrow-dot" />{children}{number && <span className="eyebrow-number">/{number}</span>}</div>; }
export function ArrowLink({ to, children, className = '', light = false }) { return <Link className={`arrow-link ${light ? 'arrow-link-light' : ''} ${className}`} to={to}>{children}<span><ArrowUpRight size={17}/></span></Link>; }
export function ButtonLink({ to, children, variant = 'lime', className = '' }) { return <Link className={`button button-${variant} ${className}`} to={to}>{children}<ArrowUpRight size={17}/></Link>; }
export function SectionTitle({ label, number, title, copy, link, linkText, light = false }) {
  return <div className={`section-heading ${light ? 'on-light' : ''}`}><Eyebrow number={number}>{label}</Eyebrow><div className="section-heading-main"><h2>{title}</h2><div>{copy && <p>{copy}</p>}{link && <ArrowLink to={link}>{linkText}</ArrowLink>}</div></div></div>;
}
export function ScrollCue() { return <a href="#next" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>; }

const footerCols = [
  {title:'EXPLORE', links:[['Home','/'],['Services','/services'],['How We Work','/how-we-work'],['Case Studies','/case-studies'],['Insights','/insights']]},
  {title:'COMPANY', links:[['About Horizon','/about'],['Delivery Model','/delivery-model'],['Capabilities','/capabilities'],['Who We Work With','/who-we-work-with'],['Contact','/contact']]},
  {title:'LEGAL', links:[['Privacy','/privacy'],['Terms','/terms'],['Cookies','/cookies']]},
];
export function Footer() { return <footer className="footer"><div className="shell-wide">
  <div className="footer-top"><div><Brand/><p>Good thinking. Better technology.<br/>Built for the work ahead.</p><Link to="/book-a-call" className="footer-start">Start a conversation <ArrowUpRight size={17}/></Link></div><div className="footer-columns">{footerCols.map(col => <div key={col.title}><div className="micro">{col.title}</div>{col.links.map(([label,to]) => <Link to={to} key={to}>{label}</Link>)}</div>)}</div></div>
  <div className="footer-wordmark" aria-hidden="true">HORIZON<span>✳</span></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} HORIZON CONSULTS</span><span>UK ACCOUNTABILITY / INTERNATIONAL DELIVERY</span><a href="#top">BACK TO TOP ↑</a></div>
</div></footer>; }

export function CompactCTA() { return <section className="compact-cta"><div className="shell-wide"><Eyebrow>THE NEXT STEP</Eyebrow><div className="compact-cta-row"><h2>Have a problem<br/><em>worth solving?</em></h2><div><p>Start with the business problem. You don’t need a finished technical brief.</p><ButtonLink to="/book-a-call" variant="dark">Start a conversation</ButtonLink></div></div></div></section>; }
