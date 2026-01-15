import { Body, Controller, ForbiddenException, Post, Req, Res, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ReqUser } from './decorators/req-user.decorator';
import * as authInterfaces from "../auth/interfaces/auth.interface"
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';

const isProd = process.env.NODE_ENV === "production";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    async login(
        @Body() dto: LoginDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { accessToken, refreshToken, user } =
            await this.authService.login(dto);

        // set refresh tokens only in httpOnly cookie
        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return {
            access_token: accessToken,
            token_type: 'Bearer',
            user,
        };
    }

    @Post('signup')
    @UseInterceptors(SuccessResponseInterceptor)
    async signup(
        @Body() dto: SignupDto,
    ) {
        return this.authService.signup(dto);
    }

    @Post('refresh')
    async refresh(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {

        const oldRefreshToken = req.cookies['refresh_token'] as string | undefined;

        if (!oldRefreshToken) {
            throw new ForbiddenException('Failed to refresh session');
        }

        // Generate new tokens
        const { accessToken, refreshToken, user: refreshedUser } =
            await this.authService.refreshTokens(oldRefreshToken);

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return {
            access_token: accessToken,
            token_type: 'Bearer',
            user: refreshedUser,
        };
    }

    @Post('/logout')
    async logout(
        @ReqUser() me: authInterfaces.RequestUser,
        @Res({ passthrough: true }) res: Response,
    ) {
        const userId = me.sub;

        // clear refreshToken at DB
        await this.authService.logout(userId);

        //clear cookie in client
        res.clearCookie('refresh_token', {
            httpOnly: true,
            secure: isProd,
            sameSite: 'lax',
            path: '/',
        });

        return { success: true, message: 'Logged out successfully' };
    }

}
