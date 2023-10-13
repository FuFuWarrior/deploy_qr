import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateQrModule } from './generate-qr/generate-qr.module';
import { GetFilmsModule } from './get-films/get-films.module';

@Module({
  imports: [GenerateQrModule, GetFilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
