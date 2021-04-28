import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ICI4240-semaforo-tareas';
  editTitle = '';

  editOnCreator(event:any){
    console.log(event)
    this.editTitle = event;
  }
}
