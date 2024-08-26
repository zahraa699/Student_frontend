import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {Student} from '../student.model'
@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:3000/students-data';

  constructor(private http:  HttpClient ) {}

  // }
  // this is old before updated for id 
  // addStudent(student: Student){
  //   return this.http.post<Student>(this.apiUrl, student);

  // }
  addStudent(student: Student): Observable<{numericId: number, id:string, name: string, email: string}>{
    return this.http.post<{numericId: number, id:string, name: string, email: string}>(this.apiUrl, student);
  }

  getStudent() {
    return this.http.get<Student[]>(this.apiUrl);
  }
}