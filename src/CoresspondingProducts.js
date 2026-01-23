// -------------------CoresspondingProducts.js


import React from "react";
import styles from "./CoresspondingProducts.module.css";


function CoresspondingProducts( { product, addProductToCart, isLoading, searchTerm }){
    if (isLoading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.productsSection}>
            <h2>Produits Correspondants</h2>
            {product.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>Aucun produit trouvé. Essayez une autre recherche.</p>
                </div>
            ) : (
                <ul className={styles.productsList}>
                    {product.map((prod) => (
                        <li key={prod.id} className={styles.productItem}>
                            <p className={styles.productName}>{prod.title}</p>
                            <div className={styles.productMeta}>
                                <span className={styles.productPrice}>${prod.price}</span>
                                <span className={styles.productCategory}>{prod.category}</span>
                            </div>
                            <button
                                className={styles.addButton}
                                onClick={() => addProductToCart(prod)}
                            >
                                Ajouter au panier
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CoresspondingProducts;
