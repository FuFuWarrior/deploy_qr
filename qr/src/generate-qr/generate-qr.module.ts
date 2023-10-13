import { Module } from '@nestjs/common';
import { GenerateQrService } from './generate-qr.service';
import { GenerateQrController } from './generate-qr.controller';

@Module({
  providers: [GenerateQrService],
  controllers: [GenerateQrController]
})
export class GenerateQrModule {}
