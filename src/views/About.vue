<template> 
    <div class="bg-yellow">
        <section class="container-fluid">
            <div class="container py-5">
                <h2>About Us</h2>
                <p class="lh-lg">Welcome to Xetron! We are an innovative eCommerce company committed to providing top-notch products and services to our customers. Our team is composed of passionate individuals who have worked tirelessly to bring this platform to life as part of our final project in a comprehensive Vue.js and PHP course.</p>
            </div>
        </section>
        <section class="container-fluid bg-dark">     
            <div class="container py-5">
                <h2 class="text-yellow">Our Mission</h2>
                <p class="lh-lg text-yellow">At Xetron, our mission is to revolutionize the eCommerce industry by providing exceptional products and unparalleled customer service. We aim to create a seamless online shopping experience that exceeds customer expectations and fosters long-term loyalty.</p>      
            </div>       
        </section>  
        <section class="container-fluid bg-yellow">
            <div class="container py-5">
                <h2 class="">Our Vision</h2>
                <p class="lh-lg">Our vision is to be a leading eCommerce platform known for innovation, reliability, and customer satisfaction. We aspire to continuously evolve and adapt to the ever-changing digital landscape, ensuring that our customers always receive the best possible experience.</p>
            </div>
        </section>
        <section class="container-fluid bg-dark">
            <div class="container py-5">
                <h2 class="text-yellow">Our Values</h2>
                <div class="values text-yellow">
                    <ul class="lh-lg">
                        <li><strong>Customer Focus:</strong> We prioritize our customers’ needs and strive to provide excellent service and support.</li>
                        <li><strong>Innovation:</strong> We embrace new ideas and technologies to stay ahead in the eCommerce industry.</li>
                        <li><strong>Integrity:</strong> We conduct our business with honesty and transparency, building trust with our customers and partners.</li>
                        <li><strong>Teamwork:</strong> We believe in the power of collaboration and work together to achieve our common goals.</li>
                        <li><strong>Excellence:</strong> We are committed to delivering high-quality products and services.</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="container-fluid bg-yellow">
            <div class="container py-5">
                <h2 class="mb-4">Our Team</h2>
                <div class="row">
                    <!-- Team Member 1 -->
                    <div class="col-md-4 team-member d-flex flex-column justify-content-center align-items-center">
                        <img src="/orion.jpg" class="border border-3 border-dark mx-auto rounded-circle" alt="Team Member 1">
                        <h4 class="my-3 text-center">Johnson Orion</h4>
                        <p class="text-center">Johnson orion has honed his skills in Vue.js, mastering the setup composition API to create dynamic and responsive user interfaces. He has also developed a strong foundation in PHP for backend development. Throughout the course, Johnson has learned to integrate complex functionalities smoothly, enhancing the overall user experience.</p>
                    </div>
                    <!-- Team Member 2 -->
                    <div class="col-md-4 team-member d-flex flex-column justify-content-center align-items-center">
                        <img src="/shedrach.jpg" class="border border-3 border-dark mx-auto rounded-circle" alt="Team Member 2">
                        <h4 class="my-3 text-center">James Shedrach</h4>
                        <p class="text-center">James shedrach has excelled in integrating Bootstrap with Vue.js to design appealing and user-friendly layouts. he has also gained significant experience in handling form submissions and server-side processing with PHP. James creativity and attention to detail have been crucial in creating visually stunning and highly functional interfaces.</p>
                    </div>
                    <!-- Team Member 3 -->
                    <div class="col-md-4 team-member d-flex flex-column justify-content-center align-items-center">
                        <img src="/genesis.jpg" class="border border-3 border-dark mx-auto rounded-circle" alt="Team Member 3">
                        <h4 class="my-3 text-center">Victor Genesis</h4>
                        <p class="text-center">victor genesis has focused on state management in Vue.js, using Vuex to manage complex application states. Additionally, he has enhanced his backend skills by developing RESTful APIs with PHP. Genesis analytical skills and problem-solving abilities have been vital in ensuring the application's reliability and performance.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from "vuex";

const store = useStore();

onMounted(() =>{
    store.dispatch('updateActiveNav', "about");
});
</script>

<style scoped>
    .values ul {
        list-style-type: disc;
        padding-left: 20px;
    }
    img {
        width: 180px;
        height: 180px;
    }
</style>