import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page-m',
  templateUrl: './page-m.component.html',
  styleUrls: ['./page-m.component.css']
})
export class PageMComponent implements OnInit {
  @ViewChild('page_a_block') pageABlock: ElementRef;
  @ViewChild('page_b_block') pageBBlock: ElementRef;
  @ViewChild('page_c_block') pageCBlock: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
