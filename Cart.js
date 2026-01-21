import React, { useState } from "react";


function Cart({ cartItems, removeProductFromCart }){
    return (
            <div>
                {/* Afficher le contenu du panier */}
                <h2>Votre panier :</h2>
                <ul>
                    {cartItems.map((productFiltered) => {
                        return (
                            <div key={productFiltered.id}>
                                <li>{productFiltered.name}</li>
                                <button onClick={() => removeProductFromCart(productFiltered)}>-</button>
                            </div>);
                    })}
                </ul>

            </div>
);
}

export default Cart;