import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})

export class SinglecardComponent implements OnInit {
  @Input() title ='';
  @Input() imgURL ='';
  @Input() text ='';

  constructor() { }

  ngOnInit(): void {
  }

}