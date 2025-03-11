import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden = false;

  @HostListener('window:scroll', [])
  onScroll() {
    let currentScroll = window.scrollY;
    this.isHidden = currentScroll > 50;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.clientY < 60) {
      this.isHidden = false;
    }
  }
}
