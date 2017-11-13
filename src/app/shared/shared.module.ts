import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule, TreeNode, BreadcrumbModule, MenuItem } from 'primeng/primeng';
import { NodeService } from './node.service';
import 'rxjs/RX';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    TreeModule,
    BreadcrumbModule
  ],
  exports: [
    TreeModule,
    BreadcrumbModule
  ],
  declarations: [],
  providers: [NodeService]
})
export class SharedModule { }
