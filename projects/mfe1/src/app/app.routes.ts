import { Routes } from '@angular/router';
import { Feat1Component } from './feat1/feat1.component';
import { Feat2Component } from './feat2/feat2.component';

export const routes: Routes = [
  { path: 'feat1', component: Feat1Component, title: 'MFE2 | Page 1' },
  { path: 'feat2', component: Feat2Component, title: 'MFE2 | Page 2' },
];
