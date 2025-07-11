
import { Resend } from 'resend';

console.log('Resend API Key:', process.env.GATSBY_RESENDAPIKEY); // Debugging line to check if the key is loaded

const resend = new Resend("re_8vosSX4Y_JSxQuD79WPf1HeLsAsddq6aK");

export default async function sendEmail(content) {
  await resend.emails.send({
    from: 'Anonymous <onboarding@resend.dev>', // a test sender allowed by Resend
    to: "davisena145@gmail.com",
    subject: 'VAMOS ARGENTINA',
    text: content,
  });
}