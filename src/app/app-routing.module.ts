import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaComponent } from './escola/escola.component';
import { LoginComponent } from './login/login.component';
import { TurmaComponent } from './turma/turma.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'escola', component: EscolaComponent},
  {path: 'turmas', component: TurmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
