import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './auth/sigin/sigin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { ShopComponent } from './user/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {path: 'homepage', component: HomepageComponent},
  {path: 'signin', component: SiginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
