import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
  providers:[EmployeeService]
})
export class ViewComponent {

  emp:any;
  constructor(private ps:EmployeeService)
  {
    this.getAll();
  }

  getAll()
  {
    this.ps.getEmployees().subscribe(
    (resp:any)=>
    {
      this.emp=resp;
    });
  }

  delete(id:any)
  {
    this.ps.deleteEmp(id).subscribe(()=>{this.getAll()});
  }

  exportToExcel() {
    this.ps.exportToExcel(this.emp);
  }
}

