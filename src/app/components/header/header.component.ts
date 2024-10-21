import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;

  @ViewChild('home') homeSection!: ElementRef;

  public ngOnInit(): void {}

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public scrollToSection(sectionId: string) {
    const element = this[`${sectionId}Section`];
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
