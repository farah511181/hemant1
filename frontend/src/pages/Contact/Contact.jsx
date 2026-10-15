
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHero from '../../components/common/PageHero'
import SectionHeading from '../../components/common/SectionHeading'

// EmailJS configuration
// EmailJS configuration from .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Wedding',
    date: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (sending) return

    setSending(true)

    try {
      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim(),
        service: form.service,
        date: form.date || 'Not specified',
        message: form.message.trim(),
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        { publicKey: PUBLIC_KEY }
      )

      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError(
        'Your message could not be sent. Please try again or contact us by email.'
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Tell Your Story"
        description="Whether it's a wedding, a family session, or an editorial project — we'd love to hear from you."
      />

      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Contact Information */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in Touch"
              title="Start a Conversation"
              description="Fill out the form and we'll get back to you within 24 hours with availability and pricing tailored to your vision."
            />

            <div className="mt-10 space-y-6">
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Email
                </h4>
                <p className="text-lg text-espresso">
                  hemantsharmaphotography7744@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Phone
                </h4>
                <p className="text-lg text-espresso">
                  +91 7744033650
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Studio
                </h4>
                <p className="text-lg text-espresso">
                  Studio Portrait by Hemant, New Delhi, India
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Hours
                </h4>
                <p className="text-lg text-espresso">
                  Mon – Sat, 9am – 7pm
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-nude p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-mocha text-ivory flex items-center justify-center text-2xl mb-6">
                  ✓
                </div>

                <h3 className="font-display text-3xl text-espresso mb-3">
                  Thank You!
                </h3>

                <p className="text-taupe max-w-sm">
                  Your message has been sent successfully. We'll be in touch
                  within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                    placeholder=""
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                    placeholder=""
                  />
                </div>

                {/* Service */}
               
{/* Service */}
<div>
  <label
    htmlFor="contact-service"
    className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2"> Service
  </label>
  <select
    id="contact-service"
    name="service"
    value={form.service}
    onChange={handleChange}
    required
    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
  >
    <option value="Wedding Photography">Wedding Photography</option>
    <option value="Pre-Wedding Photography">Pre-Wedding Photography</option>
    <option value="Post-Wedding Photography">Post-Wedding Photography</option>
    <option value="Bridal Portraits">Bridal Portraits</option>
    <option value="Groom Portraits">Groom Portraits</option>
    <option value="Candid Photography">Candid Photography</option>
    <option value="Maternity Photography">Maternity Photography</option>
    <option value="Newborn Photography">Newborn Photography</option>
    <option value="Family Photography">Family Photography</option>
    <option value="Fashion Photography">Fashion Photography</option>
    <option value="Studio Portraits">Studio Portraits</option>
    <option value="Wedding Films">Wedding Films</option>
    <option value="Other">Other</option>
  </select>
</div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="contact-date"
                    className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p role="alert" className="text-red-700 text-sm">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-mocha text-ivory px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}