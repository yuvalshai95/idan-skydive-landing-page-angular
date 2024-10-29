import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NAVIGATION_LINKS } from '../../constant/nvaigation-links';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderPipe } from '../../pipes/order.pipe';
import { TOP_HEADER_SOCIAL_ENTITIES } from '../../constant/icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, FontAwesomeModule, OrderPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public navigationLinks = structuredClone(NAVIGATION_LINKS);
  public topHeaderSocialEntities = structuredClone(TOP_HEADER_SOCIAL_ENTITIES);
  public isMobileSize: boolean = false;
  public icons = {
    phone: faMobileScreen,
  };

  private topHeaderHeight: number;
  private platformId = inject(PLATFORM_ID);

  @ViewChild('home') homeSection!: ElementRef;

  constructor() {
    afterNextRender(() => {
      const topHeaderElement = document.querySelector('.top-header') as HTMLElement;
      this.topHeaderHeight = topHeaderElement ? topHeaderElement.offsetHeight : 0;
    });
  }

  public ngOnInit(): void {
    // calculate if the screen size is mobile or tablet size (desktop is 1030px)
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Update the screen size check on resize
    this.checkScreenSize();
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

  private checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileSize = window.innerWidth < 768;
    }
  }

  public trackByNavLink(
    index: number,
    navLink: {
      name: string;
      order: number;
      ref: string;
      icon: string;
    }
  ): string {
    return navLink.ref;
  }

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
