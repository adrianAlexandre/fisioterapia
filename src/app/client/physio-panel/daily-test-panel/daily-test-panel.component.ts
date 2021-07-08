import { Component, OnInit } from '@angular/core';
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

  chartData: Week[];
  ngOnInit(): void { }

  constructor() {
    let days: Day[] = [{ name: 'Lu', type: TimePeriodType.DAY, date: new Date(), value: 32 }, { name: 'Lu', type: TimePeriodType.DAY, date: new Date(), value: 48 }, { name: 'Mar', type: TimePeriodType.DAY, date: new Date(), value: 53 }, { name: 'Mi', type: TimePeriodType.DAY, date: new Date(), value: 45 }];
    this.chartData = [{ name: 'Semana 1', type: TimePeriodType.WEEK, days: days, value: 30 }];
  }
}
