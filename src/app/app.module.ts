import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents, components } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    routingComponents,
    components
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
