import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data';

export function EnquiryForm({ booking = false }) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending'); setError('');
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    body.kind = booking ? 'call' : 'enquiry';
    try {
      const response = await fetch('/api/enquiries', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('success'); form.reset();
    } catch (err) { setError(err.message || 'We could not send your enquiry. Please try again.'); setStatus('idle'); }
  }
  if (status === 'success') return <div className="form-success" role="status"><div className="success-icon"><Check size={24}/></div><h3>Thank you.<br/>We have your {booking ? 'request' : 'enquiry'}.</h3><p>{booking ? 'Your request has been recorded. A time for the call is not confirmed yet.' : 'Your enquiry has been recorded. Thank you for telling us about the problem.'}</p><button className="text-button" onClick={() => setStatus('idle')}>Send another <ArrowUpRight size={16}/></button></div>;
  return <form className="enquiry-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <label><span>Name <i>*</i></span><input name="name" required autoComplete="name" maxLength={120} placeholder="Your name" /></label>
      <label><span>Work email <i>*</i></span><input name="email" type="email" required autoComplete="email" maxLength={254} placeholder="you@company.com" /></label>
      <label><span>Company</span><input name="company" autoComplete="organization" maxLength={160} placeholder="Company name" /></label>
      {booking ? <label><span>Preferred day or time</span><input name="preferredTime" maxLength={160} placeholder="e.g. weekday mornings, UK time" /></label> : <label><span>Service</span><select name="service" defaultValue=""><option value="">Not sure yet</option>{services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}</select></label>}
      {!booking && <><label><span>Project stage</span><select name="stage" defaultValue=""><option value="">Select a stage</option><option>Exploring an idea</option><option>Defining the problem</option><option>Ready to build</option><option>Improving an existing system</option></select></label><label><span>Budget range</span><select name="budget" defaultValue=""><option value="">Select a range</option><option>Not sure yet</option><option>Under £10k</option><option>£10k – £25k</option><option>£25k – £50k</option><option>£50k+</option></select></label></>}
      <label className="form-wide"><span>{booking ? 'What would you like to discuss?' : 'Tell us a little about the problem'} <i>*</i></span><textarea name="message" required minLength={10} maxLength={5000} rows="3" placeholder="A few sentences is plenty to start with." /></label>
      <label className="honeypot" aria-hidden="true">Leave this blank<input name="website" tabIndex="-1" autoComplete="off" /></label>
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <div className="form-submit"><button className="button button-dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : booking ? 'Request a discovery call' : 'Start the conversation'} <ArrowUpRight size={17}/></button><p>By sending this form, you agree that we can use your details to respond. <Link to="/privacy">Privacy policy</Link>.</p></div>
  </form>;
}
