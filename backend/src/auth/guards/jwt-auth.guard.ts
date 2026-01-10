import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractTokenFromHeaderOrCookie(request);

        console.log("token", token)

        if (!token) {
            throw new UnauthorizedException("Token is not provided")
        }

        try {
            const payload = await this.jwtService.verifyAsync(token);
            request.user = {
                sub: payload.sub,
                email: payload.email,
                name: payload.name,
                role: payload.role,
            };

            return true;
        } catch (error: any) {
            console.log("JWT verify error:", error.message);
            throw new UnauthorizedException("Invalid token")
        }
    }

    private extractTokenFromHeaderOrCookie(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === "Bearer" ? token : undefined;

    }

}