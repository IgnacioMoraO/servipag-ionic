import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMovilServipagService } from './app-movil-servipag.service';
import { EmpresasService } from './empresas.service';


@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [AppMovilServipagService, EmpresasService],
    providers: [AppMovilServipagService, EmpresasService],
})
export class ServiceModule { }
