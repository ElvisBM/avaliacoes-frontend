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
        console.log(param);
        console.log(index);

        this.isIndex = index;
        this.isDisabled = true;
    }

    onClose() {
        this.isIndex = '';
    }

    onSave(param, index) {
        this.isIndex = '';
        alert('ainda não está salvando :/');
    }

    toggleEdit(){
        alert('ainda não está reordenando :/');
    }
}
