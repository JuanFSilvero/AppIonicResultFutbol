import {Component, OnInit} from '@angular/core';
import {BasedatosService} from "../service/basedatos.service";

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.page.html',
  styleUrls: ['./goleadores.page.scss'],
})
export class GoleadoresPage implements OnInit {

  goleador: any;
  goleadores: any[] = [];

  constructor(private firestoreService: BasedatosService) {
  }

  ngOnInit() {
    this.goleador = {
      cant: 0,
      club: '',
      nombre: '',
      foto: ''
    };
    this.obtenerdatos();
  }

  obtenerdatos(): void {
    this.firestoreService.getGoleadores().subscribe(resp => {
      this.goleadores = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          cant: e.payload.doc.data().cant,
          club: e.payload.doc.data().club,
          nombre: e.payload.doc.data().nombre,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        };
      })
    })
    console.log(this.goleadores);
  }

}
