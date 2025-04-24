import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-insert',
  standalone: false,
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css',
  providers:[EmployeeService]
})
export class InsertComponent {

  constructor(private ps:EmployeeService){}

  insertDetails(insert:any)
    {
      this.ps.insertData(insert.value).subscribe();
    }

}
