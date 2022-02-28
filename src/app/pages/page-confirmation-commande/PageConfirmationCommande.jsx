import { API_URL } from '../../../shared/appconst';

import '../../assets/styles/PageConfirmationCommande.css';
import PageContainerFull from '../../pages/layout/PageContainerFull';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from "react-router-dom";

import Moment from 'moment';
import NumberFormat from 'react-number-format';

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

const initialstate = {
    date_creation: '01/01/1987',
    nom: '',
    raison_sociale: '',
    adresse: '',
    telephone: '',
    mail: '',
    ref: '',
    num_commande: '',
    articles: []
};

function PageConfirmationCommande() {
    const componentRef = useRef(null);

    const navigate = useNavigate();
    const { idCommande } = useParams();

    const dateFormat = 'DD/MM/yyyy';
    const [data, setData] = useState(initialstate);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchData = async() => {
            await axios(API_URL + 'commandes/detail/' + idCommande)
                .then((res) => {
                    setData(res.data.data);

                    let sum = 0;
                    res.data.data.articles.map(item => {
                        sum += sum + item.pu * item.qte;
                    });
                    setTotal(sum);
                });
        };

        fetchData();
    }, []);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleHomePage = () => {
        navigate("/accueil");
    }

    return (
        <PageContainerFull>
            <section className="invoice" ref={componentRef}>
                <Row>
                    <Col xs={12}>
                        <h2 className="page-header">
                            <i className="fa fa-globe"></i> Proforma
                            <small className="pull-right"> du: {Moment(data.date_creation).format(dateFormat)}</small>
                        </h2>
                    </Col>
                </Row>
                <Row className="invoice-info">
                    <Col sm={4} className="invoice-col">
                        De
                        <address>
                            <strong>L'entreprise My-Store co.</strong>
                        </address>
                    </Col>
                    <Col sm={4} className="invoice-col">
                        To
                        <address>
                            <strong>{data.nom} {data.raison_sociale}</strong>
                            <br />
                            Address: {data.adresse}<br />
                            Phone: {data.telephone}<br />
                            Email: {data.mail}
                        </address>
                    </Col>
                    <Col sm={4} className="invoice-col">
                        <b>Invoice #{data.ref}</b>
                        <br />
                        <br />
                        <b>Order ID:</b> {data.num_commande}
                        <br />
                        <b>Payment Due:</b> {Moment(data.date_creation).format(dateFormat)}
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Libelle</th>
                                    <th>PU (MGA)</th>
                                    <th>Qte</th>
                                    <th>Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.articles.map((article, index) =>
                                    <tr key={index}>
                                        <td>{article.ref}</td>
                                        <td>{article.libelle}</td>
                                        <td>
                                            <NumberFormat 
                                                value={article.pu}
                                                className="total"
                                                displayType={'text'}
                                                thousandSeparator={true}
                                            />
                                        </td>
                                        <td>{article.qte}</td>
                                        <td>
                                            <NumberFormat 
                                                value={article.pu * article.qte}
                                                className="total"
                                                displayType={'text'}
                                                thousandSeparator={true}
                                            />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="lead">Montant dû {Moment(data.date_creation).format(dateFormat)}</p>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Total (MGA):</th>
                                        <td>
                                            <NumberFormat 
                                                value={total}
                                                className="total"
                                                displayType={'text'}
                                                thousandSeparator={true}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </section>
            <section>
                <Row className="no-print">
                    <Col xs={12}>
                        <Button onClick={handlePrint} variant="primary" >Imprimer</Button>
                        <Button onClick={handleHomePage} variant="success" >Retour</Button>
                    </Col>
                </Row>
            </section>
        </PageContainerFull>
    );
};

export default PageConfirmationCommande;