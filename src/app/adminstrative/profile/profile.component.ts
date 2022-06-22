import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  image:string="assets/no.jpg";
  profileForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.profileForm = fb.group({'name':['',Validators.required],'middlename':new FormControl(),'email':['',[Validators.required]],
  'lastname':new FormControl(),'gender':new FormControl(),'bornDate':new FormControl(),
'mareg':new FormControl(),'position':new FormControl(),'username':new FormControl(),
'password':new FormControl()})
   }

  ngOnInit(): void {
   
  }
  ph(event:any){
if(event.target.files){
var reader = new FileReader()
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
  this.image = event.target.result
}
}
  }

}
