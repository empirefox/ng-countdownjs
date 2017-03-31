# [Countdownjs](https://github.com/mckamey/countdownjs) component for @angular

## Installation

```bash
npm i -S ng-countdownjs
```

## Usage

Import `CountdownModule`:
```typescript
import { CountdownModule } from 'ng-countdownjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CountdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add following to template:
```html
<countdown [auto]="auto" [time]="time1" [units]="seconds" key="countdown_time1_key" (changed)="ts1=$event">
  {{ts1?.seconds}}
</countdown>

<countdown [auto]="auto" [time]="time2" (changed)="ts2=$event">
 <span *ngIf="ts2">{{ts2.hours}}:{{ts2.minutes}}:{{ts2.seconds}}</span>
</countdown>

<countdown #countdown="countdown" [units]="seconds" (started)="onStart($event)" (changed)="ts3=$event">
  <span *ngIf="started" class="countdown">{{ts3.seconds}}</span>
  <button *ngIf="!started" (click)="countdown.start(time(10))">start from 10</button>
  <button *ngIf="started" (click)="countdown.stop()">stop time</button>
  <button *ngIf="started" (click)="countdown.restart(time(3))">restart from 3</button>
</countdown>
```

## Inputs

- `auto`: boolean; auto start countdown
- `key`: string; `localStorage` key to save/load the end time
- `time`: number | Date; end <Date>time or value of `Date.getTime()`
- `units`: number; `countdown.SECONDS`, `countdown.MINUTES` ...

## Outputs

- `changed`: `countdown.Timespan`
- `started`: `boolean`

## Methods

- `start(end?: number | Date)`
- `restart(end?: number | Date)`
- `stop()`
