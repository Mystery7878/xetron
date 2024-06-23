<template>
    <div
          class="offcanvas offcanvas-end bg-dark text-white"
          data-bs-scroll="true"
          tabindex="-1"
          id="Id1"
          aria-labelledby="Enable both scrolling & backdrop"
        >
          <div class="offcanvas-header text-yellow">
            <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">
              Shopping Cart
            </h5>
            <svg type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
               xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x text-white ms-auto" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
          </div>
          <div class="offcanvas-body">
            <p v-if="cart.length === 0">
              The shopping cart is currently empty!
            </p>
            <div v-else>
              <div v-for="item, i in cart" :key="item.id" class="d-flex justify-content-between align-items-center mb-3">
                <span class="me-3">
                  {{ i + 1 + '.' }}
                </span>
                <span class="flex-grow-1">{{item.name}}</span>
                <div class="d-flex ms-3 justify-content-center align-items-center">
                  <svg type="button"
                    @click.prevent="store.dispatch('addToCart', item)"
                    role="button"
                    :style="{transform: 'rotate(45deg)'}"
                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x text-success ms-auto" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                  <span class="mx-3">{{item.quantity}}</span>
                  <svg role="button" @click.prevent="store.dispatch('removeFromCart', item)" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-dash text-danger" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>
                </div>
                <div class="ms-4">{{ '$'+ item.totalCost }}</div>
                <svg 
                @click.prevent="store.dispatch('deleteFromCart', item)"
                role="button" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="ms-3 bi bi-trash3 text-danger" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </div>
            <div class="d-flex justify-content-between mt-5">
              <span class="fw-bold text-yellow">TOTAL</span>
              <span class="fw-bold text-yellow">
                {{ '$' + store.getters.cartTotal }}
              </span>
            </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from "vuex";

const store = useStore();

const cart = computed(() => store.state.cart);

onMounted(() =>{
     cart.value = store.getters.getCart;
});
</script>

<style>

</style>