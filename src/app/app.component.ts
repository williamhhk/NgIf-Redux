import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {AppStore} from './app.stores'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [];
  selected = {};
  selectedItem$: Observable<any>;

  constructor(
    private _store : Store <AppStore>
    ) {
      this.selectedItem$ = _store.select(state=>state.selectedItemState);
      this.selectedItem$.subscribe(log=>console.log(log));  
    }

  addTask(task : HTMLInputElement)
  {
    this.tasks.push({type : 'NORMAL', payload : task.value});
  }

  addExtended(task : HTMLInputElement)
  {
    this.tasks.push({type : 'EXTENDED', payload : { value : task.value, title : "Hello World" }} );
  }

  selectedItem(task) {
    // console.log(task);
    // this.selected = task;

    this._store.dispatch({type: 'SELECT_ITEM', payload: task});
  }
}
