import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaTareasService {  
  mainDict = new Map<string, string[]>();
//  mainDict = new Map<string, Map<string,string>[]>();


  constructor(private http: HttpClient) { 
    this.mainDict.set('started', ["ejemplo inicado 1","ejemplo iniciado 2"])
    this.mainDict.set("ongoing",["ejemplo en proceso 1","ejemplo en proceso 2"])
    this.mainDict.set("finished",["ejemplo finalizado 1","ejemplo finalizado 2"])

  }

  delete(listName:string, index:number){
    this.mainDict.get(listName)?.splice(index,1);
  }
  deleteFromStatus(listName:string, title:string){
    var index = this.mainDict.get(listName)?.indexOf(title);
    if (!index ||index == -1){
      return
    }else{
    this.mainDict.get(listName)?.splice(index,1);
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
