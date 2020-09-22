import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { off } from 'process';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  constructor(private firestore: AngularFirestore) {}

  listOffices: any;
  offDet: any;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    telephone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    maxoccupants: new FormControl('', Validators.required),
    color: new FormControl(''),
  });
  getAllOffices() {
    return this.firestore
      .collection('offices', (ref) => ref.orderBy('name', 'asc'))
      .valueChanges();
  }
  getOffice(id: string) {
    console.log('In service get Office');
    this.firestore
      .collection('offices')
      .doc(id)
      .ref.get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log('There is no document!');
        }
      })
      .catch((error) => {
        console.log('There was an error getting your document:', error);
      });
  }
  addOffice(office) {
    this.firestore
      .collection('offices')
      .add({
        name: office.name,
        location: office.location,
        email: office.email,
        maxoccupants: office.maxoccupants,
        telephone: office.telephone,
        color: office.color,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
  updateOffice(office) {
   
    this.firestore
      .collection('offices', (ref) => ref.where('name', '==', office.name))
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({
            name: office.name,
            location: office.location,
            email: office.email,
            maxoccupants: office.maxoccupants,
            telephone: office.telephone,
            color: office.color,
          });
        });
      });
  }
  deleteOffice(office) {
    this.firestore
      .collection('offices', (ref) => ref.where('name', '==', office.name))
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref
            .delete()
            .then(() => {
              console.log('Document successfully deleted!');
            })
            .catch(function (error) {
              console.error('Error removing document: ', error);
            });
        });
      });
  }
  populateForm(office) {
    console.log('About to populate');
    this.form.patchValue(office);
    console.log(office);
  }
}
