import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Supp } from '@supp-regimen/api-interfaces';

@Component({
  selector: 'supp-regimen-supp-details',
  templateUrl: './supp-details.component.html',
  styleUrls: ['./supp-details.component.scss']
})
export class SuppDetailsComponent {
  currentSupp: Supp;
  originalTitle: string;

  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;

  @Input() set supp(value: Supp | null) {
    if (value) this.originalTitle = value.name;
    this.currentSupp = Object.assign({}, value)
  };

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.save.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  };

}
