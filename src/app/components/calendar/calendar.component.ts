import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalendarService } from '../../services/calendar/calendar.service';

@Component({
  selector: 'app-calendar',
  imports: [RouterLink],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  private readonly calendarService = inject(CalendarService);

  readonly calendar = this.calendarService.calendar;
  readonly maxCalendarSize = this.calendarService.maxSize;
}
