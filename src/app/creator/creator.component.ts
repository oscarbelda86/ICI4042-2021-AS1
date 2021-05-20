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
  
  @Input() title: string ='';


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
    if(newTitle == ""){
      this.summoned = false;
    }else{this.summoned = true}
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
    this.title ="canceled";
    this.summoned = false;
  }

  validate(){
    return (this.tarea.controls['title'].invalid && this.tarea.controls['status'].invalid);
  }

  updateList(){
    console.log(this.title);
    if(this.title != ""){
      this.tareasService.deleteFromAll(this.title);
    }
    this.tareasService.add(this.tarea.controls["title"].value,this.tarea.controls["status"].value);
    this.showed = false;
    this.formReset();
  };
}