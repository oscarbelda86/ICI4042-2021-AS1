import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  tarea: FormGroup;
  status = ['started','ongoing','finished'];

  constructor(public fb: FormBuilder) {
    this.tarea = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      status: ['', [Validators.required]],
   });
  }

  ngOnInit(): void {
  }

  formReset(){
    this.tarea.controls["title"].setValue("");
    this.tarea.controls["status"].setValue("");
  }

  updateList(){
    console.log(this.tarea.value);
  };
}