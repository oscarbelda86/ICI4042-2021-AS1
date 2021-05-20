import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaTareasService } from '../lista-tareas.service';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit{

  showed = false;
  summoned = true;
  
  title ='';
  oldTitle = '';
  oldStatus = '';


  tarea: FormGroup;
  statusList = ['started','ongoing','finished'];
  tareasService: ListaTareasService;
  
  constructor(public fb: FormBuilder, tareasService: ListaTareasService) {
    this.title='';
    this.tarea = this.fb.group({
      title: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
    this.tareasService = tareasService;
  }

  ngOnInit(): void {
    this.formReset();
    this.showed = false;
  }

  change(newTitle:string){
    console.log(newTitle)
    console.log(newTitle.split(" ")[0])
    if(newTitle == ""){
      this.summoned = true;
    }
    else{
      this.summoned = false;
      this.tarea.controls["status"].setValue(newTitle.split(" ")[0]);
      this.oldStatus = newTitle.split(" ")[0];
      newTitle = newTitle.replace(newTitle.split(" ")[0],"").trim();
      this.oldTitle = newTitle;
    }

    this.title = newTitle;
    this.tarea.controls["title"].setValue(newTitle)
    this.showed = true;

  }

  formReset(){
    this.tarea.controls["title"].setValue("");
    this.tarea.controls["status"].setValue("");
  }

  cancel(){
    this.formReset();
    this.showed = false;
    this.summoned = true;
    this.oldTitle = "";
    this.oldStatus = "";
  }

  validate(){
    return (this.tarea.controls['title'].invalid && this.tarea.controls['status'].invalid);
  }

  updateList(){
    if(!this.summoned){
      this.tareasService.deleteFromStatus(this.oldStatus, this.oldTitle);
    }
    console.log(this.title);
    
    this.tareasService.add(this.tarea.controls["title"].value,this.tarea.controls["status"].value);
    this.showed = false;
    this.formReset();
  };
}