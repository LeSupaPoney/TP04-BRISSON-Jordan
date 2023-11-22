import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierItem } from '../models/panier-item';
import { RemoveProduit } from '../store/panier.actions';
import { PanierState } from '../store/panier.state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  items$: Observable<PanierItem[]>;

  constructor(private store: Store) {
    this.items$ = this.store.select(PanierState.getItems);
  }

  ngOnInit() {}

  removeItem(index: number) {
    this.store.dispatch(new RemoveProduit({ index }));
  }
}
