import { ITarefa } from './../../model/tarefa.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas: ITarefa[] = [
    {
      nome: 'Tarefa 1',
      status: 'pendente'
    },
    {
      nome: 'Tarefa 2',
      status: 'pendente'
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
