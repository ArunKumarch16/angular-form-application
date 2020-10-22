import { Component, OnInit,ViewChild } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService) { } 

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'country', 'Agreed'];
  
  searchKey: string;
  
  ngOnInit() {

    const mockdata = [{fullName: "Arun Kumar",
  email: "test@gmail.com",
country: "India",
Agreed: "yes"}]
    
   this.listData = new MatTableDataSource(mockdata);
       
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
