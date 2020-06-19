import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './components/splash/splash.component';
import {MenuComponent} from './components/menu-component/menu.component';
import {SoftwareComponent} from './components/software/software.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ConsultingComponent} from './components/consulting/consulting.component';
import {BlogComponent} from './components/blog/blog.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'consulting',
    component: ConsultingComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'links',
    component: MenuComponent
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
