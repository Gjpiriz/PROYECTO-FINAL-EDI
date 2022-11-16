import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    obtenerEmpleado(): string {
     return 'empleado 5'   
    }
    crearEmpleado(): string  {
        return 'empleado creado ok'
    }
}
