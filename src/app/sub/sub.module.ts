import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { IntroComponent } from './intro/intro.component';
import { SUB_ROUTING } from './sub.routing';

@NgModule({
  declarations: [
    HomeAccountComponent,
    AddAccountComponent,
    ItemAccountComponent,
    IntroComponent,
  ],
  imports: [CommonModule, SUB_ROUTING],
})
export class SubModule {}
