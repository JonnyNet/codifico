import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'game',
    loadChildren: () => import('./features/tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./features/table-form/table-form.module').then(m => m.TableFormModule),
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
