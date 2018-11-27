import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mortgage-break-up',
  templateUrl: './mortgage-break-up.component.html',
  styleUrls: ['./mortgage-break-up.component.scss']
})
export class MortgageBreakUpComponent implements OnInit {

  @Input('chartLabels')
  chartLabels: string[];
  @Input('chartData')
  chartData: number[];
  @Input('chartType')
  chartType: string;
  @Input('checkResponse')
  checkResponse: any;

  public chartColors:any[] = [ {
    backgroundColor:["#FF7360", "#B9E8E0"] }];


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }


}
