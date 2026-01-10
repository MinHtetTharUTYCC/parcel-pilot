import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import { AllExceptionsFilter } from './common/filters/all-expceptions.filter';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [ParcelsModule, DatabaseModule, AuthModule],
	controllers: [AppController],
	providers: [AppService,{
		provide: APP_FILTER,
		useClass: AllExceptionsFilter,
	}],
})
export class AppModule {}
