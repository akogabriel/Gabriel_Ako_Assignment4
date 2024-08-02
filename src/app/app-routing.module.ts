import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/personal-info', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'edit-info', component: EditInfoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
