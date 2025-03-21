import { Component, inject } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { FilterComponent } from '../filter/filter.component';
import { Data } from '../data';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../data-service.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-wholesaler',
  imports: [CommonModule, FilterComponent, TreeTableModule, FormsModule],
  templateUrl: './wholesaler.component.html',
  styleUrl: './wholesaler.component.css'
})
export class WholesalerComponent {
  WholesalerList: Data[] = []

  dataService: DataServiceService = inject(DataServiceService)

  WholesalerFilter: Data[] = [];

  constructor() {
    this.WholesalerList = this.dataService.getAllWholesaler()
    this.WholesalerFilter = this.WholesalerList
  }

  showValidation = false

  get filteredItems(){
    return this.WholesalerFilter.filter(item => !this.showValidation || item.isValide);
  }

  searchResult(text:string) {
    if(!text){
      this.WholesalerFilter = this.WholesalerFilter
      return
    } else {
      this.WholesalerFilter = this.WholesalerFilter.filter((WholesalerList) => {
        WholesalerList?.name.toLowerCase().includes(text.toLowerCase())
      })
    }
  }
}
