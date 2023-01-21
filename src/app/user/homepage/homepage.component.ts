import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  url: string = "../../../assets/image/pan/pan1.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }

  ngOnInit(): void {
  }

}
