import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZoomTask } from './ZoomTask/Zoomtask.component';

// import { WarningComponent } from './warning/warning.component';
// import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomTask
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
