import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { ListaTareasService } from '../lista-tareas.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tareasService: ListaTareasService;

  @Output()
  editData = new EventEmitter<(string)>();
  
  constructor(tareasService: ListaTareasService ) { 

    this.tareasService = tareasService;
  }

  delete(listName:string,index:number){
    this.tareasService.delete(listName,index);
  }
  getList(listName:string){
    return this.tareasService.getList(listName);
  }

  edit(index:number, listName:string = "started"){
    this.editData.emit(this.tareasService.getList(listName)?.[index]);
  //  this.tareasService.delete(listName,index);
  }

  ngOnInit(): void {
  }

}
