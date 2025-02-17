import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ShoppingCartState {
    buyType: string;
    setBuyType: (type: string) => void;
    cart: any[];

    getTotalItems: () => number;
    getSummaryInformation: () => {
        subtotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    };

    addItemToCart: (item: any) => void;
    updateItemQuantity: (item: any, quantity: number) => void;
    removeItem: (item: any) => void;
}

export const useShoppingCartStore = create<ShoppingCartState>()(

    persist(
        (set, get) => ({
            buyType: '', // delivery
            cart: [],

            counter: 0,

            // Methods
            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce(( total, item ) => total + item.quantity, 0);
            },

            getSummaryInformation: () => {
                const { cart } = get();

                const subTotalItemsWithoutTax = cart.reduce(
                    (subtotal, product) => {
                        if (product.subcategory.includes("(sin iva)")) {
                            return (product.quantity * product.finalPrice) + subtotal;
                        }
                        return subtotal;
                    },
                    0
                );

                const subTotalItemsWithTax = cart.reduce(
                    (subtotal, product) => {
                        if (!product.subcategory.includes("(sin iva)")) {
                            return (product.quantity * product.finalPrice) + subtotal;
                        }
                        return subtotal;
                    },
                    0
                );

                const tax = parseFloat((subTotalItemsWithTax * 0.15).toFixed(2));
                const subtotal = parseFloat((subTotalItemsWithoutTax + subTotalItemsWithTax - tax).toFixed(2));
                const total = subTotalItemsWithoutTax + subTotalItemsWithTax;
                const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

                return {
                    subtotal,
                    tax,
                    total,
                    itemsInCart
                }
            },

            setBuyType: (type: string) => set({ buyType: type }),
            addItemToCart: (newItem) => {
                const { cart } = get();

                // 1. Revisar si el item existe en el carro
                const productInCart = cart.some(
                    (item) => item.id === newItem.id
                );

                if (!productInCart) {
                    set({ cart: [...cart, newItem] })
                    return;
                }

                // 2. Si el item existe, actualizar la cantidad
                const updatedCartItems = cart.map((item) => {
                    if (item.id === newItem.id) {
                        return { ...item, quantity: item.quantity + newItem.quantity }
                    }

                    return item;
                })

                set({ cart: updatedCartItems })
            },

            updateItemQuantity: (item, quantity) => {
                const { cart } = get();

                const updatedCartItems = cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity }
                    }

                    return cartItem;
                });

                set({ cart: updatedCartItems });
            },

            removeItem: (item) => {
                const { cart } = get();

                const updatedCartItems = cart.filter((cartItem) => cartItem.id !== item.id);

                set({ cart: updatedCartItems });
            }
        }), 
        {
            name: 'shopping-cart',
        }
    )
);