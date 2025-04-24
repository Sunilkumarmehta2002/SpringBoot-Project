import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private ps:EmployeeService){}

  DeleteEmp(delete1:any)
  {
    this.ps.DeleteData(delete1.value).subscribe();
  }
}
