import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class WelcomePage implements OnInit {
  selectedLanguage:any;
  EnglishHeading='Welcome to the Fact or Fake Quiz!';
  ArabicHeading='!مرحباً بكم في هذا التحدي الممتع';
  EnglishText = 'Watch two short videos to uncover key insights about Nissan genuine parts. Answer one question per video correctly to escape the room. Good luck!';
  ArabicText='!شاهدوا فيديوهين قصيرين للتعرف على أهمية استخدام قطع نيسان الأصلية. بعد المشاهدة، أجيبوا على سؤال واحد لكل فيديو بشكل صحيح للخروج من الغرفة. حظاً موفقاً';
  Heading:any;
  BodyText:any;
  Next:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
    this.Heading = this.selectedLanguage==='en' ? this.EnglishHeading : this.ArabicHeading;
    this.BodyText = this.selectedLanguage==='en' ? this.EnglishText : this.ArabicText;
    this.Next = this.selectedLanguage==='en' ? 'Next' : 'التالي';
  }

  goToNextPage(){
    this.router.navigate(['/video1']);
  }

}
