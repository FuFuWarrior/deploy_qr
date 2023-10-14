import { Controller, Get } from '@nestjs/common';
import { GenerateQrService } from './generate-qr.service';

@Controller('qr')
export class GenerateQrController {
  constructor(private generateQrService: GenerateQrService) {}

  @Get('generate')
  generate() {
    const links: string[] = [
      'https://cutt.ly/mwm6TGwJ',
      'https://cutt.ly/qwm6T91d',
      'https://cutt.ly/4wm6Yp3D',
      'https://cutt.ly/mwm6UTzD',
      'https://cutt.ly/Cwm6UCqV',
      'https://cutt.ly/nwm6ItBN',
      'https://fufuwarrior.github.io/deploy_qr/frontend/films',
    ];
    const count: number = Math.floor(Math.random() * links.length);
    return this.generateQrService.generateQR(links[count]);
  }
}
