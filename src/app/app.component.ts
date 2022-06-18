import { AUTO_STYLE } from '@angular/animations';
import { Component, ElementRef, ViewChild, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

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
  @ViewChild('scroll') scroll:ElementRef;

  ho(){
    
  //var element = document.getElementById("hh");
  this.scroll.nativeElement.scrollTop=0;
  }
  about(){
    this.scroll.nativeElement.scrollTop=this.scroll.nativeElement.scrollHeight;
  }
}
