import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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
  total$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.total$ = this.items$.pipe(
      map(items => items.reduce((acc, item) => acc + (item.produit.prix * item.quantite), 0))
    );
  }

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
