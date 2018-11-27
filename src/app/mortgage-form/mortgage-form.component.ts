import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from './mortgage';
import { DataService } from '../data.service';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.scss']
})
export class MortgageFormComponent implements OnInit {
  @Input()
  model = new Mortgage(50000, 3, 100000, 80000, 20);

  submitted: boolean = false;
  mortgageResponse: any;
  //mortgageResponse: any={"monthlyCost": 13, "principal": 1000, "interest": 109, "eligible": true}; 

  mortgageError: boolean = false;
  loading: boolean = false;

  chartLabels: string[] = ['Prinicipal Amount', 'Interest Amount'];
  chartData: number[] = [80000, 8000];
  chartType: string = 'doughnut';


  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



  onSubmit() {
    this.submitted = true;
    
    console.log("form Submitted" + JSON.stringify(this.model));
    this.dataService.getEligibilty(this.model).pipe(first())
      .subscribe(
        data => {
          console.log("post" + JSON.stringify(data));
          this.mortgageResponse = data;
          this.chartData = [this.mortgageResponse.principal, this.mortgageResponse.interest];
        },
        error => {
          this.mortgageError=true;
          this.loading = false;
        });


  }



}
