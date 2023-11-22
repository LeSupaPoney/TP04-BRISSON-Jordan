import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../store/panier.state';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {
  @Select(PanierState.getNbItems) nbItems$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {}
}
