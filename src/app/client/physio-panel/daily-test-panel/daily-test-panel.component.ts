import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Day } from '../../../models/TimePeriod/Day';
import { TimePeriodType } from '../../../models/TimePeriod/TimePeriodType';
import { Week } from '../../../models/TimePeriod/Week';

@Component({
  selector: 'app-daily-test-panel',
  templateUrl: './daily-test-panel.component.html',
  styleUrls: ['./daily-test-panel.component.scss']
})
export class DailyTestPanelComponent implements OnInit {

  @Input() chartData: Week[];
  ngOnInit(): void { }

  constructor() {
    let days: Day[] = [{ name: 'Lu', type: TimePeriodType.DAY, date: new Date(), value: 32 }, { name: 'Ma', type: TimePeriodType.DAY, date: new Date(), value: 48 }, { name: 'Mi', type: TimePeriodType.DAY, date: new Date(), value: 53 }, { name: 'Ju', type: TimePeriodType.DAY, date: new Date(), value: 45 }, { name: 'Vi', type: TimePeriodType.DAY, date: new Date(), value: 25 }, { name: 'Sa', type: TimePeriodType.DAY, date: new Date(), value: 42 }, { name: 'Do', type: TimePeriodType.DAY, date: new Date(), value: 70 }];
    let days2: Day[] = [{ name: 'Lu', type: TimePeriodType.DAY, date: new Date(), value: 40 }, { name: 'Ma', type: TimePeriodType.DAY, date: new Date(), value: 55 }, { name: 'Mi', type: TimePeriodType.DAY, date: new Date(), value: 20 }, { name: 'Ju', type: TimePeriodType.DAY, date: new Date(), value: 35 }, { name: 'Vi', type: TimePeriodType.DAY, date: new Date(), value: 40 }, { name: 'Sa', type: TimePeriodType.DAY, date: new Date(), value: 62 }, { name: 'Do', type: TimePeriodType.DAY, date: new Date(), value: 80 }];
    let days3: Day[] = [{ name: 'Lu', type: TimePeriodType.DAY, date: new Date(), value: 10 }, { name: 'Ma', type: TimePeriodType.DAY, date: new Date(), value: 35 }, { name: 'Mi', type: TimePeriodType.DAY, date: new Date(), value: 25 }, { name: 'Ju', type: TimePeriodType.DAY, date: new Date(), value: 42 }, { name: 'Vi', type: TimePeriodType.DAY, date: new Date(), value: 69 }, { name: 'Sa', type: TimePeriodType.DAY, date: new Date(), value: 52 }, { name: 'Do', type: TimePeriodType.DAY, date: new Date(), value: 70 }];

    this.chartData = [{ name: 'Semana 1', type: TimePeriodType.WEEK, days: days, value: 30 }, { name: 'Semana 2', type: TimePeriodType.WEEK, days: days2, value: 30 }, {
      name: 'Semana 3', type: TimePeriodType.WEEK, days: days3
      , value: 30
    }];
  }
  getActualWellness(): number {
    return this.chartData[this.chartData.length - 1].days[this.chartData[this.chartData.length - 1].days.length - 1].value;
  }
}
