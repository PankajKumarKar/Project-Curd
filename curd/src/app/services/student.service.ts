import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AddStudentUrl,
  deleteStudentByIdUrl,
  getAllStudentUrl,
  getStudentByIdUrl,
  updateStudentByIdUrl,
} from '../constants/http_urls';
import { Student } from '../models/Student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private showAllStudent = new BehaviorSubject<boolean>(false);
  currentStatus = this.showAllStudent.asObservable();

  isDisplay() {
    this.showAllStudent.next(true);
  }

  isHide() {
    this.showAllStudent.next(false);
  }

  //Post
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(AddStudentUrl, student);
  }

  //Get All Student Data
  getAllStudentDetails(): Observable<Student[]> {
    return this.http.get<Student[]>(getAllStudentUrl);
  }

  //Update Student by Id

  updateStudentDetails(student: Student): Observable<Student> {
    return this.http.put<Student>(updateStudentByIdUrl, student);
  }

  //Delete  Student By Id

  deleteStudent(studentId: string): Observable<Student> {
    return this.http.delete<Student>(deleteStudentByIdUrl + studentId);
  }

  //Get Data By Id
  getDataById(id: string): Observable<Student> {
    return this.http.get<Student>(getStudentByIdUrl + id);
  }
}
