import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { DialComponent } from './dial/dial.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProgressComponent, DialComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }




// import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { UsersService } from './users.service';
// import { PersonRowComponent } from './person-row/person-row.component';
// import { UserRowComponent } from './user-row/user-row.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { ReversePipe } from './reverse.pipe';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PersonRowComponent,
//     UserRowComponent,
//     UserListComponent,
//     ReversePipe
//   ],
//   imports: [
//     BrowserModule,
//     HttpModule
//   ],
//   providers: [
//     UsersService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
