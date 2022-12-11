import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
