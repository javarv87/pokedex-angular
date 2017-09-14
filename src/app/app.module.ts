import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
