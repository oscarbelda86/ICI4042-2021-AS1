import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaTareasService {

  mainDict = {
    "started": [],
    "ongoing": [],
    "finished": []
  };
  mainList = [["commit last update","haha xd"],
  ["build an angular framework","create a git project ayudenme esta wea me esta matanto por dentro en serio la wea hasta cuando la wea seguira corriendo"],
  ["build an app","commit updates"]]

  constructor() { }

  delete(index:number){
    this.mainList[0].splice(index,1);
  }

  add(title:string, listIndex:number){
    for (let list of this.mainList){
      if (list.indexOf(title) != -1){

        list.splice(list.indexOf(title),1)
      }
    }
    this.mainList[listIndex].push(title);
  }
}
