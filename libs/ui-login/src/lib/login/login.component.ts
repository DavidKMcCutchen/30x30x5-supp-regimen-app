import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'supp-regimen-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.router.navigate(['/supps']);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
}
