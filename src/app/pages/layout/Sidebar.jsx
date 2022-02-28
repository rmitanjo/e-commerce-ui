import { API_URL } from '../../../shared/appconst';
import '../../assets/styles/Sidebar.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const initialState = {
    categories: [],
};

function Sidebar() {
    const navigate = useNavigate();

    const [data, setData] = useState(initialState);

    useEffect(() => {
        const fetchData = async() => {
            await axios(API_URL + 'categories')
                .then((res) => {
                    setData({
                        categories: res.data.data
                    });
                });
        };

        fetchData();
    }, []);

    const handleClick = (idCategorie) => {
        navigate("/app/accueil/" + idCategorie);
    };

    return (
        <div className="my-sidebar">
            <ul className="category-list">
                {data.categories.map((item, index) =>
                    <li key={index} onClick={() => handleClick(item.id)}>{item.libelle}</li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;