import {Component, OnInit} from '@angular/core';
import {BasedatosService} from "../service/basedatos.service";

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {
  private selectedSegment: string='segment1';
  segment1: boolean = true;
  segment2: boolean = false;
  segment3: boolean = false;
  segment4: boolean = false;
  segment5: boolean = false;

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
      tp: 0,
      foto:""
    }

    this.obtenerdatosGrupo1Fase1();
    this.obtenerdatosGrupo2Fase1();
    this.obtenerdatosGrupo3Fase1();
    this.obtenerdatosGrupo4Fase1();
    this.obtenerdatosGrupo5Fase1();
    this.obtenerdatosGrupo6Fase1();
  }


  obtenerdatosGrupo1Fase1(): void {
    this.firestoreService.getGrupo1fase1().subscribe(resp => {
      this.grupo1 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupo1);
      //ordenar tabla por puntaje mayor
      this.grupo1 = this.grupo1.sort((unEquipo, otroEquipo) => otroEquipo.tp - unEquipo.tp);
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
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupos);
      this.grupo2 = this.grupo2.sort((unEquipo, otroEquipo) => otroEquipo.tp - unEquipo.tp);
    })
  }

  obtenerdatosGrupo3Fase1(): void {
    this.firestoreService.getGrupo3fase1().subscribe(resp => {
      this.grupo3 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupos);
      this.grupo3 = this.grupo3.sort((unEquipo, otroEquipo) => otroEquipo.tp - unEquipo.tp);
    })
  }

  obtenerdatosGrupo4Fase1(): void {
    this.firestoreService.getGrupo4fase1().subscribe(resp => {
      this.grupo4 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupos);
      this.grupo4 = this.grupo4.sort((unEquipo, otroEquipo) => otroEquipo.tp - unEquipo.tp);
    })
  }

  obtenerdatosGrupo5Fase1(): void {
    this.firestoreService.getGrupo5fase1().subscribe(resp => {
      this.grupo5 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupos);
      this.grupo5 = this.grupo5.sort((unEquipo, otroEquipo) => otroEquipo.tp - unEquipo.tp);
    })
  }

  obtenerdatosGrupo6Fase1(): void {
    this.firestoreService.getGrupo6fase1().subscribe(resp => {
      this.grupo6 = resp.map((e: any) => {
        //console.log(e.payload.doc.data());
        return {
          club: e.payload.doc.data().club,
          pj: e.payload.doc.data().pj,
          tp: e.payload.doc.data().tp,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
      //console.log(this.grupos);
      this.grupo6 = this.grupo6.sort((unEquipo, otroEquipo) => otroEquipo.tp - unEquipo.tp);
    })
  }

  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value;
    if (this.selectedSegment == "segment1") {
      this.segment1 = true;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = false;
      this.segment5 = false;
    }else if (this.selectedSegment == "segment2"){
      this.segment1 = false;
      this.segment2 = true;
      this.segment3 = false;
      this.segment4 = false;
      this.segment5 = false;
    }else if (this.selectedSegment == "segment3"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = true;
      this.segment4 = false;
      this.segment5 = false;
    }else if (this.selectedSegment == "segment4"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = true;
      this.segment5 = false;
    }else if (this.selectedSegment == "segment5"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = true;
      this.segment5 = false;
    }
  }


}
