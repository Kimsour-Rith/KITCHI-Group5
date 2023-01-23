import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SiginComponent } from './auth/sigin/sigin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { IonicModule } from '@ionic/angular';
import { ShopComponent } from './user/shop/shop.component';
import { ContactComponent } from './user/contact/contact.component';
import { AboutComponent } from './user/about/about.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './user/footer/footer.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SiginComponent,
    SignupComponent,
    NavbarComponent,
    ProfileComponent,
    HomepageComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent,
    UserComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    NgxNavbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
