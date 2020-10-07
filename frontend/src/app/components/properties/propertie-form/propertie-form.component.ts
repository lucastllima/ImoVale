import { ActivatedRoute, Router } from '@angular/router';
import { Propertie } from '../../../views/properties/properties.model';
import { PropertiesService } from '../../../views/properties/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertie-form',
  templateUrl: './propertie-form.component.html',
  styleUrls: ['./propertie-form.component.scss']
})
export class PropertieFormComponent implements OnInit {

  public propertie: Propertie = {
    title: '',
    typeAnnouncement: null,
    price: null
  }
  public pageTitle = 'Novo Imóvel';
  public propertieId = null;

  constructor(private propertieService: PropertiesService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.propertieId = this.route.snapshot.paramMap.get('id');
    if (this.propertieId) {
      this.pageTitle = 'Atualizar Imóvel';
      this.propertieService.get(this.propertieId).subscribe((propertie) => {
        this.propertie = propertie;
      }, () => {
        this.propertieService.showMessage('Imóvel não encontrado na base de dados.', true);
        this.router.navigate(['imoveis']);
      })
    }
  }

  public submit(): void {
    this.propertieId ? this.update() : this.create();
  }

  public create(): void {
    this.propertieService.create(this.propertie).subscribe(() => {
      this.propertieService.showMessage('Imóvel cadastrado com sucesso.');
      this.router.navigate(['/imoveis'])
    }, () => {
      this.propertieService.showMessage('Falha ao cadastrar imóvel.', true);
    })
  }

  public update(): void {
    this.propertieService.update(this.propertie).subscribe(() => {
      this.propertieService.showMessage('Imóvel Atualizado com sucesso.');
      this.router.navigate(['/imoveis'])
    }, () => {
      this.propertieService.showMessage('Falha ao atualizar imóvel.', true);
    })
  }

  public cancel(): void {
    this.router.navigate(['imoveis']);
  }

}
