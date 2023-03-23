import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none" >
            <div className="container">
                <div className="card">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body text-center text-black ">
                        <p className="card-text">{item.nombre} </p>
                        <p className="card-text">${item.precio}</p>
                        <button type="button" class="btn btn-warning">Ver Mas</button>

                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Item;