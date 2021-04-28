import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaTareasService } from '../lista-tareas.service';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit, OnChanges{

  showed = false;
  
  @Input() title: string;

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
  ngOnChanges(){
    this.showed = true;
    console.log(this.title)
    this.tarea.controls["title"].setValue(this.title);
  }

  formReset(){
    this.tarea.controls["title"].setValue("");
    this.tarea.controls["status"].setValue("");
  }

  cancel(){
    this.formReset();
    this.showed = false;
  }

  validate(){
    return (this.tarea.controls['title'].invalid && this.tarea.controls['status'].invalid);

  }

  updateList(){
    this.tareasService.add(this.tarea.controls["title"].value,this.statusList.indexOf(this.tarea.controls["status"].value));
  };
}