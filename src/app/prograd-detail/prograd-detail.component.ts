import { Component, OnInit, Input } from '@angular/core';
import { PROGRAD } from '../prograds';
import { Prograds } from '../Mock-Prograds';
@Component({
  selector: 'app-prograd-detail',
  templateUrl: './prograd-detail.component.html',
  styleUrls: ['./prograd-detail.component.css']
})
export class ProgradDetailComponent implements OnInit {

  @Input prograds: PROGRAD;

  constructor() { }

  ngOnInit(): void {
  }
  selectedPrograd: PROGRAD;

  public onSelect(prograd: PROGRAD): void {
    this.selectedPrograd = prograd;
  }

}
