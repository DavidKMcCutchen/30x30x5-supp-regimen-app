import { Component } from '@angular/core';

@Component({
  selector: 'supp-regimen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Supplements';
  links = [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'supps', icon: 'view_list', title: 'Supplements'}
  ] 
}
