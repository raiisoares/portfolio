import { Body, Container, Head, Hr, Html, Preview, Text } from '@react-email/components'

interface ContactEmailProps {
  name: string
}

export default function ContactEmail({ name }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Recebemos sua mensagem com sucesso.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Olá {name},</Text>
          <Text style={paragraph}>
            Obrigado pelo contato! Recebi sua mensagem e retornarei em breve. Agradeço a sua confiança e estou ansioso
            para conversar com você.
          </Text>

          <Text style={paragraph}>
            Atenciosamente,
            <br />
            Raí Soares
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Recife, Pernambuco, BR - {new Date().getFullYear()}</Text>
        </Container>
      </Body>
    </Html>
  )
}

ContactEmail.PreviewProps = {
  name: 'User',
} as ContactEmailProps

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
