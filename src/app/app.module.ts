import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents, components } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [				
    AppComponent,
    NavComponent,
    routingComponents,
    components,
      PagesComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
