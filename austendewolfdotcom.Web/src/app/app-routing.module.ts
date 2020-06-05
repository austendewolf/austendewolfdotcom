import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './components/splash/splash.component';
import {MenuComponent} from './components/menu-component/menu.component';
import {RootComponent} from './components/root/root.component';


const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'root',
    component: RootComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
