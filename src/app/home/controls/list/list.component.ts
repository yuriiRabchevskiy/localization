import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from '../../../shared/node.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  files: Observable<TreeNode[]>;
  data: TreeNode[];
  selectedFiles: TreeNode[];

  @Output() iClick: EventEmitter<any> = new EventEmitter();
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.doGet();
  }

  doGet() {
    this.files = this.nodeService.getFiles();
    this.files.subscribe(data => this.data = data);
  }

  selectedItem(event) {
    this.iClick.emit(event);
  }

}
