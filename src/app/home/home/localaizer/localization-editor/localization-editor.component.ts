import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-localization-editor',
  templateUrl: './localization-editor.component.html',
  styleUrls: ['./localization-editor.component.scss']
})
export class LocalizationEditorComponent implements OnInit {
  private items: MenuItem[];
  @Input() selectedItem: any;
  constructor() {}

  ngOnInit() {
      }

  getBreadcrumb() {
    if (this.selectedItem.node.children.lenght < 1) {
      this.items = this.selectedItem.node;
    } else {
      this.items = this.selectedItem.node.children;
    }
  }

  saveRecord() {
    console.log('save succes');
  }

}