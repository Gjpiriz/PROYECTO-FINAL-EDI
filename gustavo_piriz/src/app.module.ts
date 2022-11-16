import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZapatillasController } from './zapatillas/zapatillas.controller';
import { ZapatillasService } from './zapatillas/zapatillas.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [],
  controllers: [AppController, ZapatillasController, EmployeeController],
  providers: [AppService, ZapatillasService, EmployeeService],
})
export class AppModule {}
