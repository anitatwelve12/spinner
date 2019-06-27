import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})

export class BarComponent implements OnInit, OnChanges {

    constructor() {}

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {}

    // returnClasses(i: number) {

  //   switch(i) {

  //   case 1:

  //       if (this.value <= 10) {

  //         return 'disabled';

  //       }

  //       break;

  //   case 2:

  //       if (this.value <= 50) {

  //         return 'disabled';

  //       }

  //       break;

  //   case 3:

  //       if (this.value <= 100) {

  //         return 'disabled';

  //       }

  //       break;

  //   case 4:

  //       if (this.value <= 540) {

  //         return 'disabled';

  //       }

  //       break;

  //   case 5:

  //       if (this.value <= 750) {

  //         return 'disabled';

  //       }

  //       break;

  //   case 6:

  //       if (this.value <= 0 && this.returnValue <= 0) {

  //         return 'sub-bar-chart-6';

  //       }

  //       break;

  //   case 7:

  //       if (this.returnValue <= 10) {

  //         return 'sub-bar-chart-7';

  //       }

  //       break;

  //   case 8:

  //       if (this.returnValue <= 40) {

  //         return 'sub-bar-chart-8';

  //       }

  //       break;

  //   case 9:

  //       if (this.returnValue <= 30) {

  //         return 'sub-bar-chart-9';

  //       }

  //       break;

  //   case 10:

  //       if (this.returnValue <= 40) {

  //         return 'sub-bar-chart-10';

  //       }

  //       break;

  //   case 11:

  //       if (this.returnValue <= 50) {

  //         return 'sub-bar-chart-11';

  //       }

  //       break;

  //       default:

  //           return 'disabled';

  //   }

  //   // console.log(i)

  // }

}



