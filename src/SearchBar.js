// -------------------SearchBar.js


import React from "react";
import styles from "./SearchBar.module.css";


function SearchBar({ searchTerm, handleSearchChange, searchHandler }) {
    return (
        <div className={styles.searchSection}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className={styles.searchButton} onClick={searchHandler}>
                    Chercher
                </button>
            </div>
        </div>
    );
}

export default SearchBar;