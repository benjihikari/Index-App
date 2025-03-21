import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FilterComponent } from '../filter/filter.component';
import { Data } from '../data';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../data-service.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-producer',
  imports: [CommonModule, TableModule, FilterComponent, FormsModule],
  templateUrl: './producer.component.html',
  styleUrl: './producer.component.css',
})
export class ProducerComponent {
  ProducerList: Data[] = [];

  dataService:DataServiceService = inject(DataServiceService)

  ProducerFilter: Data[] = [];

  showValidation = false

  constructor(){
    this.ProducerList = this.dataService.getAllProducts()
    this.ProducerFilter = this.ProducerList
  }

  get filteredItems(){
    return this.ProducerFilter.filter(item => !this.showValidation || item.isValide);
  }

  searchResult(text:string) {
    if(!text){
      this.ProducerFilter = this.ProducerList
      return
    } else {
      this.ProducerFilter = this.ProducerList.filter((Data) => {
        Data?.name.toLowerCase().includes(text.toLowerCase())
      })
    }
  }
}
