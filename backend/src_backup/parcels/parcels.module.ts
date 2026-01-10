import { Module } from '@nestjs/common';
import { ParcelsController } from './parcels.controller';
import { ParcelsService } from './parcels.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [ParcelsController],
	providers: [ParcelsService],
})
export class ParcelsModule { }
