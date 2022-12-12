import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ApexChart, ApexResponsive, ApexNonAxisChartSeries, ApexAxisChartSeries, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/core/helpers/auth.service";
import { EtudiantService } from "src/app/core/services/etudiant.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
/****************************** */
  seriesAge  : ApexNonAxisChartSeries;
  chartAge : ApexChart;
  responsiveAge : ApexResponsive[];
  labelsAge : any;
//*****************************/
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  //********************** */
  username: string | null;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
nb:number;
  constructor(private studentService: EtudiantService, private auth: AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.auth.isUserAuth();
    this.authListenerSubs = this.auth.getAuthStatusListener().subscribe(
      (isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      }
    )
    this.username = this.auth.getUsername();


    this.studentService.getAllEtudiants().subscribe((res) => {
this.nb=res.length;
      this.seriesAge = [
        this.calculateDataByAge(res, 22),
        this.calculateDataByAge(res, 23),
        this.calculateDataByAge(res, 24),
        this.calculateDataByAge(res, 25),
        this.calculateDataByAge(res, 26),
        this.calculateDataByAge(res, 27),

      ];
      this.chartAge  = {
        type: "donut"
      }
      this.labelsAge  = ["age 22", "age 23", "age 24", "age 25", "age 26", "age 27"];
      this.responsiveAge  = [
        {
          breakpoint: 200,
          options: {
            chart: {
              width: 70
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      this.series= [
        {
          name: "nb",
          data: [
            this.calculateDataByOption(res, "GAMIX"),
            this.calculateDataByOption(res, "SIM"),
            this.calculateDataByOption(res, "NIDS"),
            this.calculateDataByOption(res, "TWIN"),
            this.calculateDataByOption(res, "SLEAM")
          ]
        }
      ]
      this.chart={
        height: 350,
        type: "bar"
      }
      this.title= {
        text: "Options choosen by students"
      }
      this.xaxis= {
        categories: ["GAMIX","SIM","NIDS","TWIN","SLEAM"]
      }
    })

  }
  calculateDataByAge(res: any, _v: number) {
    return res.filter((r: any) => r.age === _v).length;
  }
  calculateDataByOption(res: any, _v: string) {
    return res.filter((r: any) => r.option === _v).length;
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }
}






