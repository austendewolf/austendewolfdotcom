import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './components/splash/splash.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
