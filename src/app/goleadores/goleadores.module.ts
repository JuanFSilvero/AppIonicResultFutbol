import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoleadoresPageRoutingModule } from './goleadores-routing.module';

import { GoleadoresPage } from './goleadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoleadoresPageRoutingModule
  ],
  declarations: [GoleadoresPage]
})
export class GoleadoresPageModule {}
