import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details';

export const routes: Routes = [
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' },
  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  { path: '**', redirectTo: '/suppliers' }
];