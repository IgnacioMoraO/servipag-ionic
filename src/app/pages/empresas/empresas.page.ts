import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/@core/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {

  services: any[];

  constructor(private empresasService: EmpresasService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.empresasService.getServices().subscribe(data => {
      this.services = data;
    });
  }

}
