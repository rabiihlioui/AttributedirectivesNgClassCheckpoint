import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-dir',
  templateUrl: './ng-class-dir.component.html',
  styleUrls: ['./ng-class-dir.component.css']
})
export class NgClassDirComponent implements OnInit {

  classOneFlag: boolean = false
  classTwoFlag: boolean = false
  classThreeFlag: boolean = false

  constructor() { }

  ngOnInit() {
  }

  chooseClass(id: string){
    if (id.match('one')) {
      this.classOneFlag = true
      this.classTwoFlag = false
      this.classThreeFlag = false
    }
    else if (id.match('two')) {
      this.classOneFlag = false
      this.classTwoFlag = true
      this.classThreeFlag = false
    }
    else {
      this.classOneFlag = false
      this.classTwoFlag = false
      this.classThreeFlag = true
    }
  }

}
