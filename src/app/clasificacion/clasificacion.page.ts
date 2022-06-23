import {Component, OnInit} from '@angular/core';
import {BasedatosService} from "../service/basedatos.service";

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {

  grupo: any;
  grupoo: any;
  grupo1: any[] = [];
  grupo2: any[] = [];
  grupo3: any[] = [];
  grupo4: any[] = [];
  grupo5: any[] = [];
  grupo6: any[] = [];


  constructor(private firestoreService: BasedatosService) {
  }

  ngOnInit() {
    this.grupo = {
      club: "",
      pj: 0,
      tp: 0
    }

    this.obtenerdatosGrupo1Fase1();
    this.obtenerdatosGrupo2Fase1();
  }


  obtenerdatosGrupo1Fase1(): void {
    this.firestoreService.getGrupo1fase1().subscribe(resp => {
      this.grupo1 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupo1);
      //ordenar tabla por puntaje mayor
      this.grupo1= this.grupo1.sort((unEquipo, otroEquipo) =>  otroEquipo.tp - unEquipo.tp);
      //console.log(this.grupo1);
    })

  }

  obtenerdatosGrupo2Fase1(): void {
    this.firestoreService.getGrupo2fase1().subscribe(resp => {
      this.grupo2 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupos);
      this.grupo2= this.grupo2.sort((unEquipo, otroEquipo) =>  otroEquipo.tp - unEquipo.tp);
    })

  }


}
