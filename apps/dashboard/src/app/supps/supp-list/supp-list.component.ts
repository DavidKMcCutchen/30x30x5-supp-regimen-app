import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Supp } from '@supp-regimen/api-interfaces';

@Component({
  selector: 'supp-regimen-supp-list',
  templateUrl: './supp-list.component.html',
  styleUrls: ['./supp-list.component.scss']
})
export class SuppListComponent {
  @Input() supps: Supp[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
