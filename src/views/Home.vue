<template>
  <section class="bg-yellow">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-lg-6 d-none d-lg-block  mx-auto">
            <img src="/hero-img.png" class="d-lg-block mx-lg-auto img-fluid" alt="hero image" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h2 class="display-6 lh-1 mb-3 text-center text-lg-start mb-4 mb-lg-3">Discover the Best Deals on Top Products!</h2>
            <p class="lead text-center text-lg-start mb-4 mb-lg-3">Shop with confidence and convenience from our extensive collection of electronics. Enjoy fast shipping, secure payments, and exceptional customer service.</p>
            <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
              <button type="button" class="btn btn-dark btn-lg px-4 me-md-2">Primary</button>
              <button type="button" class="btn btn-outline-dark btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
  </section>

  <section class="container py-4 p-lg-5 pt-lg-4">
    <h2 class="display-5 text-center text-yellow mb-4">Categories</h2>
    <div class="d-flex p-x-lg-5 justify-content-between justify-content-lg-around">
      <div class="category d-flex flex-column align-items-center justify-content-center bg-yellow rounded-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-phone-fill text-dark" viewBox="0 0 16 16">
          <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
        </svg>
        <h2 class="fs-3 fw-light">
          Phone
        </h2>
      </div>
      <div class="category d-flex flex-column align-items-center justify-content-center bg-yellow rounded-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-tablet-landscape-fill text-dark" viewBox="0 0 16 16">
          <path d="M2 14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm11-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg>
        <h2 class="fs-3 fw-light">
          Tablet
        </h2>
      </div>
      
      <div class="category d-flex flex-column align-items-center justify-content-center bg-yellow rounded-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-laptop-fill text-dark" viewBox="0 0 16 16">
          <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
        </svg>
        <h2 class="fs-3 fw-light">
          Laptop
        </h2>
      </div>
    </div>
  </section>

  <Offers title="Best Offers" :isDark="false" />

  <section class="container py-4 p-lg-5 pt-lg-4">
    <h2 class="display-5 text-center text-yellow mb-4">features</h2>
    <div class="row gap-4 px-lg-5">
      <div class="col">
        <div class="feature mx-auto d-flex align-items-center justify-content-center bg-yellow rounded-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-phone-fill text-dark" viewBox="0 0 16 16">
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
          </svg>
        </div>
        <h4 class="text-white text-center mt-3">Shopping Cart</h4>
        <p class="text-white-50 text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quis?
        </p>
      </div>

      <div class="col">
      <div class="feature mx-auto d-flex align-items-center justify-content-center bg-yellow rounded-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-tablet-landscape-fill text-dark" viewBox="0 0 16 16">
          <path d="M2 14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm11-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg>
      </div>
      <h4 class="text-white text-center mt-3">Buy Nows</h4>
        <p class="text-white-50 text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quis?
        </p>
      </div>
      
      <div class="col">
        <div class="feature mx-auto d-flex align-items-center justify-content-center bg-yellow rounded-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-laptop-fill text-dark" viewBox="0 0 16 16">
            <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
          </svg>
        </div>
        <h4 class="text-white text-center mt-3">Search Products</h4>
        <p class="text-white-50 text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quis?
        </p>
      </div>
    </div>
  </section>
      
    <!-- <div class="container ">
        <h1>Welcome to Xeron</h1>
        <p>Your comfort zone to acquire all consumer tech product</p>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Laptops</h5>
              <img src="C:\Users\USER PC\Xetron\src\assets\product-image\hpelitebook.jpeg" alt="" srcset="">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis molestias illo odio accusamus officiis natus ab illum nihil rerum adipisci, possimus temporibus sapiente at beatae quisquam itaque doloribus sit.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Laptops</h5>
              <img src="C:\Users\USER PC\Xetron\src\assets\product-image\axuslap.jpeg" alt="" srcset="">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis molestias illo odio accusamus officiis natus ab illum nihil rerum adipisci, possimus temporibus sapiente at beatae quisquam itaque doloribus sit.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Phones</h5>
              <img src="C:\Users\USER PC\Xetron\src\assets\product-image\ipadpro.jpeg" alt="" srcset="">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis molestias illo odio accusamus officiis natus ab illum nihil rerum adipisci, possimus temporibus sapiente at beatae quisquam itaque doloribus sit.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tablets</h5>
              <img src="C:\Users\USER PC\Xetron\src\assets\product-image\iphone12png.jpeg" alt="" srcset="">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis molestias illo odio accusamus officiis natus ab illum nihil rerum adipisci, possimus temporibus sapiente at beatae quisquam itaque doloribus sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </template>
  
  <script setup>
  import Offers from '../components/Offers.vue'
  import { useStore } from "vuex";
  import { onMounted } from 'vue';

const store = useStore();

onMounted( async() =>{
  store.dispatch('updateActiveNav', "home");
});
  </script>
  
  <style scoped>
  h1{
    text-align: center;
    font-size: 32px;
    font-weight:bolder;
  }
  p{
    text-align: center;
  }
  .category {
    width: 190px;
    height: 190px;
  }
  .feature {
    width: 160px;
    height: 160px;
  }
  .col p {
    max-width: 254px;
  }
  @media screen and (max-width: 767px) {
    .category {
      width: 130px;
      height: 130px;
    }
    .category > svg {
      width: 50px;
      height: 50px;
    }

  }
  </style>
s  