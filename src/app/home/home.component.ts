import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService,) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.httpService.getHeroes()
    .subscribe(data => console.log(data));
  }
}
