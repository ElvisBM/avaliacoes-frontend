import { Component } from '@angular/core';
import { LEGENDS } from '../names/nameslist';

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
}
