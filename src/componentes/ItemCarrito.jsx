import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contenedores/CartContext';

const ItemCarrito = ({ id, img, title, cantidad, price }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div id={`producto-carrito-${id}`} className="divItemCarrito">
            <div className="divImagenTituloItemCarrito">
                <div className="divImagenItemCarrito">
                    <img src={`${img}`}/>
                </div> 
                
                <p>{title}</p>
            </div>

            <div className="divPriceItemCarrito">
                <div>
                    <p>Cantidad: {cantidad}</p>
                    <p className="pPriceItemCarrito">(${price} por unidad)</p>
                </div>
                
                <p>${cantidad*price}</p>

                <button className="botonBorrar" onClick={() => removeItem(id)}>Eliminar</button>
            </div>   
        </div>
    );
}

export default ItemCarrito;
