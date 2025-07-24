import { Module } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { PortfolioController } from "./portfolio.controller";
import { MailerService } from "src/mailer/mailer.service";

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService, MailerService],
})
export class PortfolioModule {}
