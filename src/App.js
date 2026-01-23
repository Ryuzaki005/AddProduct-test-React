// -------------------App.js


import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CoresspondingProducts from "./CoresspondingProducts";
import Cart from "./Cart";
import styles from "./App.module.css";

console.log("Mon petit code secret pour voir si tout fonctionne45")


function App() {
    // Les useState
    // État pour la saisie de l'utilisateur
    const [searchTerm, setSearchTerm] = useState("");

    // État pour le panier gerant l'ajout de produit
    const [cartItems, setCartItems] = useState([]);

    //isLoading useState
    const [isLoading, setIsLoading] = useState(false);


    // État pour gérer les produits
    const [product, setProduct] = useState([]);
    
    
    //Les Handlers
    //handler de changement de saisie
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    function addProductToCart(productFiltered){
        if(!cartItems.includes(productFiltered)){
            setCartItems((prev)=> [...prev, productFiltered]);
        }
    }

    function removeProductFromCart(productFiltered){
        setCartItems((prev) => prev.filter((product) => product.id !== productFiltered.id
        
        ))
    };

    //Gestion et integration d'API

    //Fetching data function 
    async function searchHandler() {
        setIsLoading(true);

        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        //data filtered pour correspondre a ce qu'il y a dans l'input research
        const filtered = data.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

        setProduct(filtered);

        setIsLoading(false);
    }



    return (
        <div className={styles.appContainer}>
            <div className={styles.appWrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>Rechercher des Produits</h1>
                        <p>Trouvez les meilleurs articles de FakeStore</p>
                    </div>
                    <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} searchHandler={searchHandler} />
                    <CoresspondingProducts searchTerm={searchTerm} isLoading={isLoading} product={product} addProductToCart={addProductToCart} />
                </div>
                <Cart cartItems={cartItems} removeProductFromCart={removeProductFromCart} />
            </div>
        </div>
    );
};


export default App;