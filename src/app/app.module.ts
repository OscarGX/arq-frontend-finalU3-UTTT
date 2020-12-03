import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';
import { ObserverTwoComponent } from './pages/observer-two/observer-two.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentesModule } from './components/componentes.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ObserverTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
