import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

import { TimePeriod } from '../../models/TimePeriod/TimePeriod';
import { Month } from '../../models/TimePeriod/Month';
import { TimePeriodType } from '../../models/TimePeriod/TimePeriodType';
import { Week } from '../../models/TimePeriod/Week';
import { Year } from '../../models/TimePeriod/Year';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() timePeriod: TimePeriod[];
  @Input() isDetailed: boolean;
  timePeriodNumber: number;
  labels: string[] = [];
  data: number[] = [];
  canvas: HTMLCanvasElement;
  gradient;
  bar_chart: Chart;
  bar_ctx: CanvasRenderingContext2D;
  ngOnInit(): void {
    this.timePeriodNumber = this.timePeriod.length - 1;
    this.labels = this.getLabels(this.timePeriod[this.timePeriodNumber], this.isDetailed);
    this.data = this.getData(this.timePeriod[this.timePeriodNumber], this.isDetailed)
    this.canvas = <HTMLCanvasElement>document.getElementById('myChart');
    console.log(this.canvas);

    this.bar_ctx = this.canvas.getContext('2d');
    this.gradient = this.bar_ctx.createLinearGradient(0, 200, 0, 0);
    this.gradient.addColorStop(0, 'rgba(122, 229, 130, 1)');

    this.gradient.addColorStop(1, 'rgba(11, 160, 219, 1)');


    this.bar_chart = new Chart(this.bar_ctx, {

      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Wellness',
          data: this.data,
          backgroundColor: this.gradient,
          hoverBackgroundColor: '#000470',
          hoverBorderWidth: 2,
          hoverBorderColor: '#000470',
          borderColor: '#000470',

        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: false
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }
  constructor() {

  }

  //Methods
  /**
   * Sets the Chart's labels
   * @param timePeriod time period
   * @param isDetailed if detailed also sets the label of the inner components  for example if 
   * given a week it will detail the weeks day(Monday,Tuesday,etc)
   */
  getLabels(timePeriod: TimePeriod, isDetailed: boolean): string[] {
    let labels: string[] = [];

    if (timePeriod.type != TimePeriodType.DAY && isDetailed) {
      switch (timePeriod.type) {
        case TimePeriodType.WEEK:
          let week = <Week>timePeriod;
          week.days.forEach(day => {
            labels.push(day.name);
          });
          break;
        case TimePeriodType.MONTH:
          let month = <Month>timePeriod;
          month.weeks.forEach(week => {
            labels.push(week.name);
          });
          break;
        case TimePeriodType.YEAR:
          let year = <Year>timePeriod;
          year.months.forEach(month => {
            labels.push(month.name);
          });
          break;

      }
    } else {
      labels.push(timePeriod.name);
    }
    return labels;
  }

  getData(timePeriod: TimePeriod, isDetailed: boolean): number[] {
    let data: number[] = [];
    if (timePeriod.type != TimePeriodType.DAY && isDetailed) {
      switch (timePeriod.type) {
        case TimePeriodType.WEEK:
          let week = <Week>timePeriod;
          week.days.forEach(day => {
            data.push(day.value);
          });
          break;
        case TimePeriodType.MONTH:
          let month = <Month>timePeriod;
          month.weeks.forEach(week => {
            data.push(week.value);
          });
          break;
        case TimePeriodType.YEAR:
          let year = <Year>timePeriod;
          year.months.forEach(month => {
            data.push(month.value);
          });
          break;

      }
    } else {
      data.push(timePeriod.value);
    }
    return data;
  }


}
