import React, { useState } from "react";
import mockProducts from "./mockdata";
import SearchBar from "./SearchBar";
import CoresspondingProducts from "./CoresspondingProducts";


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
        setCartItems((prev)=> [...prev, productFiltered]);
    }

    function removeProductFromCart(productFiltered){
        setCartItems((prev) => prev.filter((product) => product.id !== productFiltered.id)
        );
    }




    return (
        <>
            <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <CoresspondingProducts mockProducts={mockProducts} />
            <Cart cartItems={cartItems} removeProductFromCart={removeProductFromCart} />


        </>
    );
};


export default App;