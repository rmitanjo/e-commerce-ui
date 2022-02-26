import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import PageContainerFull from '../../pages/layout/PageContainerFull';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const initialFormData = Object.freeze({
  'nom' : '',
  'raison_sociale' : '',
  'nif' : '',
  'telephone' : '',
  'mail' : '',
  'adresse' : '',
  'ville' : '',
});

function PagePaiement() {
    const cart = useSelector((state) => state.cartReducer);
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      
      let arrArticles = [];
      cart.articles.map(item => {
        arrArticles.push({
          id: item.id,
          qte: item.qty,
          pu: item.pu,
        });
      });

      const data = { ...formData, articles: arrArticles };
      axios.post('http://localhost/mystore-api/api/commandes', data)
        .then(res => {
          console.log(res.data.data.ref);
        })
    }

    return (
        <PageContainerFull>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="nom" onChange={handleChange} placeholder="Noms et prénoms" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRaisonSociale">
                <Form.Label>Raison sociale</Form.Label>
                <Form.Control type="text" name="raison_sociale" onChange={handleChange} placeholder="Raison sociale" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridNif">
              <Form.Label>NIF</Form.Label>
              <Form.Control name="nif" onChange={handleChange} placeholder="Numéro d'identification fiscale" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTelephone">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" name="telephone" onChange={handleChange} placeholder="Numéro de téléphone" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMail">
                <Form.Label>Mail</Form.Label>
                <Form.Control type="text" name="mail" onChange={handleChange} placeholder="Adresse mail" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridAdresse">
                <Form.Label>Adresse</Form.Label>
                <Form.Control name="adresse" onChange={handleChange} placeholder="Adresse" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridVille">
                <Form.Label>Ville</Form.Label>
                <Form.Control name="ville" onChange={handleChange} placeholder="Ville" />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </PageContainerFull>
    );
};

export default PagePaiement;