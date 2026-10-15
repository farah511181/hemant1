
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendContactEmail(form) {
  const templateParams = {
    name: form.name.trim(),
    email: form.email.trim(),
    service: form.service,
    date: form.date || 'Not specified',
    message: form.message.trim(),
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    { publicKey: PUBLIC_KEY }
  )
}