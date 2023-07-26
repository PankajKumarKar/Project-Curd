import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'curd';

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService
  ) {}
  ngOnInit(): void {}

  openDialog() {
    this.studentService.isHide();
    this.dialog
      .open(DialogComponent, {
        width: '40%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Add') {
          this.studentService.isDisplay();
        }
      });
  }
}
