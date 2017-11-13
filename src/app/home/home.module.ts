import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './controls/menu/menu.component';
import { ListComponent } from './controls/list/list.component';
import { LocalaizerComponent } from './home/localaizer/localaizer.component';
import { LocalizationEditorComponent } from './home/localaizer/localization-editor/localization-editor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, LocalaizerComponent, LocalizationEditorComponent, MenuComponent, ListComponent]
})
export class HomeModule { }
