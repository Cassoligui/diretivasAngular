import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ambiente-angular';
  count = 0;
  text = "";
  pessoas = [
    {
      nome: "Guilherme",
      sobrenome: "Cassoli"
    },
    {
      nome: "Maria",
      sobrenome: "Silva"
    },
    {
      nome: "José",
      sobrenome: "Souza"
    },
    {
      nome: "Marcio",
      sobrenome: "Santos"
    }

  ];

  constructor() {

  }
  ngOnInit() {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }
  clicou(): void {
    console.log('Clicou em mim')
  }
}

