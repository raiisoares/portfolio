import {Resend} from "resend"
import ContactEmail from "@/components/emails/contact-email"
import NotificationEmail from "@/components/emails/notification-email"

const resend = new Resend(process.env.RESEND_API_KEY)
const myEmail = 'raisoares.dev@gmail.com'
const contact = 'contact@raisoares.com'
const emailSubject = 'Mensagem Recebida'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {name, email, message} = body

    await resend.emails.send({
      from: contact,
      to: email,
      subject: emailSubject,
      react: ContactEmail({name}),
    })

    await resend.emails.send({
      from: contact,
      to: myEmail,
      subject: emailSubject,
      react: NotificationEmail({name, email, message}),
    })

    return Response.json(
      {message: 'Mensagem enviada com sucesso'},
      {status: 200},
    )
  } catch {
    return Response.json(
      {message: 'Erro ao enviar mensagem'},
      {status: 500},
    )
  }

}