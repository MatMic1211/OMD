import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieLoaderComponent } from './MovieLoader/movie-loader.component';
import { MovieSearchComponent } from './MovieSearch/movie-search.component';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieLoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggle

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
