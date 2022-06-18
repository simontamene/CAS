import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-adminstrative',
  templateUrl: './adminstrative.component.html',
  styleUrls: ['./adminstrative.component.scss']
})
export class AdminstrativeComponent implements OnInit {
  image:string="assets/fpc.png";
  @ViewChild(MatSidenav) sidnav:MatSidenav
  constructor(private observer:BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:600px)']).subscribe((res)=>{
      if(res.matches){
        this.sidnav.mode='over';
        this.sidnav.close();
      }
      else{
        this.sidnav.mode='side';
        this.sidnav.open();
      }
    })
  }

}
