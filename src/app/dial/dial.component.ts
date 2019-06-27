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
    @Input() currentSaline:number;
    @Input() totalPrime: number;
    @Input() totalCollection: number;
    @Input() totalReturn: number;
    @Input() totalSaline:number;
    @Input() status :string;

    primeRadius = 44;
    primeCircumference = 2 * Math.PI * this.primeRadius;
    primeDashoffset= this.primeCircumference;
    primecutoffvalue= this.primeCircumference*(83.34/100);

    collectionRadius = 44;
    collectionCircumference = 2 * Math.PI * this.collectionRadius;
    collectionDashoffset=this.collectionCircumference;
    collectioncutoffvalue= this.collectionCircumference*(18.5/100);

    returnRadius = 44;
    returnCircumference = 2 * Math.PI * this.returnRadius;
    returnDashoffset=this.returnCircumference;
    returncutoffvalue= this.returnCircumference*(18.5/100);

    salineRadius = 35;
    salineCircumference = 2 * Math.PI * this.salineRadius;
    salineDashoffset: number;

    drawType: string = "draw";

    constructor() {
      this.primeProgress(0);
      this.collectionProgress(0,0);
      this.salineProgress(0);
    }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        if( changes.hasOwnProperty('currentPrime')){
            if (changes.currentPrime.currentValue !== changes.currentPrime.previousValue) {
                this.primeProgress(changes.currentPrime.currentValue);
            }
        }

        if( changes.hasOwnProperty('currentCollection')){
            if (changes.currentCollection.currentValue !== changes.currentCollection.previousValue || changes.currentReturn.currentValue !== changes.currentReturn.previousValue) {
                this.collectionProgress(changes.currentCollection.currentValue, changes.currentReturn.currentValue);
            }
        }

        // if( changes.hasOwnProperty('currentReturn')){
        //     if (changes.currentReturn.currentValue !== changes.currentReturn.previousValue) {
        //         this.returnProgress(changes.currentReturn.currentValue);
        //     }
        // }

        if( changes.hasOwnProperty('currentSaline')){
            if (changes.currentSaline.currentValue !== changes.currentSaline.previousValue) {
                this.salineProgress(changes.currentSaline.currentValue);
            }
        }
    }

    
    private primeProgress(currentPrime: number) {
      const primeProgress = currentPrime / this.totalPrime;
 
        if(this.primeDashoffset > this.primecutoffvalue){  
            if(currentPrime < this.totalPrime){
                this.primeDashoffset = this.primeCircumference * (1 - primeProgress);
            }
        }
    }

    private collectionProgress(currentCollection: number , currentReturn:number) {
        const collectionProgress = currentCollection / this.totalCollection;
       if(this.status === this.drawType)
       //console.log("type ==>", this.status);
        if(this.collectionDashoffset > this.collectioncutoffvalue){
            if(this.currentCollection <=this.totalCollection){
                this.collectionDashoffset = this.collectionCircumference * (1 - collectionProgress);
            }
        }else{
           const returnProgress = currentReturn / this.totalReturn;
            if (this.currentReturn <= this.totalReturn) {
                this.returnDashoffset = this.returnCircumference * (1 - returnProgress);
            }
    }
    }
    //   private returnProgress(currentReturn: number) {
    //     const returnProgress = currentReturn / this.totalReturn;

    //     if (this.currentReturn <= this.totalReturn) {
    //         this.returnDashoffset = this.returnCircumference * (1 - returnProgress);
    //     }
    //   }

      private salineProgress(currentSaline: number) {
        const salineProgress = currentSaline / this.totalSaline;

        if (this.currentSaline <= this.totalSaline) {
            this.salineDashoffset = this.salineCircumference * (1 - salineProgress);
        }
      }

    someFunction() {
        console.log('Hello')
    }
}


// import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-dial',
//   templateUrl: './dial.component.html',
//   styleUrls: ['./dial.component.scss']
// })

// export class DialComponent implements OnInit, OnChanges {
//     @Input() currentPrime: number;
//     @Input() currentCollection: number;
//     @Input() currentReturn: number;
//     @Input() totalPrime: number;
//     @Input() totalCollection: number;
//     @Input() totalReturn: number;

//     primeRadius = 44;
//     primeCircumference = 2 * Math.PI * this.primeRadius;
//     //primeCircumference = 100.5;
//     primeDashoffset= this.primeCircumference;
//     primecutoffvalue= this.primeCircumference*(83.34/100);
    

//     collectionRadius = 44;
//     collectionCircumference = 2 * Math.PI * this.collectionRadius;
//     //collectionCircumference = 284.5;
//     collectionDashoffset=this.collectionCircumference;
//     collectioncutoffvalue= this.collectionCircumference*(19.44/100);

//     returnRadius = 40;
//     returnCircumference = 2 * Math.PI * this.returnRadius;
//     //collectionCircumference = 284.5;
//     returnDashoffset: number;
  
//     constructor() {
//       this.primeProgress(0);
//       this.collectionProgress(0);
//       //this.returnProgress(0);
      
//     }
  
//     ngOnInit() { }

//     ngOnChanges(changes: SimpleChanges) {
//         if( changes.hasOwnProperty('currentPrime')){
//             if (changes.currentPrime.currentValue !== changes.currentPrime.previousValue) {
//                 this.primeProgress(changes.currentPrime.currentValue);
//             }
//         }
//         if( changes.hasOwnProperty('currentCollection')){
//             if (changes.currentCollection.currentValue !== changes.currentCollection.previousValue) {
//                 this.collectionProgress(changes.currentCollection.currentValue);
//             }
//         }
//         // if( changes.hasOwnProperty('value')){
//         //     if (changes.currentReturn.currentValue !== changes.currentReturn.previousValue) {
//         //         this.returnProgress(changes.currentReturn.currentValue);
//         //     }
//         // }
//     }
  
//     private primeProgress(currentPrime: number) {
//       const primeProgress = currentPrime / this.totalPrime;

//       if(this.primeDashoffset > this.primecutoffvalue){   
//       if(currentPrime < this.totalPrime )
//       {
        
//             this.primeDashoffset = this.primeCircumference * (1 - primeProgress);
           
//         }
//           }
//     }

//     private collectionProgress(currentCollection: number) {
//         const collectionProgress = currentCollection / this.totalCollection;
       
//         if(this.collectionDashoffset>this.collectioncutoffvalue){
       
//         if(this.currentPrime >= this.totalPrime){
     
//             this.collectionDashoffset = this.collectionCircumference * (1 - collectionProgress);
//             // console.log("collection offset", this.collectionDashoffset)
        
//        }}
      
//     }
//     //   private returnProgress(currentReturn: number) {
//     //     const returnProgress = currentReturn / this.totalReturn;
//     //     if (this.currentCollection <= 880) {
//     //         this.returnDashoffset = this.returnCircumference * (1 - returnProgress);
//     //     }
//     //   }
// }
