import React, { useState } from "react";
// import mockProducts from "./mockdata";


function CoresspondingProducts( { mockProducts }){
    return (
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
);
}

export default CoresspondingProducts;
