<template>
<section class="bg-yellow">
    <div class="container">
        <div v-if="selectedProduct" class="row flex-lg-row align-items-center g-0 g-md-5 py-5">
          <div class="col-lg-6 mx-auto">
            <img :src="'/'+selectedProduct.image+'.jpeg'" class="rounded-4 d-block mx-auto img-fluid" alt="hero image" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6 d-flex flex-column">
            <h2 class="display-6 lh-1 mb-3 text-center text-lg-start mb-4 mb-lg-3">{{selectedProduct.name}}</h2>
            <h3 class="fs-4 lh-1 mb-3 text-center text-lg-start mb-4 mb-lg-3 text-capitalize">{{selectedProduct.category}}</h3>
            <p class="lead text-center text-lg-start mb-4 mb-lg-3">
                {{selectedProduct.description}}
            </p>
            <p class="lead text-center text-lg-start mb-4 mb-lg-3 fw-bold">
                {{'$' + selectedProduct.price}}
            </p>
            <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
              <BuyNowBtn class="btn-lg" :product="{productId: Number(selectedProduct.id), price: Number(selectedProduct.price)}" :isDark="isDark" />
              <button type="button" class="btn btn-outline-dark btn-lg px-4">Add to cart</button>
            </div>
          </div>
        </div>
    </div>
</section>
<offers title="Other Offers" :isDark="true" />
</template>

<script setup>
import Offers from '../components/Offers.vue'
import { onMounted, computed } from 'vue';
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import BuyNowBtn from '@/components/BuyNowBtn.vue';

const store = useStore();
const state = store.state;
const route = useRoute().params;

onMounted( async() =>{
      store.dispatch('updateActiveNav', "");
      await store.dispatch('fetchProductById', Number(route.id));
});
const selectedProduct = computed(() => state.selectedProduct);
</script>

<style scoped>
img {
    width: 500px;
    height: 500px;
    object-fit: cover;
}
</style>
<script></script>