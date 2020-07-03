import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmpresas } from '../models/empresa.models';

import { services } from '../mocks/list-empresas.mocks';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<any[]> {
    return of(services);
  }
}
