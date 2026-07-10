import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
