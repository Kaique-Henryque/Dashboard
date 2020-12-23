import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  readonly DADOS = [
    ['janeiro', 33],
    ['fevereiro', 68],
    ['marco', 49],
    ['abril', 15],
    ['maio', 80],
    ['junho', 22],
  ];

  constructor() {}

  obterDados(): Observable<any> {
    return new Observable((observable) => {
      observable.next(this.DADOS);
      observable.complete();
    });
  }
}
