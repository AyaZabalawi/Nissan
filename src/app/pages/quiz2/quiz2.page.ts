import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import {Filesystem, Directory, Encoding} from '@capacitor/filesystem';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Quiz2Page implements OnInit {
  selectedLanguage = localStorage.getItem('selectedLanguage');
  Next:any;
  Submit:any;
  Direction:any;
  arabicQuestion = 'ما هو أول مؤشر يمكن أن تلاحظه لتمييز بين قطع الغيار الأصلية من المزيفة؟';
  arabicChoices = ['ملصق تعريف القطعة','الجودة','التغليف','لا شيء مما سبق'];
  englishQuestion = 'The 4 most important reasons to always use Nissane Genuine parts are Safety, Quality, Longevity, and ______ ?:';
  englishChoices = ['Price', 'Reliability', 'Packaging', 'Look & Feel']
  hasSubmitted:boolean=false;
  
  choices =
  [
    {text:'',value:'1'},
    {text:'',value:'2'},
    {text:'',value:'3'},
    {text:'',value:'4'}
  ];

  question={
    text: this.selectedLanguage==='en' ? this.englishQuestion : this.arabicQuestion,
    choices: this.choices,
    correctAnswer:this.selectedLanguage==='en' ? "2" : "1",
  }

  selectedAnswer: string | null = null;
  isCorrect = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.AssignText();
    if(this.selectedLanguage==='ar'){
      this.Next = 'التالي';
      this.Submit = 'تصحيح';
      this.Direction='rtl';
    }else{
      this.Next = 'Next';
      this.Submit = 'Evaluate';
      this.Direction='ltr';
    }
  }

  AssignText(){
    for(let i=0; i<this.choices.length; i++){
      this.choices[i].text = this.selectedLanguage==='en'?this.englishChoices[i]:this.arabicChoices[i];
    }
  }

  submitAnswer() {
    const answer = {questionText:this.question.text, selectedAnswer:this.selectedAnswer};
    Filesystem.appendFile({
      path: 'quiz_responses.txt',
      data: JSON.stringify(answer) + '\n',
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    }).then(() => {
      console.log('Answer saved successfully');
    }).catch(err => {
      console.error('Error saving answer:', err);
    });
    if (this.selectedAnswer === this.question.correctAnswer) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
    this.hasSubmitted = true;
  }

  goToNextPage() {
    this.router.navigate(['/final']);
  }
}
