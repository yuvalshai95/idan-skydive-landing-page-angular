import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  // Variable to track the top-header height
  private topHeaderHeight: number;

  @ViewChild('home') homeSection!: ElementRef;

  constructor() {
    afterNextRender(() => {
      const topHeaderElement = document.querySelector('.top-header') as HTMLElement;
      this.topHeaderHeight = topHeaderElement ? topHeaderElement.offsetHeight : 0;
    });
  }

  public ngOnInit(): void {}

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navContainer = document.querySelector('.nav-container') as HTMLElement;
    const scrollPosition = window.scrollY;
    const mainEl = document.querySelector('main') as HTMLElement;

    if (scrollPosition > this.topHeaderHeight) {
      navContainer.classList.add('fixed');
      mainEl.style.marginTop = '50px';
    } else {
      navContainer.classList.remove('fixed');
      mainEl.style.marginTop = '0px';
    }
  }

  public scrollToSection(sectionId: string) {
    const element = this[`${sectionId}Section`];
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
