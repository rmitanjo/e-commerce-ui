import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../assets/styles/Section.css';
import PageContainer from '../../pages/layout/PageContainer';
import MyCard from '../../components/MyCard';

export default function PageAccueil() {
    return (
      <PageContainer>
          <h1>Liste des articles</h1>
          <Row>
            <Col>
              <MyCard />
            </Col>
            <Col>
              <MyCard />
            </Col>
            <Col>
              <MyCard />
            </Col>
            <Col>
              <MyCard />
            </Col>
          </Row>
      </PageContainer>
    );
  }