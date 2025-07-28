import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class IpGuard implements CanActivate {
  private readonly allowedIps = ["127.0.0.1", "::1"];

  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const ip: string | undefined =
      request.ip || request.connection.remoteAddress;
    if (!ip) {
      return false;
    }
    const normalizedIp = ip.replace("::ffff:", "");

    return this.allowedIps.includes(normalizedIp);
  }
}
