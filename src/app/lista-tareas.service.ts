import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaTareasService {  
  mainDict = new Map<string, string[]>();

  constructor() { 
    this.mainDict.set('started', ["commit last update","haha xd"])
    this.mainDict.set("ongoing",["build an angular framework","create a git project ayudenme esta wea me esta matanto por dentro en serio la wea hasta cuando la wea seguira corriendo"])
    this.mainDict.set("finished",["build an xd","commit updates"])
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
