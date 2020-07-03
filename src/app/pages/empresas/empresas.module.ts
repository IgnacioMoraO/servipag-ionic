import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresasPage } from './empresas.page';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: EmpresasPage }])
  ],
  declarations: [EmpresasPage, HeaderComponent]
})
export class EmpresasPageModule { }
