import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { OfficeService } from 'src/app/shared/office.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css'],
})
export class EditOfficeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public service: OfficeService
  ) {}
  officeDetails: any;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getOffice(id).subscribe((val) => {
      this.officeDetails = val;
      //   console.log(this.officeDetails);
    });
  }
  onSave(form: NgForm) {
    console.log('About to save');
    let data = form.value;
    this.firestore.collection('offices').add(data);

    console.log('Saved');
  }
}
