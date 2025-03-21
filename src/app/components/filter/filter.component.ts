import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Data } from '../data';

@Component({
  selector: 'app-filter',
  imports: [TableModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() producer?: Data;

  // @Input() wholesaler!: Data;

}
