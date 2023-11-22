import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PanierItem } from '../models/panier-item';
import { AddProduit, RemoveProduit } from './panier.actions';

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

  @Action(AddProduit)
  add({getState, patchState}: StateContext<PanierStateModel>, { payload }: AddProduit) {
    const state = getState();
    patchState({ items: [...state.items, payload] });
  }

  @Action(RemoveProduit)
  remove({getState, patchState}: StateContext<PanierStateModel>, { payload }: RemoveProduit) {
    patchState({ items: getState().items.filter(item => item.produit.ref !== payload.produit.ref) });
  }
}
