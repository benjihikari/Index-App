import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  ProducerList: Data[] = [
    {
      id: 1,
      name: 'Empresa Cualquiera',
      validation: 1500,
      type: 'Productor',
      isValide: false,
    },
    {
      id: 2,
      name: 'Empresas Polar',
      validation: 180000,
      type: 'Productor',
      isValide: false,
    },
  ];

  WholesalerList: Data[] = [
    {
      id: 3,
      name: 'Cametro',
      validation: 500,
      type: 'Mayorista',
      isValide: false,
    },
    {
      id: 4,
      name: 'Koegnigsegg',
      validation: 180000,
      type: 'Mayorista',
      isValide: true,
    },
  ];

  getAllProducts(): Data[] {
    return this.ProducerList
  }

  getAllWholesaler(): Data[] {
    return this.WholesalerList
  }
}
