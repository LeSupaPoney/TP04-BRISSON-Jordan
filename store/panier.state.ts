import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PanierItem } from '../models/panier-item';
import { AddProduit, RemoveProduit, RemoveOneProduit, RemoveAllProduit } from './panier.actions';

export class PanierStateModel {
  public items: PanierItem[] = [];
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    items: []
  }
})
export class PanierState {
  @Selector()
  static getNbItems(state: PanierStateModel) {
    return state.items.length;
  }

  @Selector()
  static getItems(state: PanierStateModel) {
    return state.items;
  }

@Action(AddProduit)
add({getState, patchState}: StateContext<PanierStateModel>, { payload }: AddProduit) {
  const state = getState();
  const produitIndex = state.items.findIndex(item => item.produit.ref === payload.produit.ref);

  if (produitIndex > -1) {
    state.items[produitIndex].quantite += payload.quantite;
    patchState({ items: [...state.items] });
  } else {
    patchState({ items: [...state.items, payload] });
  }
}

@Action(RemoveOneProduit)
removeOne({getState, patchState}: StateContext<PanierStateModel>, { payload }: RemoveOneProduit) {
  const state = getState();
  const produitIndex = state.items.findIndex(item => item.produit.ref === payload.ref);

  if (produitIndex > -1 && state.items[produitIndex].quantite > 1) {
    state.items[produitIndex].quantite -= 1;
    patchState({ items: [...state.items] });
  } else if (produitIndex > -1) {
    // Si la quantité est 1, supprimez l'élément entier
    let updatedItems = [...state.items];
    updatedItems.splice(produitIndex, 1);
    patchState({ items: updatedItems });
  }
}

@Action(RemoveAllProduit)
removeAll({getState, patchState}: StateContext<PanierStateModel>, { payload }: RemoveAllProduit) {
  const updatedItems = getState().items.filter(item => item.produit.ref !== payload.ref);
  patchState({ items: updatedItems });
}
}