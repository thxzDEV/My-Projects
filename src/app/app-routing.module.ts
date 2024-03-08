import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';



const routes: Routes = [
  {path: '',component: FirstPageComponent},
  {path: 'sobre',component: SobreComponent},
  {path: 'projetos',component: ProjetosComponent},
  {path: 'contato',component: ContatoComponent}
];


@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
