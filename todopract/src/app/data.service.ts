import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './todo/Students';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllData(){
   return this.http.get<Students[]>("http://localhost:8086/student/read/all");
  }

  saveStudent(stud:Students){
    return this.http.post<Students[]>("http://localhost:8086/student/saveStudent",stud);
  }
}

