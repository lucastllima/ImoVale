import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { PropertiesComponent } from './views/properties/properties.component';
import { PropertieFormComponent } from './components/properties/propertie-form/propertie-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropertieReadComponent } from './components/properties/propertie-read/propertie-read.component';
import { MoneyPipe } from './common/pipes/money.pipe';
import { TypeAnnouncementPipe } from './common/pipes/type-announcement.pipe';
import { DialogDeleteComponent } from './common/services/dialogs/dialog-delete/dialog-delete.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PropertiesComponent,
    PropertieFormComponent,
    PropertieReadComponent,
    MoneyPipe,
    TypeAnnouncementPipe,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDeleteComponent]
})
export class AppModule { }
