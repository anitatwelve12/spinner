import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  primeProgress: Observable<number>;
  collectionProgress: Observable<number>;
  returnProgress: Observable<number>;
  salineProgress: Observable<number>;

  primeValue: number = 30;
  totalCollection: number = 880;
  currentValue: number;
  totalReturn: number = 880;
  salineReturn = 100;

  collectionVal1: number;
  temp: number = 0;
  collectionVal: Array<number> = new Array();
  returnVal: Array<number> = new Array();

  constructor() {
    for(let i = 0; i <= this.totalCollection; i+=20) {
      this.collectionVal.push(i);
      this.returnVal.push(i);
    }
    for(let i = 0; i <= this.totalCollection; i+=20) {
      this.returnVal.push(i);
    }
    this.primeProgress = this.emulatePrimeProgress();
  }

  ngOnInit() {
    this.subscribeData();
  }

  emulatePrimeProgress() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < this.primeValue) {
          val++;
        } else {
          val = 0;
        }
        observer.next(val);
        if (val === this.primeValue) {
          observer.unsubscribe();
          this.collectionProgress = this.emulateCollectionProgress();
          this.returnProgress = this.emulateReturnProgress();
        }
      }, 5);

      return () => {
        clearInterval(interval);
      };
    });
  }

  emulateCollectionProgress() {
    return new Observable<number>(observer => {
      const interval = setInterval(() => {
        observer.next(this.currentValue);
        if (this.currentValue === this.totalCollection) {
          observer.unsubscribe();
          clearInterval(interval);
          this.salineProgress = this.emulateSalineReturnProgress();
        }
      }, 5);
    });
  }

  emulateReturnProgress() {
    return new Observable<number>(observer => {
      const interval = setInterval(() => {
        observer.next(this.currentValue);
        if (this.currentValue === this.totalReturn) {
          observer.unsubscribe();
          clearInterval(interval);
          this.salineProgress = this.emulateSalineReturnProgress();
        }
      }, 5);
    });
  }

  // emulateReturnProgress() {
  //   return new Observable<number>(observer => {
  //     let val = 0;
  //     const interval = setInterval(() => {
  //       if (val < this.totalReturn) {
  //         val++;
  //       } else {
  //         val = 0;
  //       }
  //       observer.next(val);
  //       if (val === this.totalReturn) {
  //         observer.unsubscribe();
  //       }
  //     }, 50);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   });
  // }

  emulateSalineReturnProgress() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < this.salineReturn) {
          val++;
        } else {
          val = 0;
        }
        observer.next(val);
        if (val === this.salineReturn) {
          observer.unsubscribe();
        }
      }, 50);
      return () => {
        clearInterval(interval);
      };
    });
  }

  subscribeData() {
    this.emulateCollectionValue().subscribe((value: number) => this.currentValue = value);
    this.emulateReturnValue().subscribe((value: number) => this.currentValue = value);
  }

  emulateCollectionValue() {
    return new Observable(subscriber => {
      let increment = 0;
      var timeOut = setInterval(() => {
        subscriber.next(this.collectionVal[increment]);
        increment++;
        if(increment === this.collectionVal.length) {
          clearInterval(timeOut);
        }
      }, 1000);
    });
  }

  emulateReturnValue() {
    return new Observable(subscriber => {
      let increment = 0;
      var timeOut = setInterval(() => {
        subscriber.next(this.returnVal[increment]);
        increment++;
        if(increment === this.returnVal.length) {
          clearInterval(timeOut);
        }
      }, 1000);
    });
  }
}