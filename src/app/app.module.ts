import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents, components } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingInterceptor } from './loading.Interceptor';
import { NgbdModalBasiccc } from './modal-basic/modal-basic';
import { NgbdModalContent, NgbdModalComponent } from './modal-component/modal-component';

@NgModule({
  declarations: [				
    AppComponent,
    NavComponent,
    routingComponents,
    components,
      PagesComponent,
      FooterComponent,
      NgbdModalBasiccc,
      NgbdModalContent,
      NgbdModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents: [
    NgbdModalContent
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
