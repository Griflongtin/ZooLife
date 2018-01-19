import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
