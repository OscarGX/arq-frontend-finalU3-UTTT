import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface Example {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class TestService {

  private exjemplos$ = new Subject<Example[]>();
  private examples: Example[] = [];

  constructor() { }

  addExample(value: Example): void {
    // depende el retorno igual cracks.
    setTimeout(() => {
      console.log('La petición http responde aquí');
      this.examples.push(value);
      this.exjemplos$.next(this.examples);
    }, 3000);
  }

  getExamples$(): Observable<Example[]> {
    return this.exjemplos$.asObservable();
  }
}
