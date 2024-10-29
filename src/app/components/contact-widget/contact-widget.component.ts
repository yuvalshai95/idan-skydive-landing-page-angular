import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-widget',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule],
  templateUrl: './contact-widget.component.html',
  styleUrls: ['./contact-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactWidgetComponent implements OnInit {
  public whatsappIcon = faPhone;
  // public whatsappIcon = faWhatsapp;

  public ngOnInit(): void {}
}
