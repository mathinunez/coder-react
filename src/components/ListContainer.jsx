import React from 'react';
import './styles/ListContainer.css';

function ItemListContainer({saludos}) {
    return(
        <section>
            <p className="texto">{saludos}</p>
        </section>
    );
};

export default ItemListContainer;