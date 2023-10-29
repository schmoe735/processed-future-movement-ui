import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/service/ReportsService';

@Component({
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  title = 'processed-future-movement-ui';
  clientId: string = '';
  products: any
  headers = [
    "Client Type",
    "Client Number",
    "Account Number",
    "Sub Account Number",
    "Exchange Code",
    "Product Group Code",
    "Symbol",
    "Expiration Date",
    "Total Transaction Amount"
  ]

  constructor(public reportService: ReportsService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((value) => {
      this.clientId = value['client']
      this.reportService.getDailySummary(this.clientId)
        .subscribe(data => {
          console.log(data)
            this.products = data
          }
        );    
  });

    
  }

  downloadCSV () {
    console.log('downloading')
    this.reportService.downloadDailySummary(this.clientId)
          .subscribe(data => this.downloadFile(data)),
                      () => console.info('OK');
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
