import { Component, OnInit } from '@angular/core';
import { PROGRAD } from '../prograds';
import { Prograds } from '../Mock-Prograds';
import { ProgradService } from '../prograd.service';
@Component({
  selector: 'app-pro-grad',
  templateUrl: './pro-grad.component.html',
  styleUrls: ['./pro-grad.component.css']
})
export class ProGradComponent implements OnInit {

  constructor(private progradService: ProgradService) {

  }

  getPrograds(): void {
    this.prograds = this.progradService.getPrograds();
  }

  prograds = Prograds;

  ngOnInit(): void {
    this.getPrograds;
  }

  selectedPrograd: PROGRAD;

  public onSelect(prograd: PROGRAD): void {
    this.selectedPrograd = prograd;
  }

}
