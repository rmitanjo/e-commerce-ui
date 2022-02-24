import { useState, useEffect } from 'react'
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../assets/styles/Section.css';
import PageContainer from '../../pages/layout/PageContainer';
import MyCard from '../../components/MyCard';

function PageAccueil() {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios(
        'http://localhost/mystore-api/api/articles/lastest'
      );

      setData({ articles: result.data.data });
    };

    fetchData();
  }, []);

  return (
    <PageContainer>
        <h1>Liste des articles</h1>
        <Row>
          {data.articles.map(item =>  
            <Col key={item.id}>
              <MyCard data={item} />
            </Col>
          )}
        </Row>
    </PageContainer>
  );
}

export default PageAccueil;