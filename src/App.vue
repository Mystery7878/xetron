<template>
      <NavBarComponent />
      <router-view v-slot="{Component}">
        <component :is="Component"/>
      </router-view>
      <Footer />
</template>
<style>
a {
  text-decoration: none !important;
}
   .bg-yellow {
    background-color: #F9E79F;
   }
   .text-yellow {
    color: #F9E79F !important;
   }
   .poppins-thin {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.poppins-extralight {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.poppins-light {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.poppins-extrabold {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.poppins-black {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
}

</style>
<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue';
import { useStore } from "vuex";

const store = useStore();

onMounted(()=>{
  store.dispatch('updateCartFromStorage');
});

</script>