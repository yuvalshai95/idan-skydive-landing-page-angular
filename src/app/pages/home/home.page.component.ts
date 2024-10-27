import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
