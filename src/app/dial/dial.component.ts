import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})

export class DialComponent implements OnInit, OnChanges {
    @Input() currentPrime: number;
    @Input() currentCollection: number;
    @Input() currentReturn: number;
    @Input() totalPrime: number;
    @Input() totalCollection: number;
    @Input() totalReturn: number;

    primeRadius = 54;
    primeCircumference = 2 * Math.PI * this.primeRadius;
    //primeCircumference = 100.5;
    primeDashoffset: number;

    collectionRadius = 54;
    collectionCircumference = 2 * Math.PI * this.collectionRadius;
    //collectionCircumference = 284.5;
    collectionDashoffset: number;

    returnRadius = 40;
    returnCircumference = 2 * Math.PI * this.returnRadius;
    //collectionCircumference = 284.5;
    returnDashoffset: number;
  
    constructor() {
      this.primeProgress(0);
      this.collectionProgress(0);
      //this.returnProgress(0);
    }
  
    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        if( changes.hasOwnProperty('currentPrime')){
            if (changes.currentPrime.currentValue !== changes.currentPrime.previousValue) {
                this.primeProgress(changes.currentPrime.currentValue);
            }
        }
        if( changes.hasOwnProperty('currentCollection')){
            if (changes.currentCollection.currentValue !== changes.currentCollection.previousValue) {
                this.collectionProgress(changes.currentCollection.currentValue);
            }
        }
        // if( changes.hasOwnProperty('value')){
        //     if (changes.currentReturn.currentValue !== changes.currentReturn.previousValue) {
        //         this.returnProgress(changes.currentReturn.currentValue);
        //     }
        // }
    }
  
    private primeProgress(currentPrime: number) {
      const primeProgress = currentPrime / this.totalPrime;
      if(currentPrime < this.totalPrime)
      {
        this.primeDashoffset = this.primeCircumference * (1 - primeProgress);
        console.log("current prime :", currentPrime);
        //const offset = circumference - percent / 100 * circumference;
      }
    }

    private collectionProgress(currentCollection: number) {
        const collectionProgress = currentCollection / this.totalCollection;
        if(currentCollection < this.totalCollection)
        {
            this.collectionDashoffset = this.collectionCircumference * (1 - collectionProgress);
        }
      }

    //   private returnProgress(currentReturn: number) {
    //     const returnProgress = currentReturn / this.totalReturn;
    //     if (this.currentCollection <= 880) {
    //         this.returnDashoffset = this.returnCircumference * (1 - returnProgress);
    //     }
    //   }
}
