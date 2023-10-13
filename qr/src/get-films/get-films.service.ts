import { Injectable } from '@nestjs/common';
import axios from 'axios';
// 'https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4'
@Injectable()
export class GetFilmsService {

  async getFilms() {
    try {
      const value = await axios.get(
        'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON',
      );
      // TODO add interface
      const shuffled: any = value.data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      const sliced: any = shuffled.slice(0, 10);
      return { data: sliced };
    } catch (error) {
      throw new Error('something went wrong');
    }
  }
}
