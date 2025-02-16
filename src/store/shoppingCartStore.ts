import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ShoppingCartState {
    buyType: string;
    setBuyType: (type: string) => void;
    cart: any[];

    counter: number;
    setCounter: () => void;
    getCounter: () => number;

    getTotalItems: () => number;
    addItemToCart: (item: any) => void;
}

export const useShoppingCartStore = create<ShoppingCartState>()(

    persist(
        (set, get) => ({
            buyType: '', // delivery
            cart: [],

            counter: 0,

            // Methods
            setCounter: () => set((state) => ({ counter: state.counter + 1 })),

            getCounter: () => get().counter,

            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce(( total, item ) => total + item.quantity, 0);
            },

            setBuyType: (type: string) => set({ buyType: type }),
            addItemToCart: (product) => {
                const { cart } = get();

                const productInCart = cart.some(
                    (item) => item.id === product.id
                );

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }

                const updatedCartItems = cart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: product.quantity }
                    }

                    return item;
                })

                set({ cart: updatedCartItems })
            },
        }), 
        {
            name: 'shopping-cart',
            skipHydration: true,
        }
    )
);