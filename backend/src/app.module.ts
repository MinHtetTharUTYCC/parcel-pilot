import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import { AllExceptionsFilter } from './common/filters/all-expceptions.filter';

@Module({
	imports: [ParcelsModule],
	controllers: [AppController],
	providers: [AppService,{
		provide: APP_FILTER,
		useClass: AllExceptionsFilter,
	}],
})
export class AppModule {}
