import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from '../app.component';
import { UserListComponent } from '../user-list/user-list.component'; // Importa tu componente

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent  // Declara tu componente
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Agrega HttpClientModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


