import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
  { path: '', component: DashboradComponent },
  {
    path: 'acceuil',
    loadChildren: () =>
      import('./accueil/accueil.module').then((m) => m.AccueilModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
