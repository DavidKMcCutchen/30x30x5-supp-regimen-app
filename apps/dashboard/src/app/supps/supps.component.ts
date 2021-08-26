import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supp, emptySupp } from '@supp-regimen/api-interfaces';
import { SuppFacade } from '@supp-regimen/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'supp-regimen-supps',
  templateUrl: './supps.component.html',
  styleUrls: ['./supps.component.scss']
})
export class SuppComponent implements OnInit {
  supps$: Observable<Supp[]> = this.suppFacade.allSupps$;
  selectedSupp$: Observable<Supp> = this.suppFacade.selectedSupp$;

  form: FormGroup;

  constructor(
    private suppFacade: SuppFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.reset();
    this.suppFacade.loadSupps();
  };

  selectedSupp(supp: Supp) {
    this.suppFacade.selectSupp(supp.id);
    this.form.patchValue(supp);
  };

  reset() {
    this.selectedSupp(emptySupp);
    this.form.reset();
  };

  createSupp(supp: Supp) {
    this.suppFacade.createSupp(supp);
    this.form.reset();
  };

  updateSupp(supp: Supp) {
    this.suppFacade.updateSupp(supp);
    this.form.reset();
  };

  saveSupp(supp: Supp) {
    supp.id
    ? this.suppFacade.updateSupp(supp)
    : this.suppFacade.createSupp(supp);
  };

  deleteSupp(suppId: string) {
    this.suppFacade.deleteSupp(suppId);
    this.form.reset();
  };

  cancel() {
    this.reset();
  };

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      specialPay: ['']
    })
  }



}
