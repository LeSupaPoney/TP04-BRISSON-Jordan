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

  @Selector()
  static getItems(state: PanierStateModel) {
    return state.items;
  }

  @Action(AddProduit)
  add({getState, patchState}: StateContext<PanierStateModel>, { payload }: AddProduit) {
    const state = getState();
    patchState({ items: [...state.items, payload] });
  }

@Action(RemoveProduit)
remove({getState, patchState}: StateContext<PanierStateModel>, { payload }: RemoveProduit) {
  const updatedItems = getState().items.filter((_, index) => index !== payload.index);
  patchState({ items: updatedItems });
}
}
