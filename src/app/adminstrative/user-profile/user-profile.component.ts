import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AddUComponent } from '../add-u/add-u.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {



  listUsers:any;
  constructor(private dialog:MatDialog,private api:ApiService) { }

  ngOnInit(): void {
 this.api.getUser().subscribe(data=>{
   this.listUsers=data;
   console.log(data);
 })
//console.log("Hi");
    
  }
  openDialog() {
    this.dialog.open(AddUComponent, {
     width:'40%'
    });
  }


}

  


