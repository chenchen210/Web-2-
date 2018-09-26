import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 
  txt:string;
  @Output() pushes=new EventEmitter();
  getvalue(e){
    if(e.keyCode==13){
      this.pushes.emit(this.txt);
      this.txt='';
    }
  }


  constructor() { }

  ngOnInit() {
    
  }
 
}
