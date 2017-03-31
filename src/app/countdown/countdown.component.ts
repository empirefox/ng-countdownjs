import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as countdown from 'countdown';

@Component({
  selector: 'countdown',
  template: '<ng-content></ng-content>',
  exportAs: 'countdown',
})
export class CountdownComponent implements OnInit {

  @Input() auto: boolean;
  @Input() key: string;
  @Input() time: number | Date;
  @Input() units: number;

  @Output() changed = new EventEmitter<countdown.Timespan>();
  @Output() started = new EventEmitter<boolean>();

  private timer: any;

  ngOnInit() {
    if (this.auto) {
      this.start();
    }
  }

  start(end?: number | Date) {
    this.time = end || this.time;
    if (this.key) {
      let time = +localStorage.getItem(this.key);
      if (time > new Date().getTime()) {
        this.time = time;
      } else {
        time = this.time instanceof Date ? this.time.getTime() : this.time;
        localStorage.setItem(this.key, time.toString());
      }
    }

    this.timer = countdown(
      ts => {
        if (ts.value < 1000 && !ts.seconds) {
          this.stop();
        }
        this.changed.next(ts);
      },
      this.time,
      this.units,
    );
    this.started.next(true);
  }

  restart(end?: number | Date) {
    this.stop();
    this.start(end);
  }

  stop() {
    clearInterval(this.timer);
    this.started.next(false);
  }
}
