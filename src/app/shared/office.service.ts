import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Office } from './office.model.';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  formData: Office;

  constructor(private firestore: AngularFirestore) {}

  getAllOffices() {
    return this.firestore.collection('offices').snapshotChanges();
  }
  
  getOffice(id: string) {
    return this.firestore.collection('offices').doc(id).valueChanges();
  }
}
