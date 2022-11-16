import { AppService } from './app.service';
import { Controller, Get,Post } from '@nestjs/common';


@Controller('api')
export class AppController{

 
  
 constructor(private readonly appService: AppService) {}

  @Get()
  getZapatillas():string {
    return this.appService.getZapatillas();
  }
}

  






