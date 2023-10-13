import { Controller, Get } from '@nestjs/common';
import { GenerateQrService } from './generate-qr.service';

@Controller('qr')
export class GenerateQrController {
  constructor(private generateQrService: GenerateQrService) {}

  @Get('generate')
  generate() {
    const links: string[] = [
      'https://cutt.ly/9wmNGvt0',
      'https://cutt.ly/mwmNG6O0',
      'https://cutt.ly/OwmNHj2G',
      'https://cutt.ly/uwm86CFa',
      'https://cutt.ly/1wm4qbsg',
      'https://cutt.ly/dwm4qZrK',
      'https://fufuwarrior.github.io/qr_generator/frontend/films',
    ];
    const count: number = Math.floor(Math.random() * links.length);
    return this.generateQrService.generateQR(links[count]);
  }
}
