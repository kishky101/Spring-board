import { MailtrapClient } from "mailtrap";

// For this example to work, you need to set up a sending domain,
// and obtain a token that is authorized to send from the domain
const TOKEN = "b70e35ae2b91a33f230ab652253e83c2";
const SENDER_EMAIL = "sender@yourdomain.com";
const RECIPIENT_EMAIL = "recipient@email.com";

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Mailtrap Sending!",
  })
  .then(console.log, console.error);