import { Module } from '@nestjs/common';
import { ParcelsController } from './parcels.controller';
import { ParcelsService } from './parcels.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [DatabaseModule, AuthModule],
	controllers: [ParcelsController],
	providers: [ParcelsService],
	exports: [ParcelsService],
})
export class ParcelsModule { }
