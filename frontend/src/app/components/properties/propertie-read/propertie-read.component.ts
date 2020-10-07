import { DialogService } from './../../../common/services/dialog.service';
import { PropertiesService } from './../../../views/properties/properties.service';
import { Propertie } from './../../../views/properties/properties.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertie-read',
  templateUrl: './propertie-read.component.html',
  styleUrls: ['./propertie-read.component.scss']
})
export class PropertieReadComponent implements OnInit {

  public properties: Propertie[];
  public displayedColumns = [
    'id',
    'title',
    'typeAnnouncement',
    'price',
    'actions'
  ]


  constructor(private propertiesService: PropertiesService, private dialog: DialogService) { }

  ngOnInit() {
    this.getProperties();
  }

  public getProperties() {
    this.propertiesService.get().subscribe((res) => this.properties = res);
  }

  public delete(propertie: Propertie) {
    this.dialog.confirmDeletePropertie(propertie.title).subscribe((res) => {
      if (res) {
        this.getProperties();
      }
    });
  }

}
