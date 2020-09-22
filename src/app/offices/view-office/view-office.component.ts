import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfficeService } from '../../shared/office.service';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
  styleUrls: ['./view-office.component.css'],
})
export class ViewOfficeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: OfficeService) {}
  officeDetails: any;
  public officeID;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.service.getOffice(id).subscribe((val) => {
      this.officeDetails = val;
    });
    //   let id = parseInt(this.route.snapshot.paramMap.get("id"));
    //   console.log('Selected'+id)
  }
}
