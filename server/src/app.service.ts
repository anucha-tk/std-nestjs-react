import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [
      { title: 'title A from server', body: 'body A from server' },
      { title: 'title B from server', body: 'body B from server' },
    ];
  }
}
