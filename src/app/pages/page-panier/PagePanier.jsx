import { useSelector, useDispatch } from 'react-redux';
import PageContainerFull from '../../pages/layout/PageContainerFull';

import '../../assets/styles/PagePanier.css';

import Button from 'react-bootstrap/Button';
import { BsFillTrashFill, BsFillFileArrowUpFill, BsFillFileArrowDownFill } from "react-icons/bs";
import Stack from 'react-bootstrap/Stack';
import NumberFormat from 'react-number-format';
import { useNavigate } from "react-router-dom";

//Actions possibles du panier
import {
  increaseQty,
  decreaseQty,
  removeItem,
  emptyCart,
} from '../../redux/actions/cart.action';

function PagePanier() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducer);
    
    let total = 0;
    cart.articles.map(item => {
      total += item.pu * item.qty;
    });
    
    const dispatch = useDispatch();

    const addQtyAction = (id) => {
      dispatch(increaseQty(id));
    }
    
    const removeQtyAction = (id) => {
      dispatch(decreaseQty(id));
    }

    const removeItemAction = (id) => {
      dispatch(removeItem(id));
    }

    const emptyCartAction = () => {
      dispatch(emptyCart());
    }

    const paiementAction = () => {
      navigate("/app/paiement");
    }

    return (
      <PageContainerFull>
        <div className="my-page-panier">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Designation</th>
                <th>Description</th>
                <th>PU</th>
                <th>Qté</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.articles.map((item, index) => 
                <tr key={index}>
                  <td>{item.ref}</td>
                  <td>{item.libelle}</td>
                  <td>{item.desc}</td>
                  <td>{item.qty}</td>
                  <td>{item.pu}</td>
                  <td>
                    <Stack direction="horizontal" gap={1}>
                      <Button variant="primary" onClick={() => addQtyAction(item.id)}>
                        <BsFillFileArrowUpFill />
                      </Button>
                      <Button variant="danger" onClick={() => removeQtyAction(item.id)}>
                        <BsFillFileArrowDownFill />
                      </Button>
                      <Button variant="outline-danger" onClick={() => removeItemAction(item.id)}>
                        <BsFillTrashFill />
                      </Button>
                    </Stack>
                  </td>
                </tr>
              )}
                <tr>
                  <td colSpan="3"></td>
                  <td>
                    <b>TOTAL MGA</b>
                  </td>
                  <td>
                    <NumberFormat 
                      value={total}
                      className="total"
                      displayType={'text'}
                      thousandSeparator={true}
                    />
                  </td>
                  <td></td>
                </tr>
            </tbody>
          </table>

          <div className="button-footer">
            <Stack direction="horizontal" gap={3}>
              <Button className="ms-auto" variant="warning" onClick={() => emptyCartAction()}>Vider
              </Button>
              <Button variant="primary" onClick={() => paiementAction()}>Paiement</Button>
            </Stack>
          </div>
        </div>
      </PageContainerFull>
    );
}

export default PagePanier;