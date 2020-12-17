import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  irA(dia: string){
    this.router.navigateByUrl(`/${dia}`);
  }
}
