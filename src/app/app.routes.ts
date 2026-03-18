// Application routes configuration
import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details';

export const routes: Routes = [
  // Redirect empty path to suppliers list
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' },
  // Suppliers list route
  { path: 'suppliers', component: SuppliersListComponent },
  // Parameterized route for supplier details
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  // Wildcard route
  { path: '**', redirectTo: '/suppliers' }
];