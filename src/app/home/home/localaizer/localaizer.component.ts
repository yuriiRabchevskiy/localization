import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localaizer',
  templateUrl: './localaizer.component.html',
  styleUrls: ['./localaizer.component.scss']
})
export class LocalaizerComponent implements OnInit {
    item: any;
  constructor() { }

  ngOnInit() {
  }

  selectNode(event) {
      this.item = event;
  }

}