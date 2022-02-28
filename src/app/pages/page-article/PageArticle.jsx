import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../../shared/appconst';

import '../../assets/styles/Section.css';
import '../../assets/styles/PageArticle.css';
import PageContainerFull from '../../pages/layout/PageContainerFull';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


//Actions possibles du panier
import {
  addToCart,
} from '../../redux/actions/cart.action';

const initialData = {}

export default function PageArticle() {
    const navigate = useNavigate();
    const { idArticle } = useParams();
    const [data, setData] = useState(initialData);
    const [img, setImg] = useState(null);

    useEffect(() => {
      getArticle();
    }, [idArticle]);

    const getArticle= () => {
      let url = 'articles/' + idArticle;

      axios(API_URL + url)
        .then((res) => {
          const data = res.data.data;

          setData(data);

          const img = require('../../' + data.image1);
          setImg(img);
        });
    }

    const dispatch = useDispatch();

    const addCartAction = (id) => {
      
      dispatch(addToCart({ 
        id: data.id,
        ref: data.ref,
        qty: 1,
        pu: data.pu,
        libelle: data.libelle,
        desc: data.description,
      }));
      navigate('/app/panier');
    }

    return (
      <PageContainerFull>
        <Container>
          <Row>
            <Col>
              <img className="product-img" src={img} alt="card_picture" /></Col>
            <Col>
              <h1>{data.libelle}</h1>
              <h2>{data.ref}</h2>
              <h3>{data.pu} MGA</h3>
              <p>{data.description}</p>

              <Button variant="primary" onClick={() => addCartAction(data.id)}>Ajouter au panier</Button>
            </Col>
          </Row>
        </Container>
      </PageContainerFull>
    );
  }