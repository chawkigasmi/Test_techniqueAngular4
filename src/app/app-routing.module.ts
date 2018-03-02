import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 import {ArticlesComponent} from './articles/articles.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'articles', component: ArticlesComponent },

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}