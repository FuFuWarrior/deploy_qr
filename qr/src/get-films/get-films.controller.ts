import { Controller, Get, Req } from '@nestjs/common';
import { GetFilmsService } from './get-films.service';

@Controller('films')
export class GetFilmsController {
  constructor(private getFilmsService: GetFilmsService) {}

  @Get('get-films')
  generate() {
    return this.getFilmsService.getFilms();
  }
}
