import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'language-selection',
    pathMatch: 'full',
  },
  {
    path: 'language-selection',
    loadComponent: () => import('./pages/language-selection/language-selection.page').then( m => m.LanguageSelectionPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'video1',
    loadComponent: () => import('./pages/video1/video1.page').then( m => m.Video1Page)
  },
  {
    path: 'quiz1',
    loadComponent: () => import('./pages/quiz1/quiz1.page').then( m => m.Quiz1Page)
  },
  {
    path: 'video2',
    loadComponent: () => import('./pages/video2/video2.page').then( m => m.Video2Page)
  },
  {
    path: 'quiz2',
    loadComponent: () => import('./pages/quiz2/quiz2.page').then( m => m.Quiz2Page)
  },
  {
    path: 'final',
    loadComponent: () => import('./pages/final/final.page').then( m => m.FinalPage)
  }
];
