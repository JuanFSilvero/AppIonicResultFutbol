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
  grupo1fecha2fase1: any[] = [];
  grupo1fecha3fase1: any[] = [];
  grupo1fecha4fase1: any[] = [];
  grupo1fecha5fase1: any[] = [];
  grupo1fecha6fase1: any[] = [];

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
    this.obtenerdatosGrupo1Fecha2Fase1();
    this.obtenerdatosGrupo1Fecha3Fase1();
    this.obtenerdatosGrupo1Fecha4Fase1();
    this.obtenerdatosGrupo1Fecha5Fase1();
    this.obtenerdatosGrupo1Fecha6Fase1();
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

  obtenerdatosGrupo1Fecha2Fase1() {
    this.firestoreService.getGrupo1fecha2fase1().subscribe(resp => {
      this.grupo1fecha2fase1 = resp.map((e: any) => {
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
      //console.log(this.grupo1fecha2fase1);
    })
  }

  obtenerdatosGrupo1Fecha3Fase1() {
    this.firestoreService.getGrupo1fecha3fase1().subscribe(resp => {
      this.grupo1fecha3fase1 = resp.map((e: any) => {
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
      //console.log(this.grupo1fecha3fase1);
    })
  }

  obtenerdatosGrupo1Fecha4Fase1() {
    this.firestoreService.getGrupo1fecha4fase1().subscribe(resp => {
      this.grupo1fecha4fase1 = resp.map((e: any) => {
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
      //console.log(this.grupo1fecha4fase1);
    })
  }

  obtenerdatosGrupo1Fecha5Fase1() {
    this.firestoreService.getGrupo1fecha5fase1().subscribe(resp => {
      this.grupo1fecha5fase1 = resp.map((e: any) => {
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
      //console.log(this.grupo1fecha5fase1);
    })
  }

  obtenerdatosGrupo1Fecha6Fase1() {
    this.firestoreService.getGrupo1fecha6fase1().subscribe(resp => {
      this.grupo1fecha6fase1 = resp.map((e: any) => {
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
      //console.log(this.grupo1fecha6fase1);
    })
  }
}
