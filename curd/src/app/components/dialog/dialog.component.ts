import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/Student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public editData: Student,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  genderList: string[] = ['MALE', 'FEMALE', 'LGBTQ', 'Not Sure'];
  cityList: string[] = [
    'Ranchi',
    'Delhi',
    'Mumbai',
    'Pryagraj',
    'Utar Pradesh',
  ];

  studentForm!: FormGroup;

  showButton: string = 'Add';

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      id: [''],
      fullName: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [
        '',
        [Validators.required, Validators.pattern(/(\+)?(91)?( )?[789]\d{9}/g)],
      ],
      gender: ['', Validators.required],
      city: ['', Validators.required],
    });

    if (this.editData) {
      this.showButton = 'Update';
      this.studentForm.controls['id'].setValue(this.editData.id);
      this.studentForm.controls['fullName'].setValue(this.editData.fullName);
      this.studentForm.controls['mobile'].setValue(this.editData.mobile);
      this.studentForm.controls['gender'].setValue(this.editData.gender);
      this.studentForm.controls['city'].setValue(this.editData.city);
    }
  }

  operation() {
    if (this.studentForm.invalid) {
      this.toastr.warning('All Fields are required !', 'Fields Required ');
      return;
    }

    if (!this.editData) {
      this.studentService.addStudent(this.studentForm.value).subscribe((_) => {
        this.toastr.success('Student Added Successfully !', 'Student Added');
      });

      this.dialogRef.close('Add');
    } else {
      this.studentService
        .updateStudentDetails(this.studentForm.value)
        .subscribe((_) => {
          this.toastr.success(
            'Student is updated Succesfully !',
            'Student Updated'
          );
        });
      this.dialogRef.close('Update');
    }
  }
}
