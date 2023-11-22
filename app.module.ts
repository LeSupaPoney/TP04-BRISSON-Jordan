import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { RootComponent } from './root/root.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { CatalogueModule } from './catalogue/catalogue.module';

import { PanierState } from './store/panier.state';

@NgModule({
  imports: [BrowserModule, CatalogueModule, NgxsModule.forRoot([PanierState])],
  declarations: [RootComponent, TetiereComponent, FooterComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
