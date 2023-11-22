import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Produit } from '../models/produit';

import { Store } from '@ngxs/store';
import { AddProduit } from '../../store/panier.actions';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [CatalogueService],
})
export class ProduitsComponent implements OnInit {
  recherche: string = '';
  produits$: Observable<Produit[]>;

  constructor(private catalogueService: CatalogueService, private store: Store) {
    this.produits$ = this.catalogueService.getProduits();
  }

  ngOnInit() {}
  
  
  addToPanier(produit: Produit) {
    const panierItem = { produit, quantite: 1 };
    this.store.dispatch(new AddProduit(panierItem));
  }	
}
