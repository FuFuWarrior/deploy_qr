import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class GenerateQrService {
  // With async/await
  async generateQR(text: string) {
    return { qrCode: await QRCode.toDataURL(text) };
  }
}
