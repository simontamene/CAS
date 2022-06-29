import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-u',
  templateUrl: './add-u.component.html',
  styleUrls: ['./add-u.component.scss']
})
export class AddUComponent implements OnInit {
 gender=['ወንድ','ሰት'];
 public showPassword: boolean = false;
 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 us:FormGroup;
  constructor(private fb:FormBuilder,private api:ApiService, private diaref:MatDialogRef<AddUComponent>) { }

  ngOnInit(): void {
    this.us=this.fb.group({
      name:['',Validators.required],
      mname:['',Validators.required],
      lname:['',Validators.required],
      gender:['',Validators.required],
      level:['',Validators.required],
      tel:['',Validators.required],
      email:['',Validators.required],
      pass:['',Validators.required],
      date:['',Validators.required]
    })
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  addUser(){
    if(this.us.valid){
   this.api.postUser(this.us.value).subscribe(
     {next:(res)=>{
       alert("Sucessfully");
       this.us.reset();
       this.diaref.close('save');
     },error:()=>{
       alert("Error Occur")
     }}
   )
    }
  }

}
