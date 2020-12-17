import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Tarea } from '../../model/tarea';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-domingo',
  templateUrl: './domingo.page.html',
  styleUrls: ['./domingo.page.scss'],
})
export class DomingoPage{

  dia:string = 'domingo' ;
  
  constructor(
    private tareasService: TareasService,
    private router: Router,
    private alertController: AlertController
  ) { }

  edicion(id: number) {
    console.log(this.dia);
    this.tareasService.pasoDia(this.dia);
    this.router.navigateByUrl(`/edit${id != undefined ? '/' + id : ''}`);
  }
  borrarTarea(id: number) {
    this.tareasService.borrarTarea(id);
  }

  async presentAlertConfirm(t: Tarea) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro que quieres borrar la tarea <strong> ${t.titulo}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.borrarTarea(t.id);
          }
        }
      ]
    });
  
    await alert.present();
  }
}
