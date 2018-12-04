import { Component } from '@angular/core';
import { LEGENDS } from '../names/nameslist';
import { ItemReorderGesture, ItemReorderGestureDelegate } from './item-reorder-gesture';
import { isTrueProperty, reorderArray } from '../../util/util';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
	legends: Array<string> = LEGENDS;
    isDisabled: Boolean = true;
    isIndex:  String = '';

	constructor() {
	}

    onEdit(param, index) {
        this.isIndex = index;
        this.isDisabled = true;
    }

    onClose( legend, classe ) {
  		document.querySelector(classe).value = legend;
        this.isIndex = '';
    }

    onSave( legend, value  ) {

 		//Busca o index do Nome a ser alterado
   		let item = this.legends.indexOf( legend );  

   		//Altera para o valor atual
   		this.legends[item] = value;

    	this.isIndex = '';
    }

    reorderItems(indexes) {
	    let element = this.legends[indexes.from];
	    this.legends.splice(indexes.from, 1);
	    this.legends.splice(indexes.to, 0, element);
	 }

}
