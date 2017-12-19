import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { ContactModule } from './contact/contact.module';
import { ContactRoutingModule } from './contact/contact-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './products/product-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    ContactModule,
    AboutModule,
    AboutRoutingModule,
    LoginModule,
    ProductRoutingModule,
    ContactRoutingModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ProductsComponent],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
