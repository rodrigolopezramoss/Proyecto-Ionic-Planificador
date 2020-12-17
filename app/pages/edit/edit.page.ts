import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Tarea } from '../../model/tarea';
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  tarea: Tarea = {titulo: '', horIni: '', horFin:''};
  
  dia: string;

  constructor(
    private navCtrl : NavController,
    private tareasService: TareasService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.tarea = this.tareasService.getTarea(+id)
    }
  }

  saveTarea() {
    this.tareasService.saveTarea(this.tarea);
    this.navCtrl.pop();
  }
}
