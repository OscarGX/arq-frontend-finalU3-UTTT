import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

interface Example {
  username: string;
  password: string;
}

@Component({
  selector: 'app-observer-two',
  templateUrl: './observer-two.component.html',
  styleUrls: ['./observer-two.component.scss']
})
export class ObserverTwoComponent implements OnInit {
  examples: Example[] = [];
  counter = 0;
  constructor(private os: TestService) { }

  ngOnInit(): void {
    this.os.getExamples$().subscribe(data => {
      console.log('Data obs 2', data);
      this.examples = data;
    });
  }

  addPrro(): void {
    this.os.addExample({ username: `${this.counter++}`, password: '1234' });
    console.log('Agregando obs 2');
  }

}
