import { Module } from '@nestjs/common';
import { GetFilmsService } from './get-films.service';
import { GetFilmsController } from './get-films.controller';

@Module({
  providers: [GetFilmsService],
  controllers: [GetFilmsController]
})
export class GetFilmsModule {}
