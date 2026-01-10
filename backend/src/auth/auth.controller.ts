import { Body, Controller, ForbiddenException, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ReqUser } from './decorators/req-user.decorator';
import * as authInterfaces from "../auth/interfaces/auth.interface"

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
        });

        return {
            access_token: accessToken,
            token_type: 'Bearer',
            user,
        };
    }

    @Post('signup')
    async signup(
        @Body() dto: SignupDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { accessToken, refreshToken, user } =
            await this.authService.signup(dto);

        // set refresh tokens only in HttpOnly cookie
        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: 'lax',
            path: '/',
        });

        return {
            access_token: accessToken,
            token_type: 'Bearer',
            user,
        };
    }

    @Post('refresh')
    async refresh(
        @Req() req: authInterfaces.RequestWithRefreshToken,
        @ReqUser() me: authInterfaces.RequestUser,
        @Res({ passthrough: true }) res: Response,
    ) {
        const oldRT = req.user.refreshToken;

        if (!oldRT) {
            throw new ForbiddenException('Failed to refresh section');
        }

        // Generate new tokens
        const { accessToken, refreshToken } =
            await this.authService.refreshTokens(me.sub, oldRT);

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: 'lax',
            path: '/',
        });

        return { accessToken };
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
