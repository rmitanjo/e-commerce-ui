import { Fragment , useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../../shared/appconst';

import '../../assets/styles/Section.css';
import Sidebar from '../layout/Sidebar';
import PageContainer from '../../pages/layout/PageContainer';
import MyCardList from '../../components/MyCardList';

const initialData = {
  articles: [],
  libelleCategorie: ''
}

function PageAccueil() {
    const { idCategorie } = useParams();
    
    const [data, setData] = useState(initialData);
    const [count, setCount] = useState(0);

    useEffect(() => {
      getArticles();
    }, [idCategorie]); //Recharger les données que si le paramètre idCategorie change

    const getArticles = () => {
      let url = 'articles/lastest';
      if(typeof idCategorie !== 'undefined') url = 'articles/by-categorie/'  + idCategorie;

      axios(API_URL + url)
        .then((res) => {
          const articles = res.data.data.articles;
          const libCategorie = res.data.data.categorie;

          if(typeof articles !== 'undefined') {
            setData({ articles: articles, libelleCategorie: libCategorie });
            setCount(articles.length);
          }
        });
    }

    return (
      <Fragment>
        <Sidebar />
        <PageContainer>
            <h1>{data.libelleCategorie}</h1>
            
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