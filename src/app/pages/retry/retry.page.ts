import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.page.html',
  styleUrls: ['./retry.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class RetryPage implements OnInit {

  selectedLanguage:any;
  englishHeading='Better luck next time!';
  arabicHeading='!حظاً موفقاً في المرة القادمة';
  englishText='Unfortunately, you did not pass the test. Thank you for your participation!';
  arabicText='!للأسف، لم تجتاز الاختبار. شكراً لمشاركتك';
  Heading:any;
  BodyText:any;
  ThankYou:any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
    this.Heading = this.selectedLanguage==='en' ? this.englishHeading : this.arabicHeading;
    this.BodyText = this.selectedLanguage==='en' ? this.englishText : this.arabicText;
    this.ThankYou = this.selectedLanguage==='en' ? 'Thank You!' : '!شكراً لك';
  }

  goToWelcome(){
    this.router.navigate(['/language-selection']);
  }
}
