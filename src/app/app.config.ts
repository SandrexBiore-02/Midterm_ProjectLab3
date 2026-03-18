// App configuration — sets up routing and zoneless change detection
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Zoneless change detection for Angular 21
    provideZonelessChangeDetection(),
    // Register routes for the application
    provideRouter(routes)
  ]
};