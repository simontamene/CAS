import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  image:string="assets/fpc.png";
  ol:string="hhiu"
  list=true;
  tog=false;
  hideSideMenu$:Observable<boolean>;
  @ViewChild('scroll') scroll:ElementRef;

  constructor(private fb:FormBuilder,private responsive:BreakpointObserver) { }
 
  ngOnInit(): void {
    this.login=this.fb.group({'username':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required])})
      
    this.hideSideMenu$=this.responsive.observe([Breakpoints.Handset,Breakpoints.HandsetPortrait,Breakpoints.HandsetPortrait,Breakpoints.Tablet,
    Breakpoints.XSmall,Breakpoints.Medium]).
    pipe(map(result => result.matches))

    // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    // .pipe(
    //   map(result => result.matches)
    // );
   
  }
  ho(){
    
    //var element = document.getElementById("hh");
    this.scroll.nativeElement.scrollTop=0;
    }
    about(){
      this.scroll.nativeElement.scrollTop=this.scroll.nativeElement.scrollHeight;
    }

}
function matches(arg0: any, matches: any): Observable<boolean> {
  throw new Error('Function not implemented.');
}

