<template>
    <section class="container-fluid bg-yellow">
      <div class="container py-5">
          <h2 class="text-dark mb-3">Product listings</h2>
  
          <div class="row text-white">
            <Product :isDark="false" v-for="product, i in state.products" :key="i" :product="product" />
  
        </div>
      </div>
    </section>
</template>
<style></style>
<script setup>
import { onMounted } from 'vue';
import { useStore } from "vuex";
import Product from '../components/Product.vue';

const store = useStore();
const state = store.state;

onMounted( async() =>{
  store.dispatch('updateActiveNav', "products");
     await store.dispatch('fetchProducts');
});
</script>