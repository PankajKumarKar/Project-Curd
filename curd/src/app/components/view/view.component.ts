import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  studentData!: Student;

  constructor(
    activateRoute: ActivatedRoute,
    private studentService: StudentService
  ) {
    activateRoute.params.subscribe((student) => {
      let id = student['id'];
      this.getDataById(id);
    });
  }

  ngOnInit(): void {}

  getDataById(id: string) {
    this.studentService.getDataById(id).subscribe((student) => {
      this.studentData = student;
    });
  }
}
