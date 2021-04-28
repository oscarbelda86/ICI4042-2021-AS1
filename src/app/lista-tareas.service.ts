import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaTareasService {  
  mainDict = new Map<string, string[]>();

  constructor() { 
    this.mainDict.set('started', ["ejemplo inicado 1","ejemplo iniciado 2"])
    this.mainDict.set("ongoing",["ejemplo en proceso 1","ejemplo en proceso 2"])
    this.mainDict.set("finished",["ejemplo finalizado 1","ejemplo finalizado 2"])

  }

  delete(listName:string, index:number){
    this.mainDict.get(listName)?.splice(index,1);
  }

  deleteFromAll(title:string){
    for (let list of this.mainDict.values()){
      if (list.indexOf(title) != -1){
        list.splice(list.indexOf(title),1)
      }
    }
  }

  getList(listName:string){
    return this.mainDict.get(listName);
  }
// added check to dont repeat events
  add(title:string, listName:string){
    for (let list of this.mainDict.values()){
      if (list.indexOf(title) != -1){
        list.splice(list.indexOf(title),1)
      }
    }
    this.mainDict.get(listName)?.push(title);
  }

}
