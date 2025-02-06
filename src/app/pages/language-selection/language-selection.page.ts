import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.page.html',
  styleUrls: ['./language-selection.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LanguageSelectionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectLanguage(language:'en'|'ar'){
    localStorage.setItem('selectedLanguage',language);
    this.router.navigate(['/welcome']);
  }
}
