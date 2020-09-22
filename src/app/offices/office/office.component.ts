import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../../services/office.service';
import { FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
})
export class OfficeComponent implements OnInit {
  constructor(
    public service: OfficeService,
    public dialogRf: MatDialogRef<OfficeComponent>
  ) {}
  officesList: any;

  ngOnInit(): void {
    this.officesList = this.service.getAllOffices().subscribe((res) => {
      this.officesList = res;
      console.log(this.officesList);
    });
  }
  onSubmit() {
    if (this.service.form.valid) {
      console.log(this.service.form.get('id').value);
      if (!this.service.form.get('id').value) {
        this.service.addOffice(this.service.form.value);
        //  this.service.updateOffice(this.service.form.value);
      } else {
        this.service.updateOffice(this.service.form.value);
      }
    } else {
      console.log('Form is Valid');
    }
    this.dialogRf.close();
  }
}
