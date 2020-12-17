import { Injectable } from '@angular/core';
import { Tarea } from '../model/tarea';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  

  dia:string;
  tareas: Tarea[] = [];
  contador: number = 2;


  constructor() {
    this.leerTareas();
    this.leerContador();
  }

  public getTareas(): Tarea[] {
    return this.tareas;
  }

  public getTarea(id: number): Tarea {
    return { ...this.tareas.filter(t => t.id === id)[0] };
  }

  pasoDia(dia: string) {
    this.dia = dia;
  }
  
  public saveTarea(t: Tarea) {
    if (t.id == undefined) { // tarea nueva
      t.id = this.contador++;
      t.dia = this.dia;
      this.tareas.push(t);
      console.log(t);
    } else { // edición de una tarea existente
      this.borrarTarea(t.id);
      this.tareas.push(t);
      console.log(t);
    }
  }

  public borrarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id != id);
  }

  async saveContador(tc:number){
    await Storage.set({
      key:'contador',
      value: tc.toString()
    });
  }

  async leerContador(){
    const obj = await Storage.get({key: 'contador'});
    console.log(obj);
    const {value } = obj;
    console.log(value);
    this.contador = +value;
  }

  async leerTareas() {
    const ret = await Storage.get({ key: 'tareas' });
    this.tareas =  JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }

  async saveTareas(){
    await Storage.set({
      key:'tareas',
      value: JSON.stringify(this.tareas)
    });
  }
}
