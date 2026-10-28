import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import '@fontsource-variable/geist';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './styles.css';
import { Header, Footer } from './components/Site';
import Home from './pages/Home';
import { AboutPage, AudiencePage, BookingPage, CapabilitiesPage, CaseDetail, CaseStudiesPage, ContactPage, DeliveryPage, HowWeWorkPage, InsightDetail, InsightsPage, LegalPage, NotFound, ServiceDetail, ServicesPage } from './pages/Pages';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' }));
    } else window.scrollTo({top:0, left:0, behavior:'instant'});
  }, [pathname, hash]);
  return null;
}
function MotionEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = [...document.querySelectorAll('.section-heading, .problem-content, .story-visual, .why-rows, .delivery-diagram, .project-card, .home-step, .capability-map, .audience-rows, .article-card, .faq-list, .practice-art, .service-signature, .case-detail-visual, .case-story-row, .delivery-story-step')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('motion-pending');
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    elements.forEach(element => { element.classList.add('motion-pending'); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('motion-pending', 'motion-visible')); };
  }, [pathname]);
  return null;
}
function App() { return <BrowserRouter><ScrollManager/><MotionEffects/><a className="skip-link" href="#main-content">Skip to content</a><Header/><div id="main-content"><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/how-we-work" element={<HowWeWorkPage/>}/><Route path="/case-studies" element={<CaseStudiesPage/>}/><Route path="/case-studies/:slug" element={<CaseDetail/>}/><Route path="/insights" element={<InsightsPage/>}/><Route path="/insights/:slug" element={<InsightDetail/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/delivery-model" element={<DeliveryPage/>}/><Route path="/capabilities" element={<CapabilitiesPage/>}/><Route path="/who-we-work-with" element={<AudiencePage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/book-a-call" element={<BookingPage/>}/><Route path="/privacy" element={<LegalPage type="privacy"/>}/><Route path="/terms" element={<LegalPage type="terms"/>}/><Route path="/cookies" element={<LegalPage type="cookies"/>}/><Route path="*" element={<NotFound/>}/></Routes></div><Footer/></BrowserRouter>; }

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
