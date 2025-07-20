import { Resend } from 'resend'
import ContactEmail from '@/components/emails/contact-email'
import NotificationEmail from '@/components/emails/notification-email'

const resend = new Resend(process.env.RESEND_API_KEY)
const myEmail = process.env.OWNER_EMAIL || 'default-owner@example.com'
const contact = process.env.DOMAIN_EMAIL || 'default-domain@example.com'
const subject = 'Mensagem Recebida'

export async function sendEmails({ name, email, message }: { name: string; email: string; message: string }) {
  await Promise.all([
    resend.emails.send({
      from: contact,
      to: email,
      subject,
      react: ContactEmail({ name }),
    }),
    resend.emails.send({
      from: contact,
      to: myEmail,
      subject,
      react: NotificationEmail({ name, email, message }),
    }),
  ])
}
