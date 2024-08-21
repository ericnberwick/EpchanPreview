// server/api/send.ts
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the event handler for sending emails
export default defineEventHandler(async (event) => {

  
  try {
    const body = await readBody(event);
    const { email, message, name } = body;
    // Send an email using the Resend API
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['nb15galle@gmail.com'],
      subject: 'Message from website',
      html: `<p>${message}</p><br><br>Sent From<br>${email}`,
    });
    return data;
  } catch (error) {
    return { error };
  }
});