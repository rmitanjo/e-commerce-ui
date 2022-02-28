import { Fragment , useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from './MyCard';

function MyCardList(props) {
    const { articles } = props;

    return (
        <Fragment>
            <Row>
                {articles.map((item, index) =>  
                  <Col key={index}>
                    <MyCard data={item} />
                  </Col>
                )}
              </Row>
        </Fragment>
    );
};

export default MyCardList;