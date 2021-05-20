import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output()
  summon = new EventEmitter<string>();

  constructor() { }
  
  emitSummon(){
    console.log("click summon")
    this.summon.emit('');  
  }

  ngOnInit(): void {
  }

}
