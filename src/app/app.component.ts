import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayText: string = 'This is the initial text.';
  isDarkMode: boolean = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  changeText() {
    this.displayText = 'Text has been changed!';
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', theme);
  }
}