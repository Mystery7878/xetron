<template>
<section class="container-fluid h-100 bg-yellow">
    <div class="container h-100">
        <div v-if="state.orders.length > 0">
          <h2 class="text-dark py-4">List of orders</h2>
          <div
              class="table-responsive mb-4"
          >
              <table
                  class="table table-dark"
              >
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total cost</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(order, i) in state.orders" :key="order.id">
                          <td>{{ i+1 }}</td>
                          <td scope="row">{{order.product_name}}</td>
                          <td>{{'$' + order.price}}</td>
                          <td>{{order.quantity}}</td>
                          <td>{{'$'+order.total_cost}}</td>
                      </tr>
                      <tr>
                          <th scope="row" colspan="4" class="text-center fw-bold">Total</th>
                          <td>{{'$'+ordersTotal}}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="d-flex justify-content-end mb-5">
              <button class="btn btn-dark">Proceed to checkout</button>
          </div>
      </div>
      <div v-else class="d-flex h-100 justify-content-center align-items-center">
        <h3 class="text-center">
            There are currently no orders.
        </h3>
    </div>
      
    </div>
</section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from "vuex";

const store = useStore();
const state = store.state;

const ordersTotal = ref(null);

onMounted( async() =>{
    console.log(state.orders)
    store.dispatch('updateActiveNav', "orders");
     await store.dispatch('fetchOrders');
     ordersTotal.value = store.getters.ordersTotalCost;
});
</script>

<style>
h3 {
   transform: translateY(-65px);
}
</style>