import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../../services/office.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OfficeComponent } from '../office/office.component';
import { Router } from '@angular/router';
import { Office } from '../../shared/office.model.';
import { off } from 'process';

@Component({
  selector: 'app-dispalay-offices',
  templateUrl: './dispalay-offices.component.html',
  styleUrls: ['./dispalay-offices.component.css'],
})
export class DispalayOfficesComponent implements OnInit {
  constructor(
    public service: OfficeService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  officesList: any;
  detail: any;

  ngOnInit(): void {
    this.officesList = this.service.getAllOffices().subscribe((res) => {
      this.officesList = res;
      console.log(this.officesList);
    });
  }

  onEdit(office: Office) {
    this.service.populateForm(office);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';
    this.dialog.open(OfficeComponent, dialogConfig);
  }

  onViewOffice(office) {
    this.service.getOffice(office);
    this.router.navigate(['/office', office.id]);
  }
  onDelete(office) {
    console.log('About to Delete');
    this.service.deleteOffice(office);
    console.log('Deleted');
  }
}
