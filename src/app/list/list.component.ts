import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { ListaTareasService } from '../lista-tareas.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  startedWork : string[]
  ongoingWork : string[]
  finishedWork : string[]
  tareasService: ListaTareasService;
  
  @Output()
  emitter = new EventEmitter<string>();
  
  constructor(tareasService: ListaTareasService ) { 
    this.startedWork = tareasService.mainList[0];
    this.ongoingWork = tareasService.mainList[1];
    this.finishedWork = tareasService.mainList[2];
    this.tareasService = tareasService;
  }

  delete(index:number){
    this.tareasService.delete(index);
  }

  edit(index:number, listIndex:number = 0){
    console.log(index);
  }

  ngOnInit(): void {
  }

}
