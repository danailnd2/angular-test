import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Mark as a standalone component
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const bodyElement = document.body;

    if (this.isDarkMode) {
      this.renderer.addClass(bodyElement, 'dark-theme'); // Add dark mode class
    } else {
      this.renderer.removeClass(bodyElement, 'dark-theme'); // Remove dark mode class
    }
  }
}
