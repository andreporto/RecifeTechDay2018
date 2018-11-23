import { ITarefa } from './../../model/tarefa.interface';
import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  onExcluir(t: ITarefa) {
    this.tarefas.splice(this.tarefas.indexOf(t),1);
  }

  onAdicionar() {
    let prompt = this.alertCtrl.create({
      title: 'Nova Tarefa',
      message: "Informe o nome da nova tarefa",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome da Tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Foi acionado o botão cancelar');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let t: ITarefa = {
              nome: data.nome,
              status: 'pendente'
            };
            this.tarefas.push(t);
          }
        }
      ]
    });
    prompt.present();
  }

  onAlterar(t: ITarefa, linha: ItemSliding) {
    let prompt = this.alertCtrl.create({
      title: 'Alteração de Tarefa',
      message: `Informe o novo nome da tarefa "${t.nome}"`,
      inputs: [
        {
          name: 'nome',
          placeholder: 'Novo nome'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Foi acionado o botão cancelar');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let index = this.tarefas.indexOf(t);
            t.nome = data.nome;
            this.tarefas[index] = t;
            linha.close();
          }
        }
      ]
    });
    prompt.present();
  }
}
