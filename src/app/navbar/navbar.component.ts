import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroes$ : any;
  routes$: any;
  scroll: number;

  constructor( private route: ActivatedRoute) {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.scroll = window.pageYOffset;
    console.log(this.scroll);
  }

  ngOnInit(): void {
    console.log( window.pageYOffset)
  }

  moveToBlock(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
}
