import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent implements OnInit, OnChanges {
  @Input() value: number;
  @Input() returnValue: number;

  flag: boolean = true;
  m: number = 50;
  s1 = true;
  s2 = false;
  s3 = false;
  s4 = false;

  blueColor: string = "#0000FF"
  finalCircumference = 0;
  finalDashoffset = 0;

  radius2 = 32;
  circumference2 = 2 * Math.PI * this.radius2;
  dashoffset2: number;

  radius1 = 37;
  circumference1 = 2 * Math.PI * this.radius1;
  dashoffset1: number;

  radius = 50;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;

  radius3 = 49;
  circumference3 = 2 * Math.PI * this.radius3;
  dashoffset3: number;

  constructor() {
    this.drawProgress(0);
    this.returnProgress(0);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if( changes.hasOwnProperty('value')){
      if (changes.value.currentValue !== changes.value.previousValue) {
        this.drawProgress(changes.value.currentValue);
      }
    }

    if( changes.hasOwnProperty('returnValue')){
      if (changes.returnValue.currentValue !== changes.returnValue.previousValue) {
        this.returnProgress(changes.returnValue.currentValue);
      }
    }
  }

  private returnProgress(returnValue: number) {
    this.dashoffset1 = this.circumference1;
    const progress = returnValue / 100;

    if (this.value >= 880) {
      this.dashoffset1 = this.circumference1 * (1 - progress);
      this.dashoffset2 = this.circumference2 * (1 - progress);
    }
  }

  private drawProgress(value: number) {
    this.dashoffset3 = this.circumference3;
    const progress = value / 880;
    const progress1 = (value - 50) / 880;
    

    if (value < 50) {
  this.dashoffset = this.circumference * (1 - progress);
    }

    // if (value) {
    //   this.dashoffset = this.circumference * (1 - progress);
    //   if (value < this.m )
    //   {
    //     this.s1 = true; 
    //     console.log("value :" ,this.value, "s1 is ",this.s1); 

    //   } else (this.s1 = false);

    //   if (value > this.m && value < this.m+5 )
    //   {
    //     this.s2 = true ; 
    //     console.log("value :" ,this.value, "s2 is ",this.s2);

    //   }else (this.s2 = false);

    //   if (value > this.m +5 && value < 875 )
    //   {
    //     this.s3 = true ; 
    //     console.log("value :" ,this.value, "s3 is ",this.s3)

    //   }else (this.s3 = false);
    //   if (value > 875 )
    //   {
    //     this.s4 = true ; 
    //     console.log("value :" ,this.value, "s4 is ",this.s4)}else (this.s4 = false);
    //     return this.s1,this.s2,this.s3,this.s4;
    // }
      if (value >= 50) {
        this.dashoffset3 = this.circumference3 * (1 - progress1);
      }
  }
}
