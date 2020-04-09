import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { GeneralFollowComponent } from './components/general-follow/general-follow.component';
import { MyFollowUpComponent } from './components/my-follow-up/my-follow-up.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alerts', component: AlertsComponent},
  {path: 'general', component: GeneralFollowComponent},
  {path: 'followup', component: MyFollowUpComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
