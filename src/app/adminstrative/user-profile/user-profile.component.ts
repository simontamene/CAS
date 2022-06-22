import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUComponent } from '../add-u/add-u.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AddUComponent, {
     width:'40%'
    });
  }
}

  


