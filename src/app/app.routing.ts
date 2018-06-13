import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
      path:'',
      component: WelcomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'marketplace',
      component: MarketplaceComponent
    },
    {
      path: 'albums/:id',
      component: AlbumDetailComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    }
  ];