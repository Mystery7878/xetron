<template>
  <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
          <div class="card bg-transparent" style="width: 15rem;">
          <img class="card-img-top" :src="'/'+product.image+'.jpeg'" alt="Title" />
          <div class="card-body">
            <router-link :to="'/product-details/'+product.id">
                <h4 :class="isDark ? 'text-yellow':'text-dark'" class="card-title">{{ product.name }}</h4>
            </router-link>
            <p :class="isDark ? 'text-yellow':''" class="card-text text-start mb-2 text-capitalize">{{ product.category }}</p>
            <span :class="isDark ? 'text-yellow':''" class="d-block fw-bold mb-2">{{ '$'+product.price }}</span>
            <div class="d-flex mt-auto">
                <BuyNowBtn :isDark="isDark" :product="{productId: Number(product.id), price: Number(product.price)}" />
              <button @click.prevent="addCart(product)" class="btn btn-sm" :class="isDark ? 'btn-outline-light':'btn-outline-dark'" >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        </div>   
</template>

<script setup>
import { ref } from 'vue';
import {useStore} from 'vuex';
import BuyNowBtn from './BuyNowBtn.vue'

const store = useStore();

function addCart (product) {
  alert("item has been added to cart")
  store.dispatch('addToCart', product);
}

const props = defineProps({
    product: Object,
    isDark: Boolean
});
  
</script>

<style scoped>
img {
    height: 214px;
}
h4:hover {
    text-decoration: underline;
}
</style>
