import {Body, Container, Head, Hr, Html, Preview, Text,} from "@react-email/components";
import * as React from "react";

interface NotificationEmailProps {
  name: string
  email: string
  message: string
}

export default function NotificationEmail({name, email, message}: NotificationEmailProps) {
  return (
    <Html>
      <Head/>
      <Preview>
        Alguém entrou em contato com você!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Um usuário entrou em contato via portifólio.</Text>
          <Text style={paragraph}>
            Nome: {name} | Email: {email}
          </Text>
          <Text style={paragraph}>
            Mensagem: {message}
          </Text>
          <Hr style={hr}/>
          <Text style={footer}>
            Recife, Pernambuco, BR - {new Date().getFullYear()}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

NotificationEmail.PreviewProps = {
  name: "User",
  email: "email@email.com",
  message: "Um usuário entrou em contato via portifólio",
} as NotificationEmailProps

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
