import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProducerComponent } from './components/producer/producer.component';
import { WholesalerComponent } from './components/wholesaler/wholesaler.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Página Principal'},
  {path: 'productores', component: ProducerComponent, title: 'Productores'},
  {path: 'mayoristas', component: WholesalerComponent, title: 'Mayoristas'}
];
