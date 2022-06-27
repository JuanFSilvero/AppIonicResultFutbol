import {Component, OnInit} from '@angular/core';
import {BasedatosService} from "../service/basedatos.service";

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss'],
})
export class PartidosPage implements OnInit {
  partido: any;
  grupo1fecha1fase1: any[] = [];
  grupo2: any[] = [];
  grupo3: any[] = [];
  grupo4: any[] = [];
  grupo5: any[] = [];
  grupo6: any[] = [];

  constructor(private firestoreService: BasedatosService) {
  }

  ngOnInit() {
    this.partido = {
      equipolocal: "",
      equipovisita: "",
      fecha: "",
      golesequipolocal: "",
      golesequipovisita: ""
    }

    this.obtenerdatosGrupo1Fecha1Fase1();
  }

  obtenerdatosGrupo1Fecha1Fase1() {
    this.firestoreService.getGrupo1fecha1fase1().subscribe(resp => {
      this.grupo1fecha1fase1 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          equipolocal: e.payload.doc.data().equipolocal,
          equipovisita: e.payload.doc.data().equipovisita,
          fecha: e.payload.doc.data().fecha,
          golesequipolocal: e.payload.doc.data().golesequipolocal,
          golesequipovisita: e.payload.doc.data().golesequipovisita,
          idFirebase: e.payload.doc.id
        }
      })
      console.log(this.grupo1fecha1fase1);
    })
  }
}
