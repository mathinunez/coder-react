import React from "react";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./json/arrayProductos.json";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id  === parseInt(id)))
            },);
        }, []);

        promesa.then((data) => {
            setItem(data);
        })

    }, [id])


    return(
        
        <div className="container">
            <ItemDetail item={item} />
        </div> 

    )
}

export default ItemDetailContainer;