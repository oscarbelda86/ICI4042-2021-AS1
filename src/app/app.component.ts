import { Component } from '@angular/core';
import { CreatorComponent } from './creator/creator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ICI4240-semaforo-tareas';
  editTitle = '';

  editOnCreator(event:any){
    console.log(event);
    console.log(this.editTitle)
    this.editTitle = event;
  }
}
