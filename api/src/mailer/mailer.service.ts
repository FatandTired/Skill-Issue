import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get("EMAIL_HOST") || "",
      port: 587,
      secure: false,
      auth: {
        user: this.configService.get("EMAIL_USER") || "",
        pass: this.configService.get("EMAIL_PASS") || "",
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
