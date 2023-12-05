import { Component } from '@angular/core';
import { EventLogService } from 'src/app/services/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(public log: EventLogService) {}
}
