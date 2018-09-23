import { Component } from '@angular/core';
import { LEGENDS } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  results = [];

  ngOnInit() {
  }

  onChange() {
    console.log(`Search: ${this.searchInput}`);
    if(this.searchInput.length >= 1 ){
      this.results = LEGENDS.filter( it => {
        return it.toLowerCase().includes(this.searchInput.toLowerCase());
      }); 
    }else{
      this.results = [];
    }
  }
}
