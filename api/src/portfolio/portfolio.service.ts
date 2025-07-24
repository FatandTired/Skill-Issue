import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { contactForm, repo } from "./dto/portfolio.dto";

import axios from "axios";
import * as cheerio from "cheerio";
import { Request } from "express";
import { MailerService } from "src/mailer/mailer.service";

@Injectable()
export class PortfolioService {
  constructor(private readonly mailerService: MailerService) {}
  async getGithubProjects(): Promise<repo[]> {
    const response: repo[] = [];
    const request = await axios.get("https://api.github.com/user/repos", {
      headers: { Authorization: "Bearer " + process.env.GITHUB_TOKEN },
    });

    if (request.status === 200) {
      for (const repository of request.data as {
        name: string;
        private: boolean;
        topics: string[];
        description: string;
      }[]) {
        const name = repository.name;
        const isPrivate = repository.private;
        const tags = repository.topics;
        const description = repository.description;
        const readme = await axios.get(
          `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${name}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.html+json",
              Authorization: "Bearer " + process.env.GITHUB_TOKEN,
            },
          },
        );
        if (readme.status === 200) {
          const $ = cheerio.load(readme.data as string);
          const imageUrl = $("img").first().attr("src") || "";
          response.push({
            name: name.replace(/-/g, " "),
            imageUrl,
            tags,
            description,
            isPrivate,
          });
        } else {
          throw new InternalServerErrorException({
            message: "Couldn't get repository readme",
          });
        }
      }
    } else {
      throw new InternalServerErrorException({
        message: "Couldn't get user repositories",
      });
    }
    return response;
  }
  async contact(
    req: Request,
    formData: contactForm,
  ): Promise<{ message: string }> {
    const { name, email, message } = formData;
    await this.mailerService.sendMail(
      process.env.CONTACT_EMAIL || "",
      `New contact form submission: ${name}`,
      `Email: ${email}\nMessage: ${message}`,
    );
    return { message: "Contact form submitted successfully!" };
  }
}
