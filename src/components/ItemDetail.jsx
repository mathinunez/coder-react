import React from "react";

import { Link, NavLink } from "react-router-dom";


const ItemDetail = ({item}) => {
    return (
 
            <div className="row" id="itemdetail">
                <div className="col-md-4 offset-md-4">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p>${item.precio} </p>
                    <button type="button" class="btn btn-warning">Agregar a carrito</button>
                    <Link className="navbar-brand" to={"/"}><button type="button" class="btn btn-warning px-2">Volver al Inicio</button></Link>
                    
                </div>
                
            </div>    
    )
 
}


export default ItemDetail;

