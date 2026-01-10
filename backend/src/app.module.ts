import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import { AllExceptionsFilter } from './common/filters/all-expceptions.filter';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		JwtModule.register({ global: true, secret: process.env.JWT_ACCESS_SECRET, signOptions: { expiresIn: '1h' } }),
		ParcelsModule,
		DatabaseModule, AuthModule,
		UsersModule],
	controllers: [AppController],
	providers: [AppService, {
		provide: APP_FILTER,
		useClass: AllExceptionsFilter,
	}],
})
export class AppModule { }
