import  nodemailer  from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

// inicio Cofig NodeMailer
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "802b4bdc58587b",
    pass: "7791b4121a0910",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Williams Dantas <lgp970dw@gmail.com>",
      subject,
      html: body,
    });
  }
}