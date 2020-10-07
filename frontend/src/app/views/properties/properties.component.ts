import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateCreatePropertie(): void {
    this.router.navigate(['/imoveis/adicionar']);
  }
}
