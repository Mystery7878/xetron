import { createStore } from "vuex"; // Importing createStore function from Vuex to create a new store
import axios from "axios"; // Importing axios for making HTTP requests

// Utility function to update the localStorage with the cart data
function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const store = createStore({
    state: {
        products: [],
        orders: [],
        selectedProduct: null,
        cart: [],
        activeNav: 'home'
    },

    getters: {
        activeNav(state) {
            return state.activeNav;
        },
        ordersTotalCost(state) {
            if (state.orders.length > 0) {
                return state.orders.reduce((total, order) => total + Number(order.total_cost), 0);
            }
        },
        cartTotalCost(state) {
            return state.cart.reduce((total, item) => total + Number(item.total_cost), 0);
        },
        getCart(state) {
            return state.cart;
        },
        // Getter to calculate the total cost of items in the cart
        cartTotal: state => {
            // Use reduce to compute the total cost
            return state.cart.reduce((total, item) => total + item.totalCost, 0)
        }
    },

    mutations: {
        SET_ACTIVE_NAV(state, navItem) {
            state.activeNav = navItem;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_ORDERS(state, orders) {
            state.orders = orders;
        },

        SET_SELECTED_PRODUCT(state, product) {
            state.selectedProduct = product;
        },

        // Mutation to add a product to the cart
        ADD_TO_CART(state, product){
            // Find an item in the cart with a matching id
            let item = state.cart.find(i => i.id === product.id)
      
            // If found, increment its quantity; otherwise, add a new item with quantity 1
            if (item){
              item.quantity++
              item.totalCost = Number(item.price) * Number(item.quantity);
            }else{
              state.cart.push({...product, quantity: 1, totalCost: Number(product.price)})
            }
      
            // Update localStorage with the updated cart data
            updateLocalStorage(state.cart)
        },
  
        // Mutation to remove a product from the cart
        REMOVE_FROM_CART(state, product){
            // Find an item in the cart with a matching id
            let item = state.cart.find(i => i.id === product.id)
    
            // If found, decrement its quantity; if quantity reaches 1, remove the item
            if (item){
                if(item.quantity > 1){
                    item.quantity--;
                    item.totalCost = Number(item.price) * Number(item.quantity);
                }else{
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
    
            // Update localStorage with the updated cart data
            updateLocalStorage(state.cart)
        },

        //Mutation to delete product from cart
        DELETE_FROM_CART(state, product) {
            // Find an item in the cart with a matching id
            const item = state.cart.find(i => i.id === product.id)
        
            // If the item is found in the cart, remove it from the cart
            if (item) {
                state.cart = state.cart.filter(i => i.id !== product.id)
            }
        
            // Update the local storage with the updated cart data
            updateLocalStorage(state.cart);
        },
        
        // Mutation to update the cart state from data stored in localStorage
        UPDATE_CART_FROM_STORAGE(state){
            // Retrieve the cart data from localStorage
            const cart = localStorage.getItem('cart')
    
            // If cart data exists in localStorage, parse and set it as the new cart state
            if(cart){
                state.cart = JSON.parse(cart)
            }
        }
    },

    actions: {
        async fetchProducts({ commit }) {
            const response = await axios.get(
              "https://alvahtek.com/projects/ota/group3/getProductApi.php"
            );
            commit("SET_PRODUCTS", response.data);
        },

        async fetchOrders({ commit }) {
            const response = await axios.get(
               "https://alvahtek.com/projects/ota/group3/getOrdersApi.php"
            );
            commit("SET_ORDERS", response.data);
        },
        async addOrder({ commit }, order) {
            const response = await axios.post(
              "https://alvahtek.com/projects/ota/group3/postOrderApi.php", order
            );
            console.log(response)
            commit("SET_ORDERS", response.data);
        },

        async fetchProductById({ commit }, id) {
            const response = await axios.get(
              `https://alvahtek.com/projects/ota/group3/getProductApi.php?id=${id}`
            );
            console.log(response)
            commit("SET_SELECTED_PRODUCT", response.data);
        },
        addToCart({ commit }, product) {
            console.log(product)
            commit("ADD_TO_CART", product);
        },
        removeFromCart({ commit }, product) {
            commit("REMOVE_FROM_CART", product);
        },
        deleteFromCart({ commit }, product) {
            commit("DELETE_FROM_CART", product);
        },
        updateCartFromStorage({ commit }) {
            commit("UPDATE_CART_FROM_STORAGE");
        },
        updateActiveNav({ commit }, navItem) {
            commit("SET_ACTIVE_NAV", navItem);
        }
    },
});