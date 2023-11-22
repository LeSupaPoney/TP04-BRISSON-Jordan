import { PanierItem } from '../models/panier-item';


export class AddProduit {
  static readonly type = '[Panier] Add';
  constructor(public payload: PanierItem) {}
}

export class RemoveProduit {
  static readonly type = '[Panier] Remove';
  constructor(public payload: { index: number }) {}
}

export class RemoveOneProduit {
  static readonly type = '[Panier] Remove One';
  constructor(public payload: { ref: string }) {}
}

export class RemoveAllProduit {
  static readonly type = '[Panier] Remove All';
  constructor(public payload: { ref: string }) {}
}