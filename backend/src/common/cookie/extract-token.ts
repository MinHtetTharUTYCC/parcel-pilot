import { Request } from "express";

export function extractTokenFromHeaderOrCookie(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === "Bearer" ? token : undefined;

}