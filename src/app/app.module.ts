import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { DirectComponent } from './direct/direct.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './directives/custom-dir.directive';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { GestionCandidatsService } from './service/gestion-candidats.service';
import { RecruesComponent } from './recrues/recrues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PLB_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    HomeAccountComponent,
    AddAccountComponent,
    ItemAccountComponent,
    DirectComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruesComponent,
    AccueilComponent,
    NavbarComponent,
    InfosComponent,
  ],
  imports: [BrowserModule, FormsModule, PLB_ROUTING],
  providers: [GestionCandidatsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
