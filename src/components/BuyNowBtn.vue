<template>
    <button @click.prevent="addOrder(product)" :class="isDark ? 'btn btn-light':'btn btn-dark'" class="me-2">
        Buy Now
    </button>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
    product: Object,
    isDark: Boolean
})
  
  function addOrder(order) {
    store.dispatch('addOrder', order);
    alert("order has been added successfully");
  }
</script>
