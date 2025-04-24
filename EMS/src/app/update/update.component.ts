import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  providers:[EmployeeService]
})
export class UpdateComponent {

  constructor(private ps:EmployeeService){}

  UpdateDetails(update:any)
  {
    this.ps.updateData(update.value).subscribe();
  }
}



