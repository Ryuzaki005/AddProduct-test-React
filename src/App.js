// -------------------App.js


import React, { useState } from "react";
import mockProducts from "./mockdata";
import SearchBar from "./SearchBar";
import CoresspondingProducts from "./CoresspondingProducts";
import Cart from "./Cart";

console.log(45)
console.log(45)
console.log(45)
console.log("Mon petit code secret pour voir si tout fonctionne45")


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

    //Gestion et integration d'API

    //isLoading useState
    const [isLoading, setIsLoading] = useState(false);

    //Fetching data function 
    async function fetchProduct() {
        const response = await fetch('https://fakestoreapi.com/products');
        
    }



    return (
        <>
            <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <CoresspondingProducts mockProducts={mockProducts} searchTerm={searchTerm} addProductToCart={addProductToCart} />
            <Cart cartItems={cartItems} removeProductFromCart={removeProductFromCart} />
        </>
    );
};


export default App;