import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit {
    
  list:any;
  constructor(private apii:ApiService) { }

  ngOnInit(): void {
 this.getData();

  }
  getData(){
    this.apii.getSalary().subscribe((data)=>{
      this.list=data;
      console.log(data);
        },(err)=>{
          console.log("eror tekstoal guys "+err)
        })    
  }

}
