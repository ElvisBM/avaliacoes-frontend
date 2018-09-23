import { Component } from '@angular/core';
import { LEGENDS } from '../names/nameslist';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = LEGENDS;

  ngOnInit() {

  }
}
