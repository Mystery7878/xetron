<template>
    <nav class="navbar navbar-dark bg-dark sticky-top border-bottom border-1 border-dark-subtle border-opacity-75 navbar-expand-lg">
    <div class="container">
      <router-link to="/">
        <a @click="store.dispatch('updateActiveNav', 'home')" class="navbar-brand fs-2 fw-bolder text-yellow" style="letter-spacing: 2px;" href="#">XETRON</a>
      </router-link>
      <button class="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-lg-4 me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link to="/">
              <a :class="store.getters.activeNav==='home'?'border-bottom border-2 border-white':''" class="nav-link text-white fs-6" aria-current="page" href="#">Home</a>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/product-listing">
              <a :class="store.getters.activeNav==='products'?'border-bottom border-2 border-white':''" class="nav-link text-white fs-6" aria-current="page">Products</a>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/orders">
              <a :class="store.getters.activeNav==='orders'?'border-bottom border-2 border-white':''" class="nav-link text-white fs-6" aria-current="page">Orders</a>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/about">
              <a :class="store.getters.activeNav==='about'?'border-bottom border-2 border-white':''" class="nav-link text-white fs-6" aria-current="page">About</a>
            </router-link>
          </li>
        </ul>
        <div class="d-flex flex-column flex-lg-row align-items-start">          
          <form class="d-flex mb-4 mb-lg-0 order-1 order-lg-0" role="search">
            <input class="form-control me-2" type="search" placeholder="Search for products" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
          <button class="order-0 order-lg-1 bg-transparent shadow-none border-0 position-relative ms-0 ms-lg-2 mb-3 mb-lg-0"  type="button" data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1">
            <span class="position-absolute d-none d-lg-flex justify-content-center align-items-center fw-bold text-dark top-0 translate-middle p-1 bg-light border border-dark rounded-circle">
              {{cart.length}}
            </span>
            <a class="nav-link d-flex justify-content-center align-items-center d-lg-none text-white fs-6">Cart <span class="ms-1 badge bg-white text-dark fw-bold">30</span></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="text-white d-none d-lg-inline-block" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
          </button>        
        </div>
      </div>
    </div>
  </nav>
  <Cart />
</template>
<style>
ul a {
  max-width: fit-content;
}

ul a:hover {
  border-bottom: 2px solid white;
}
button > span {
  font-size: 11px;
  left: 75%;
  width: 25px;
  height: 25px;
}
</style>
<script setup>
import Cart from './Cart.vue'
import { useStore } from "vuex";
import { onMounted, computed } from 'vue';

const store = useStore();

const cart = computed(() => store.state.cart);

onMounted(() =>{
     cart.value = store.getters.getCart;
});
</script>