import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  student: Student = {
    name: '', email: '',
    id: undefined
  };
    numericId: number | null = null;
  constructor(private studentService: FormService) { }

  onSubmit(){
    this.studentService.addStudent(this.student).subscribe(response => {
      console.log('student added sucssfully with response:', response);
      this.numericId = response.numericId;
      console.log('student added successfully with numeric id id :', this.numericId);

    })
  }



  ngOnInit(): void {
  }

}
