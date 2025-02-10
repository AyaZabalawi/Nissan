import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FinalPage implements OnInit {
  selectedLanguage:any;
  Heading:any;
  BodyText:any;
  BodyText2:any;
  ThankYou:any;
  Direction:any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
    this.Heading = this.selectedLanguage==='en' ? 'Congratulations!' : 'مبروك !';
    this.BodyText = this.selectedLanguage==='en' ? 'You have successfully completed the quiz.' : 'لقد أكملت الاختبار بنجاح.';
    this.BodyText2 = this.selectedLanguage==='en'?'Please proceed to the next room.':'يُرجى التوجه إلى الغرفة التالية'
    this.ThankYou = this.selectedLanguage==='en' ? 'Thank You!' : '!شكراً لك';
    this.Direction = this.selectedLanguage==='en' ? 'ltr':'rtl';
  }

  goToWelcome(){
    this.router.navigate(['/language-selection']);
  }
}
