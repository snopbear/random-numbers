import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'random', pathMatch: 'full' },
  {
    path: 'random',
    loadComponent: () =>
      import(
        './random-number-generator/random-number-generator.component'
      ).then((x) => x.RandomNumberGeneratorComponent),
  },
  {
    path: 'rxjs-random',
    loadComponent: () =>
      import(
        './random-numbers-generator-rxjs/random-numbers-generator-rxjs.component'
      ).then((x) => x.RandomNumbersGeneratorRxjsComponent),
  },
];