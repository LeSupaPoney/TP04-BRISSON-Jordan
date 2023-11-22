import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierItem } from '../models/panier-item';
import { RemoveProduit, RemoveOneProduit, RemoveAllProduit } from '../store/panier.actions';
import { PanierState } from '../store/panier.state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Select(PanierState.getItems) items$!: Observable<PanierItem[]>;

  constructor(private store: Store) {}

  ngOnInit() {}

  removeItem(index: number) {
    this.store.dispatch(new RemoveProduit({ index }));
  }
  
  removeOneItem(ref: string) {
    this.store.dispatch(new RemoveOneProduit({ ref }));
  }

  removeAllItems(ref: string) {
    this.store.dispatch(new RemoveAllProduit({ ref }));
  }
}
