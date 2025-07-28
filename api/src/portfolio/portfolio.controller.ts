import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { Request } from "express";
import { contactForm } from "./dto/portfolio.dto";

@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get("projects")
  getGithubProjects() {
    return this.portfolioService.getGithubProjects();
  }
  @Post("contact")
  async contact(@Req() req: Request, @Body() formData: contactForm) {
    return await this.portfolioService.contact(req, formData);
  }
}
