import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts = [
    {
      title: 'Tree',
      imgURL: 'assets/tree.jpg',
      text: 'Tree of knowledge'
    },
    {
      title: 'Mount Doom',
      imgURL: 'assets/mountain.png',
      text: 'Mountain of Doom'
    },
    {
      title: 'Meat Pie',
      imgURL: 'assets/meatpie.jpg',
      text: 'A lovely meat pie'
    }
  ]
}