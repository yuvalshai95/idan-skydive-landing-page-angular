import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-widget',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact-widget.component.html',
  styleUrls: ['./contact-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactWidgetComponent implements OnInit {
  public icon: string = 'phone';

  public ngOnInit(): void {}
}
