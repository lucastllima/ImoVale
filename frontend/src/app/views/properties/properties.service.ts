import { Propertie } from './properties.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private baseUrl: string = 'http://localhost:3001/properties'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  public get(propertieId?: string): Observable<any> {
    return propertieId ? this.getOne(propertieId) : this.getAll();
  }

  private getOne(propertieId): Observable<Propertie> {
    return this.http.get<Propertie>(`${this.baseUrl}/${propertieId}`);
  }

  private getAll(): Observable<Propertie[]> {
    return this.http.get<Propertie[]>(this.baseUrl);
  }

  public create(propertie: Propertie): Observable<Propertie> {
    return this.http.post<Propertie>(this.baseUrl, propertie);
  }

  public update(propertie: Propertie): Observable<Propertie> {
    return this.http.put<Propertie>(`${this.baseUrl}/${propertie.id}`, propertie);
  }

  public showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-danger'] : ['msg-success']
    })
  }
}
