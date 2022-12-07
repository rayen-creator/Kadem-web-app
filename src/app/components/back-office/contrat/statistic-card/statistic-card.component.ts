import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexMarkers, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { Contrat } from 'src/app/core/models/Contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.css']
})
export class StatisticCardComponent implements OnInit {

  constructor(private contratService: ContratService) { }

  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  public chart1: ApexChart;
  public series1: ApexNonAxisChartSeries;
  public labels: any;
  public responsive: ApexResponsive[];
  @Input() ContratList: Contrat[];

  ngOnInit(): void {
    console.log(this.ContratList);


    this.contratService.getListContratService().subscribe((res) => {
      this.initChartData(res);
      this.series1 = [
        this.calculateData(res, 'IA'),
        this.calculateData(res, 'CLOUD'),
        this.calculateData(res, 'RESEAUX'),
        this.calculateData(res, 'SECURITE')
      ];
      this.chart1 = {
        width: 410,
        type: "pie"
      };
      this.labels = ["IA", "CLOUD", "RESEAUX", "SECURITE"];
      this.responsive = [
        {
          breakpoint: 580,
          options: {
            chart: {
              width: 410
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    })


  }

  public initChartData(res: any): void {
    this.series = [
      {
        name: "Contrats",
        data: [
          this.calculateDataChart2(res, 0),
          this.calculateDataChart2(res, 1),
          this.calculateDataChart2(res, 2),
          this.calculateDataChart2(res, 3),
          this.calculateDataChart2(res, 4),
          this.calculateDataChart2(res, 5),
          this.calculateDataChart2(res, 6),
          this.calculateDataChart2(res, 7),
          this.calculateDataChart2(res, 8),
          this.calculateDataChart2(res, 9),
          this.calculateDataChart2(res, 10),
          this.calculateDataChart2(res, 11),
        ]
      }
    ];
    this.chart = {
      height: 350,
      type: "bar"
    }
    this.plotOptions = {
      bar: {
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    }
    this.dataLabels = {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
      }
    }
    this.xaxis = {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      position: "top",
      labels: {
        offsetY: -18
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35
      }
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    };
    this.yaxis = {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    },
      this.title = {
        text: "Nombre du contrats selon la Date",
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
  }
  calculateData(res: any, _v: any) {
    return res.filter((r: any) => r.specialite === _v).length;
  }
  calculateDataChart2(res: any, _v: any) {
    return res.filter((r: Contrat) => new Date(r.dateDebutContrat).getMonth() === _v).length;
  }

}
