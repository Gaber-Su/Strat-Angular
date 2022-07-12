import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'portofolio', component:PortofolioComponent},
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactComponent},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
