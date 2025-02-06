import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video2',
  templateUrl: './video2.page.html',
  styleUrls: ['./video2.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Video2Page implements OnInit {
  @ViewChild('videoPlayer',{static:false}) videoElement!:ElementRef<HTMLVideoElement>;
  videoSource: string = '';
  Next:any;
  constructor(private router: Router) { }

  ngOnInit() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage === 'ar') {
      this.videoSource = 'assets/videos/ar1.mp4'; 
      this.Next = 'التالي';
    } else {
      this.videoSource = 'assets/videos/en1.mp4'; 
      this.Next = 'Next';
    }
  }

  goToNextPage() {
    if(this.videoElement && this.videoElement.nativeElement){
      this.videoElement.nativeElement.pause();
      this.videoElement.nativeElement.currentTime = 0;
    }
    this.router.navigate(['/quiz2']); 
  }
}
