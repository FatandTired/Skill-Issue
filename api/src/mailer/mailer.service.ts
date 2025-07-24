import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailerService {
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "",
        pass: process.env.EMAIL_PASS || "",
      },
    });
    return transporter;
  }
  async sendMail(to: string, subject: string, text: string) {
    const transporter = this.mailTransport();
    return await transporter.sendMail({
      from: '"no-reply" <no-reply@urskillissue.com>',
      to,
      subject,
      text,
    });
  }
}
