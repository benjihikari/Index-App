import { Component } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { FilterComponent } from '../filter/filter.component';
import { Data } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producer',
  imports: [CommonModule, TreeTableModule, FilterComponent],
  templateUrl: './producer.component.html',
  styleUrl: './producer.component.css',
})
export class ProducerComponent {
  ProducerList: Data[] = [
    {
      id: 1,
      name: 'Empresa Cualquiera',
      validation: 1500,
      type: 'Productor',
    },
    {
      id: 2,
      name: 'Empresas Polar',
      validation: 180000,
      type: 'Productor',
    },
  ];
}
