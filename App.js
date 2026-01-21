import React, { useState } from "react";
import mockProducts from "./mockdata";

function App() {
    // État pour la saisie de l'utilisateur
    const [searchTerm, setSearchTerm] = useState("");

    //handler de changement de saisie
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // État pour le panier gerant l'ajout de produit
    const [cartItems, setCartItems] = useState([]);

    function addProductToCart(productFiltered){
        setCartItems((cartItems)=> [...cartItems, productFiltered]);
    }

    function removeProductFromCart(productFiltered){
        setCartItems((prev) => pre.filter((product) => product.id !== productFiltered.id)
        );
    }




    return (
        <>
            <searchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <CoresspondingProducts />
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

        </>
    );
};


export default App;