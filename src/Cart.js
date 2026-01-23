// -------------------Cart.js


import React from "react";
import styles from "./Cart.module.css";


function Cart({ cartItems, removeProductFromCart }){
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <aside className={styles.cartSidebar}>
            <h2>🛒 Panier ({cartItems.length})</h2>
            {cartItems.length === 0 ? (
                <div className={styles.cartEmpty}>Votre panier est vide</div>
            ) : (
                <>
                    <ul className={styles.cartItems}>
                        {cartItems.map((item) => (
                            <li key={item.id} className={styles.cartItem}>
                                <div className={styles.cartItemInfo}>
                                    <p className={styles.cartItemName}>{item.title}</p>
                                    <p className={styles.cartItemPrice}>${item.price}</p>
                                </div>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => removeProductFromCart(item)}
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cartTotal}>
                        <p>Total :</p>
                        <div className={styles.cartTotalAmount}>
                            ${total.toFixed(2)}
                        </div>
                    </div>
                </>
            )}
        </aside>
);
}

export default Cart;