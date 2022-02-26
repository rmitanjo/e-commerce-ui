import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../../pages/layout/PageContainer';

import '../../assets/styles/PagePanier.css';

import Button from 'react-bootstrap/Button';
import { BsFillTrashFill, BsFillFileArrowUpFill, BsFillFileArrowDownFill } from "react-icons/bs";

import { increaseQty, decreaseQty, removeItem } from '../../redux/actions/cart.action';

function PagePanier() {
    const cart = useSelector((state) => state.cartReducer);
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

    return (
      <PageContainer>
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
                  <td>{item.pu}</td>
                  <td>{item.qty}</td>
                  <td>
                    <Button variant="primary" onClick={() => addQtyAction(item.id)}>
                      <BsFillFileArrowUpFill />
                    </Button>
                    <Button variant="danger" onClick={() => removeQtyAction(item.id)}>
                      <BsFillFileArrowDownFill />
                    </Button>
                    <Button variant="outline-danger" onClick={() => removeItemAction(item.id)}>
                      <BsFillTrashFill />
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </PageContainer>
    );
}

export default PagePanier;