import { PanierItem } from '../models/panier-item';


export class AddProduit {
  static readonly type = '[Panier] Add';
  constructor(public payload: PanierItem) {}
}

export class RemoveProduit {
  static readonly type = '[Panier] Remove';
  constructor(public payload: PanierItem) {}
}
