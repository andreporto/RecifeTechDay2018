
import { Injectable } from '@angular/core';
import { NativeStorage } from "@ionic-native/native-storage";
import { ITarefa } from '../../model/tarefa.interface';

@Injectable()
export class DadosLocaisProvider {

  constructor(private dadosLocais: NativeStorage) {
    console.log('Hello DadosLocaisProvider Provider');
  }

  async salvar(tarefas: ITarefa[]): Promise<string> {
    let mensagem;
    await this.dadosLocais.setItem('tarefas', tarefas)
    .then(
      () => mensagem = 'Dados salvos'
    )
    .catch(
      err => mensagem = 'Não foi possível salvar as tarefas localmente.'
    )
    return mensagem;
  }

  async recuperar():Promise<ITarefa[]> {
    let tarefas: ITarefa[];
    await this.dadosLocais.getItem('tarefas').then(
      dados => tarefas = dados,
      erro => tarefas = []
    )
    return tarefas;
  }

}
