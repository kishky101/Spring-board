//const { MailtrapClient } = require("mailtrap");
import {MailtrapClient} from 'mailtrap'
export function SendMail() {

  //const { MailtrapClient } = require("mailtrap");

  const TOKEN = "8d37665baaa3169249096cadacb8343e";
  const ENDPOINT = "https://send.api.mailtrap.io/";
  
  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });
  
  const sender = {
    email: "mailtrap@springboardlanguageacademy.com",
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: "kishky.101@gmail.com",
    }
  ];
  
  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
    .then(console.log, console.error);
}