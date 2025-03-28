<template>

    <section class="absolute bg-sky-50 z-30 top-[800px]  
    flex flex-col items-center w-full">
       
        <AboutUs />
           
        <OurTeam />

        <OurWayButton />

    </section>


</template>


<script setup>
import AboutUs from './About_Us/AboutUs.vue';
import OurTeam from './ourTeam/OurTeam.vue';
import OurWayButton from './ourWayButton/OurWayButton.vue';


</script>