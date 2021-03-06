import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseEndpoint = 'http://localhost:8090/api/alumnos';

  constructor(private http: HttpClient) { }

  public listar(): Observable<Alumno[]>{

    return this.http.get<Alumno[]>(this.baseEndpoint);
  }
}
