import { Component } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { FilterComponent } from '../filter/filter.component';
import { Data } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wholesaler',
  imports: [CommonModule, FilterComponent, TreeTableModule],
  templateUrl: './wholesaler.component.html',
  styleUrl: './wholesaler.component.css'
})
export class WholesalerComponent {
  WholesalerList: Data[] = [
    {
      id: 3,
      name: 'Cametro',
      validation: 500,
      type: 'Mayorista',
    },
    {
      id: 4,
      name: 'Koegnigsegg',
      validation: 180000,
      type: 'Mayorista',
    },
  ];
}
