import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as countdown from 'countdown';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {

  seconds = countdown.SECONDS;
  auto = true;
  time1 = new Date().getTime() + 10000;
  time2 = new Date().getTime() + 100000;
  started: boolean;

  ts1: countdown.Timespan;
  ts2: countdown.Timespan;
  ts3: countdown.Timespan;
  private theme: string;

  constructor() {
  }

  ngOnInit() {
  }

  onStart(started: boolean) {
    this.started = started;
    console.log('countdown has been started:', started);
  }

  time(sec: number) {
    return new Date().getTime() + sec * 1000;
  }

}
