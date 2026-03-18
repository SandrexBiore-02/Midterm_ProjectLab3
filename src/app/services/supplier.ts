import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: 'TechCore Solutions',
      location: 'Manila, Philippines',
      email: 'contact@techcore.ph',
      contactPerson: 'Maria Santos',
      phone: '+63 912 345 6789',
      productsSupplied: ['Laptops', 'Monitors', 'Keyboards'],
      status: 'Active',
      website: 'www.techcore.ph'
    },
    {
      id: 2,
      supplierName: 'Pacific Office Supplies',
      location: 'Cebu City, Philippines',
      email: 'info@pacificoffice.com',
      contactPerson: 'Jose Reyes',
      phone: '+63 917 234 5678',
      productsSupplied: ['Paper', 'Pens', 'Folders', 'Binders'],
      status: 'Active',
      website: 'www.pacificoffice.com'
    },
    {
      id: 3,
      supplierName: 'NorthStar Electronics',
      location: 'Davao City, Philippines',
      email: 'sales@northstarph.com',
      contactPerson: 'Ana Dela Cruz',
      phone: '+63 920 111 2233',
      productsSupplied: ['Printers', 'Scanners', 'Projectors'],
      status: 'Active',
      website: 'www.northstarph.com'
    },
    {
      id: 4,
      supplierName: 'Green Leaf Packaging',
      location: 'Quezon City, Philippines',
      email: 'hello@greenleaf.ph',
      contactPerson: 'Carlo Mendoza',
      phone: '+63 918 555 6677',
      productsSupplied: ['Boxes', 'Bubble Wrap', 'Tapes'],
      status: 'Inactive',
      website: 'www.greenleaf.ph'
    },
    {
      id: 5,
      supplierName: 'Summit Hardware',
      location: 'Baguio City, Philippines',
      email: 'support@summithardware.com',
      contactPerson: 'Liza Cortez',
      phone: '+63 919 876 5432',
      productsSupplied: ['Tools', 'Fasteners', 'Safety Gear'],
      status: 'Active',
      website: 'www.summithardware.com'
    },
    {
      id: 6,
      supplierName: 'BlueSky Logistics',
      location: 'Makati, Philippines',
      email: 'ops@bluesky.ph',
      contactPerson: 'Ramon Tan',
      phone: '+63 916 432 1098',
      productsSupplied: ['Delivery Services', 'Warehousing'],
      status: 'Active',
      website: 'www.bluesky.ph'
    },
    {
      id: 7,
      supplierName: 'Fresh Harvest Foods',
      location: 'Benguet, Philippines',
      email: 'orders@freshharvestph.com',
      contactPerson: 'Elena Bautista',
      phone: '+63 921 654 3210',
      productsSupplied: ['Vegetables', 'Fruits', 'Organic Produce'],
      status: 'Active',
      website: 'www.freshharvestph.com'
    },
    {
      id: 8,
      supplierName: 'Metro Cleaning Solutions',
      location: 'Pasig City, Philippines',
      email: 'info@metroclean.ph',
      contactPerson: 'Dennis Villanueva',
      phone: '+63 923 789 0123',
      productsSupplied: ['Disinfectants', 'Cleaning Equipment', 'Trash Bags'],
      status: 'Active',
      website: 'www.metroclean.ph'
    },
    {
      id: 9,
      supplierName: 'Alpha Furniture Co.',
      location: 'Laguna, Philippines',
      email: 'sales@alphafurniture.com',
      contactPerson: 'Patricia Gomez',
      phone: '+63 925 321 9870',
      productsSupplied: ['Office Chairs', 'Desks', 'Shelves'],
      status: 'Inactive',
      website: 'www.alphafurniture.com'
    },
    {
      id: 10,
      supplierName: 'DataLink Networks',
      location: 'Taguig, Philippines',
      email: 'support@datalink.ph',
      contactPerson: 'Mark Aquino',
      phone: '+63 928 012 3456',
      productsSupplied: ['Network Cables', 'Routers', 'Switches', 'Fiber Optics'],
      status: 'Active',
      website: 'www.datalink.ph'
    }
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(supplier => supplier.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = { ...updatedSupplier };
    }
  }
}