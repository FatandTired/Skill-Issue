import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { Request } from "express";
import { contactForm } from "./dto/portfolio.dto";
import { Throttle } from "@nestjs/throttler";

@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get("projects")
  getGithubProjects() {
    return this.portfolioService.getGithubProjects();
  }
  @Throttle({ default: { limit: 1, ttl: 60000 * 10 } })
  @Post("contact")
  async contact(@Req() req: Request, @Body() formData: contactForm) {
    return await this.portfolioService.contact(req, formData);
  }
}
