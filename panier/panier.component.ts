import { Select, Store } from '@ngxs/store';
import { RemoveProduit } from '../../store/panier.actions';
import { PanierState } from '../../store/panier.state';


export class PanierComponent implements OnInit {
  @Select(PanierState.getItems) items$;

  constructor(private store: Store) {}

  removeItem(item: PanierItem) {
    this.store.dispatch(new RemoveProduit(item));
  }
}
