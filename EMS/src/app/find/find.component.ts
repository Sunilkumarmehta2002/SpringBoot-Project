import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-find',
  standalone: false,
  templateUrl: './find.component.html',
  styleUrl: './find.component.css',
  providers:[EmployeeService]
})
export class FindComponent {

  constructor(private ps: EmployeeService){}

  emp:any;
  search(eid:any)
  {
    
    this.ps.searchID(eid.value.id).subscribe((resp:any)=>{this.emp=resp});
  }
}
