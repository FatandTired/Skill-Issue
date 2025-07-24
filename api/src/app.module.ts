import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join, resolve } from "path";
import { PortfolioModule } from "./portfolio/portfolio.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../", "client", "dist"),
    }),
    PortfolioModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, "../../", ".env"),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
