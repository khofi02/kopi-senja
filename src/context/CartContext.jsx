import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Menambahkan produk ke keranjang
    const addToCart = (product) => {
        const existingItem = cartItems.find(
            (item) => item.id === product.id
        );

        const currentQuantity = existingItem
            ? existingItem.quantity
            : 0;

        // Memeriksa batas stok
        if (currentQuantity >= product.stock) {
            alert('Maaf, stok produk sudah mencapai batas.');
            return;
        }

        if (existingItem) {
            setCartItems((currentItems) =>
                currentItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems((currentItems) => [
                ...currentItems,
                { ...product, quantity: 1 }
            ]);
        }
    };

    // Menambah jumlah produk dari halaman Cart
    const increaseQuantity = (id) => {
        const item = cartItems.find((product) => product.id === id);

        if (item) {
            addToCart(item);
        }
    };

    // Mengurangi jumlah produk
    const decreaseQuantity = (id) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Menghapus produk
    const removeItem = (id) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
