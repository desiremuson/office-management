import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
// Materials

import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { OfficesComponent } from './offices/offices.component';
import { AddOfficeComponent } from './offices/add-office/add-office.component';
import { ViewOfficeComponent } from './offices/view-office/view-office.component';
import { EditOfficeComponent } from './offices/edit-office/edit-office.component';
import { DispalayOfficesComponent } from './offices/dispalay-offices/dispalay-offices.component';
// import { OfficeService } from './shared/office.service';
// import { OfficeComponent } from './offices/office/office.component';
// *****

import { OfficesComponent } from './offices/offices.component';
import { OfficeComponent } from './offices/office/office.component';
import { OfficeService } from './services/office.service';

@NgModule({
  declarations: [
    AppComponent,
    OfficesComponent,

    AddOfficeComponent,
    ViewOfficeComponent,
    EditOfficeComponent,
    OfficeComponent,
    DispalayOfficesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [OfficeService],
  bootstrap: [AppComponent],
  entryComponents: [OfficeComponent],
})
export class AppModule {}
