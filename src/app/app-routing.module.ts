import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOfficeComponent } from './offices/add-office/add-office.component';
import { EditOfficeComponent } from './offices/edit-office/edit-office.component';

import { OfficesComponent } from './offices/offices.component';
import { ViewOfficeComponent } from './offices/view-office/view-office.component';

const routes: Routes = [
  { path: '', redirectTo: '/offices', pathMatch: 'full' },
  { path: 'offices', component: OfficesComponent },
  { path: 'add-office', component: AddOfficeComponent },
  { path: 'office/:id', component: ViewOfficeComponent },
  { path: 'edit-office/:id', component: EditOfficeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
