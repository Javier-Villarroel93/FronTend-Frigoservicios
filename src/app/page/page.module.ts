import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatSidenavModule
  ]
})
export class PageModule { }
