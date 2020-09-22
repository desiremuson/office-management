import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { OfficeService } from 'src/app/shared/office.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css'],
})
export class AddOfficeComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    public service: OfficeService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      location: '',
      email: '',
      telephone: '',
      maxoccupants: '',
      color: '',
    };
  }
  onSave(form: NgForm) {
    console.log('About to save');
    let data = form.value;
    this.firestore.collection('offices').add(data);
    this.formInit(form);
    console.log('Saved');
  }
}
