import React from "react";
import carrito from "../assets/carrito.png"

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn position-relative">
                <img src={carrito} alt={"carrito"} width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>

    )
}
 

export default CartWidget;