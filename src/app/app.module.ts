import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//esto se agrega para las rutas
import { AppRoutingModule } from './app.routing.module';
//angular
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
//services

//component
import { LoginComponent } from './components/login/login.component';
import { ToobarComponent } from './components/toobar/toobar.component';
import { PanelComponent } from './components/panel/panel.component';
import { ProductosListaComponent } from './components/productos/productos-lista/productos-lista.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { LogonDialogComponent } from './components/toobar/logon-dialog/logon-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToobarComponent,
    PanelComponent,
    ProductosListaComponent,
    ProductoComponent,
    LogonDialogComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
