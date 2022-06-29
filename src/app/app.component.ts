import { AUTO_STYLE } from '@angular/animations';
import { Component, ElementRef, ViewChild, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  login:FormGroup;
  title = 'CAS';
  image:string="assets/fpc.png";
  ol:string="hhiu"
   aaa:any;
  @ViewChild('scroll') scroll:ElementRef;
  constructor(private api:ApiService){
 
    }
  ngOnInit(): void{
    this.api.getUser().subscribe(data=>{
      this.aaa=data;
    })
    //console.log("hikhkuh")
  }

  
}
