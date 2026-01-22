// -------------------SearchBar.js


import React, { useState } from "react";


function SearchBar({ searchTerm, handleSearchChange }){
    return (<div>
                {/* La barre de recherche */}

                <h1>Cherchez vos produits</h1>
                <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
);
}

export default SearchBar;