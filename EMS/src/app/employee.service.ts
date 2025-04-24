import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  url1="http://localhost:9090/employees"

  url2="http://localhost:9090/save"

   url3="http://localhost:9090/delete"

    url4="http://localhost:9090/delete"

     url5="http://localhost:9090/update"

     url6="http://localhost:9090/emp"

  getEmployees()
  {
    return this.http.get(this.url1);
  }

  insertData(insert:any)
  {
    alert("Employee added.");
    return this.http.post(this.url2,insert);
  }

  DeleteData(delete1:any)
  {
    alert("Employee Deleted.");
    return this.http.delete(this.url3+"/"+delete1.id);
  }

  deleteEmp(id:any)
  {
    alert("Employee having ID "+id+ " has been deleted from records.");
    return this.http.delete(this.url4+"/"+id);
  }


  updateData(update:any)
  {
    alert("Employee Update successful.");
    return this.http.post(this.url5,update);
   
  }

  searchID(eid:any)
  {
    return this.http.get(this.url6+"/"+eid);
  }


  
  // Export employees to Excel
  exportToExcel(employees: any[]): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(employees);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'employees');
  }

  // Save Excel file
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
  }

}



