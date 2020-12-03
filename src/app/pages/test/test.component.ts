import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

interface Example {
  username: string;
  password: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  value: string;
  examples: Example[] = [];

  constructor(private ts: TestService) { }

  ngOnInit(): void {
    this.ts.getExamples$().subscribe(data => {
      console.log('Subscriber One', data);
      this.examples = data;
    });
  }

  save(): void {
    if (this.value) {
      this.ts.addExample({ username: this.value, password: '1234' });
      console.log('Valor agregado Sub 1');
    }
  }

}
