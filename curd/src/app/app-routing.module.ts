import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'view/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
