import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video1',
  templateUrl: './video1.page.html',
  styleUrls: ['./video1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Video1Page implements OnInit {
  @ViewChild('videoPlayer',{static:false}) videoElement!:ElementRef<HTMLVideoElement>;
  videoSource: string = 'سلامة السيارة';
  Next:any;
  VideoHeading:any;
  isVideoPlaying:boolean=false;
  Direction:any;

  constructor(private router: Router) { }

  ngOnInit() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage === 'ar') {
      this.videoSource = 'assets/videos/ar1.mp4'; 
      this.Next = 'التالي';
      this.VideoHeading = 'سلامة السيارة';
      this.Direction='rtl';
    } else {
      this.videoSource = 'assets/videos/en1.mp4'; 
      this.Next = 'Next';
      this.VideoHeading = 'Customer Safety';
      this.Direction='ltr';
    }
  }

  playVideo(){
    const video = document.querySelector('video');
    if(video){
      video.play();
      this.isVideoPlaying=true;
    }
  }

  goToNextPage() {
    if(this.videoElement && this.videoElement.nativeElement){
      this.videoElement.nativeElement.pause();
      this.videoElement.nativeElement.currentTime = 0;
    }
    this.router.navigate(['/quiz1']); 
  }
}
