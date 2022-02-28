import { Fragment , useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../shared/appconst';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../assets/styles/Section.css';
import Sidebar from '../layout/Sidebar';
import PageContainer from '../../pages/layout/PageContainer';
import MyCard from '../../components/MyCard';
import MyCardList from '../../components/MyCardList';

function PageAccueil() {
    const { idCategorie } = useParams();
    
    const [data, setData] = useState({ articles: [] });
    const [count, setCount] = useState(0);
    const [currentId, setCurrentId] = useState(null);
  
    if(currentId != idCategorie) {
      setCurrentId(idCategorie);
      window.location.reload(false);
    }

    useEffect(() => {
      getArticles();
    }, [data]);

    const getArticles = () => {
      let url = 'articles/lastest';
      if(typeof idCategorie !== 'undefined') url = 'articles/by-categorie/'  + idCategorie;

      axios(API_URL + url)
        .then((res) => {
          const articles = res.data.data;

          setData({ articles: articles });
          setCount(articles.length);
        });
    }

    return (
      <Fragment>
        <Sidebar />
        <PageContainer>
            <h1>Liste des articles {idCategorie}</h1>
            
            {count > 0 ? (
              <MyCardList articles={data.articles} />
            ) : (
              <p>Aucun article trouvé</p>
            )}
        </PageContainer>
      </Fragment>
    );
}

export default PageAccueil;