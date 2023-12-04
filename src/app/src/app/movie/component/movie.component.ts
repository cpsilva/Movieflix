import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  toggleTheme(): void {
    // this.isDark = !this.isDark;
    // if (this.isDark) {
    //   this.overlayContainer.getContainerElement().classList.add('dark-theme');
    // } else {
    //   this.overlayContainer
    //     .getContainerElement()
    //     .classList.remove('dark-theme');
    // }
  }
}
