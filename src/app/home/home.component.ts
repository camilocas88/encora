import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  posts: any[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getPosts().subscribe(data => {
            this.posts = data;
        });
    }
}
