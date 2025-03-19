import { Component, Input } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { Data } from '../data';

@Component({
  selector: 'app-filter',
  imports: [TreeTableModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() producer!: Data;

  // @Input() wholesaler!: Data;

}
