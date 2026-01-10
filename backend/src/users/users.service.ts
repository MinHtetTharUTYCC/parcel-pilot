import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, UserRole } from '@prisma/client';
import { LoginDto } from 'src/auth/dto/login.dto';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) { }

    async userExistsByMail(email: string): Promise<boolean> {
        const count = await this.databaseService.user.count({
            where: {
                email,
            },
        });
        return count === 1;
    }

    async createNewUser(dto: SignupDto) {
        try {
            return await this.databaseService.user.create({
                data: { ...dto },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                },
            });
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002'
            ) {
                // prisma unique constriant
                throw new BadRequestException('Email already exists');
            }
            throw new BadRequestException('Failed to create user');
        }
    }

    //for login
    async validateUser(dto: LoginDto) {
        const user = await this.databaseService.user.findUnique({
            where: { email: dto.email },
            select: { id: true, name: true, email: true, password: true, role: true },
        });

        if (!user) throw new NotFoundException('User Not Found');

        const isPwdValid = await bcrypt.compare(
            dto.password,
            user.password,
        );
        if (!isPwdValid) throw new BadRequestException('Invalid credentials');

        this.checkAccountStatus(user.role);

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
    }

    // for refresh
    async getUserWithRefreshToken(userId: string) {
        const user = await this.databaseService.user.findUnique({
            where: { id: userId },
            select: { id: true, name: true, refreshToken: true, email: true, role: true },
        });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }
    // for saving new refresh token
    async updateRefreshToken(userId: string, hashedRT: string) {
        await this.databaseService.user.update({
            where: { id: userId },
            data: {
                refreshToken: hashedRT,
            },
        });
    }

    async updateLastLogin(userId: string) {
        return this.databaseService.user.update({
            where: { id: userId },
            data: {
                lastLoginAt: new Date(),
            }
        });
    }

    // For log out
    async deleteRefreshToken(userId: string) {
        await this.databaseService.user.update({
            where: { id: userId },
            data: {
                refreshToken: null,
            },
        });
    }

    // get user info
    async getMe(userId: string) {
        const user = await this.databaseService.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });

        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    private checkAccountStatus(role: UserRole) {
        switch (role) {
            case "RESIDENT_PENDING":
                throw new ForbiddenException("Account pending approval. You will be notified once approved");
        }

        // TODO: Ban or reject
    }
}
