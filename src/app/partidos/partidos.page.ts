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
  grupo2fecha1fase1: any[] = [];
  grupo2fecha2fase1: any[] = [];
  grupo2fecha3fase1: any[] = [];
  grupo2fecha4fase1: any[] = [];
  grupo2fecha5fase1: any[] = [];
  grupo2fecha6fase1: any[] = [];
  grupo3fecha1fase1: any[] = [];
  grupo3fecha2fase1: any[] = [];
  grupo3fecha3fase1: any[] = [];
  grupo3fecha4fase1: any[] = [];
  grupo3fecha5fase1: any[] = [];
  grupo3fecha6fase1: any[] = [];
  grupo4fecha1fase1: any[] = [];
  grupo4fecha2fase1: any[] = [];
  grupo4fecha3fase1: any[] = [];
  grupo4fecha4fase1: any[] = [];
  grupo4fecha5fase1: any[] = [];
  grupo4fecha6fase1: any[] = [];
  grupo5fecha1fase1: any[] = [];
  grupo5fecha2fase1: any[] = [];
  grupo5fecha3fase1: any[] = [];
  grupo5fecha4fase1: any[] = [];
  grupo5fecha5fase1: any[] = [];
  grupo5fecha6fase1: any[] = [];
  grupo6fecha1fase1: any[] = [];
  grupo6fecha2fase1: any[] = [];
  grupo6fecha3fase1: any[] = [];
  grupo6fecha4fase1: any[] = [];
  grupo6fecha5fase1: any[] = [];
  grupo6fecha6fase1: any[] = [];

  constructor(private firestoreService: BasedatosService) {
  }

  ngOnInit() {
    this.partido = {
      equipolocal: "",
      equipovisita: "",
      fecha: "",
      golesequipolocal: "",
      golesequipovisita: "",
      logoel:"",
      logoev:""
    }

    this.obtenerdatosGrupo1Fecha1Fase1();
    this.obtenerdatosGrupo1Fecha2Fase1();
    this.obtenerdatosGrupo1Fecha3Fase1();
    this.obtenerdatosGrupo1Fecha4Fase1();
    this.obtenerdatosGrupo1Fecha5Fase1();
    this.obtenerdatosGrupo1Fecha6Fase1();
    this.obtenerdatosGrupo2Fecha1Fase1();
    this.obtenerdatosGrupo2Fecha2Fase1();
    this.obtenerdatosGrupo2Fecha3Fase1();
    this.obtenerdatosGrupo2Fecha4Fase1();
    this.obtenerdatosGrupo2Fecha5Fase1();
    this.obtenerdatosGrupo2Fecha6Fase1();
    this.obtenerdatosGrupo3Fecha1Fase1();
    this.obtenerdatosGrupo3Fecha2Fase1();
    this.obtenerdatosGrupo3Fecha3Fase1();
    this.obtenerdatosGrupo3Fecha4Fase1();
    this.obtenerdatosGrupo3Fecha5Fase1();
    this.obtenerdatosGrupo3Fecha6Fase1();
    this.obtenerdatosGrupo4Fecha1Fase1();
    this.obtenerdatosGrupo4Fecha2Fase1();
    this.obtenerdatosGrupo4Fecha3Fase1();
    this.obtenerdatosGrupo4Fecha4Fase1();
    this.obtenerdatosGrupo4Fecha5Fase1();
    this.obtenerdatosGrupo4Fecha6Fase1();
    this.obtenerdatosGrupo5Fecha1Fase1();
    this.obtenerdatosGrupo5Fecha2Fase1();
    this.obtenerdatosGrupo5Fecha3Fase1();
    this.obtenerdatosGrupo5Fecha4Fase1();
    this.obtenerdatosGrupo5Fecha5Fase1();
    this.obtenerdatosGrupo5Fecha6Fase1();
    this.obtenerdatosGrupo6Fecha1Fase1();
    this.obtenerdatosGrupo6Fecha2Fase1();
    this.obtenerdatosGrupo6Fecha3Fase1();
    this.obtenerdatosGrupo6Fecha4Fase1();
    this.obtenerdatosGrupo6Fecha5Fase1();
    this.obtenerdatosGrupo6Fecha6Fase1();
  }

  //Fase 1
  //Grupo 1
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
          logoel: e.payload.doc.data().logoel,
          logoev: e.payload.doc.data().logoev,
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

  //Grupo2
  obtenerdatosGrupo2Fecha1Fase1() {
    this.firestoreService.getGrupo2fecha1fase1().subscribe(resp => {
      this.grupo2fecha1fase1 = resp.map((e: any) => {
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
      //console.log(this.grupo2fecha1fase1);
    })
  }

  obtenerdatosGrupo2Fecha2Fase1() {
    this.firestoreService.getGrupo2fecha2fase1().subscribe(resp => {
      this.grupo2fecha2fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo2Fecha3Fase1() {
    this.firestoreService.getGrupo2fecha3fase1().subscribe(resp => {
      this.grupo2fecha3fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo2Fecha4Fase1() {
    this.firestoreService.getGrupo2fecha4fase1().subscribe(resp => {
      this.grupo2fecha4fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo2Fecha5Fase1() {
    this.firestoreService.getGrupo2fecha5fase1().subscribe(resp => {
      this.grupo2fecha5fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo2Fecha6Fase1() {
    this.firestoreService.getGrupo2fecha6fase1().subscribe(resp => {
      this.grupo2fecha6fase1 = resp.map((e: any) => {
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

  //Grupo3
  obtenerdatosGrupo3Fecha1Fase1() {
    this.firestoreService.getGrupo3fecha1fase1().subscribe(resp => {
      this.grupo3fecha1fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo3Fecha2Fase1() {
    this.firestoreService.getGrupo3fecha2fase1().subscribe(resp => {
      this.grupo3fecha2fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo3Fecha3Fase1() {
    this.firestoreService.getGrupo3fecha3fase1().subscribe(resp => {
      this.grupo3fecha3fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo3Fecha4Fase1() {
    this.firestoreService.getGrupo3fecha4fase1().subscribe(resp => {
      this.grupo3fecha4fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo3Fecha5Fase1() {
    this.firestoreService.getGrupo3fecha5fase1().subscribe(resp => {
      this.grupo3fecha5fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo3Fecha6Fase1() {
    this.firestoreService.getGrupo3fecha6fase1().subscribe(resp => {
      this.grupo3fecha6fase1 = resp.map((e: any) => {
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

  //Grupo4
  obtenerdatosGrupo4Fecha1Fase1() {
    this.firestoreService.getGrupo4fecha1fase1().subscribe(resp => {
      this.grupo4fecha1fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo4Fecha2Fase1() {
    this.firestoreService.getGrupo4fecha2fase1().subscribe(resp => {
      this.grupo4fecha2fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo4Fecha3Fase1() {
    this.firestoreService.getGrupo4fecha3fase1().subscribe(resp => {
      this.grupo4fecha3fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo4Fecha4Fase1() {
    this.firestoreService.getGrupo4fecha4fase1().subscribe(resp => {
      this.grupo4fecha4fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo4Fecha5Fase1() {
    this.firestoreService.getGrupo4fecha5fase1().subscribe(resp => {
      this.grupo4fecha5fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo4Fecha6Fase1() {
    this.firestoreService.getGrupo4fecha6fase1().subscribe(resp => {
      this.grupo4fecha6fase1 = resp.map((e: any) => {
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

  //Grupo5
  obtenerdatosGrupo5Fecha1Fase1() {
    this.firestoreService.getGrupo5fecha1fase1().subscribe(resp => {
      this.grupo5fecha1fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo5Fecha2Fase1() {
    this.firestoreService.getGrupo5fecha2fase1().subscribe(resp => {
      this.grupo5fecha2fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo5Fecha3Fase1() {
    this.firestoreService.getGrupo5fecha3fase1().subscribe(resp => {
      this.grupo5fecha3fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo5Fecha4Fase1() {
    this.firestoreService.getGrupo5fecha4fase1().subscribe(resp => {
      this.grupo5fecha4fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo5Fecha5Fase1() {
    this.firestoreService.getGrupo5fecha5fase1().subscribe(resp => {
      this.grupo5fecha5fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo5Fecha6Fase1() {
    this.firestoreService.getGrupo5fecha6fase1().subscribe(resp => {
      this.grupo5fecha6fase1 = resp.map((e: any) => {
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

  //Grupo6
  obtenerdatosGrupo6Fecha1Fase1() {
    this.firestoreService.getGrupo6fecha1fase1().subscribe(resp => {
      this.grupo6fecha1fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo6Fecha2Fase1() {
    this.firestoreService.getGrupo6fecha2fase1().subscribe(resp => {
      this.grupo6fecha2fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo6Fecha3Fase1() {
    this.firestoreService.getGrupo6fecha3fase1().subscribe(resp => {
      this.grupo6fecha3fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo6Fecha4Fase1() {
    this.firestoreService.getGrupo6fecha4fase1().subscribe(resp => {
      this.grupo6fecha4fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo6Fecha5Fase1() {
    this.firestoreService.getGrupo6fecha5fase1().subscribe(resp => {
      this.grupo6fecha5fase1 = resp.map((e: any) => {
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

  obtenerdatosGrupo6Fecha6Fase1() {
    this.firestoreService.getGrupo6fecha6fase1().subscribe(resp => {
      this.grupo6fecha6fase1 = resp.map((e: any) => {
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
