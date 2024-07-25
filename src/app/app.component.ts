import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employeeInfo';
  registerForm: FormGroup; // Corrected type declaration

  constructor(
    private _tostr: ToastrService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initialStateOfregisterForm(); // Initialize the form in ngOnInit
  }

  initialStateOfregisterForm() {
    this.registerForm = this._formBuilder.group({
      // Add your form controls here
      id: [0], // Example form control
      jobTitle: ['', Validators.required],
      experience: ['', Validators.required],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }
}
