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
        setCartItems((prev) => prev.filter((product) => product.id !== productFiltered.id)
        );
    }




    return (
        <>
            <div>
                {/* La barre de recherche */}

                <h1>Cherchez vos produits</h1>
                <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div>
                {/* Afficher les produits qui correspondent à la recherche */}

                <h2>Produits correspondants :</h2>
                <ul>
                    {mockProducts
                        .filter((product) =>
                            product.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        )
                        .map((productFiltered) => {
                            return (
                            <div key={productFiltered.id}>
                                <li>{productFiltered.name}</li>
                                <button onClick={() => addProductToCart(productFiltered)}>+</button>
                            </div>);
                        }
                        )}
                </ul>
            </div>
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