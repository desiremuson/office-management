import { Component, OnInit } from '@angular/core';
import { Office } from '../shared/office.model.';
// import { OfficeService } from '../shared/office.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { log } from 'util';
import { OfficeComponent } from './office/office.component';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css'],
})
export class OfficesComponent implements OnInit {
  officesList: Office[];

  constructor(
    private firestore: AngularFirestore,
    // public service: OfficeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.service.getAllOffices().subscribe((res) => {
    //   this.officesList = res.map((item) => {
    //     return {
    //       id: item.payload.doc.id,
    //       ...(item.payload.doc.data() as Office),
    //     };
    //   });
    // });
  }
  onCreateOffice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';  
    this.dialog.open(OfficeComponent, dialogConfig);
  }
  onViewOffice(office: Office) {
    this.router.navigate(['/office', office.id]);
  }
  onEditOffice(office: Office) {
    console.log('About to Edit');

    this.router.navigate(['/edit-office', office.id]);
    console.log('Editing');
  }
  onDeleteOffice(id: string) {
    if (confirm('Are you sure you want to remove this Office'))
      this.firestore.doc('offices/' + id).delete();
  }
}
