<script setup>
  import HeaderMain from './components/Header/HeaderMain.vue';
  import MainBg from './components/mainBG/MainBg.vue';
  import MainConcept from './components/main_conepts/MainConcept.vue';
  
</script>

<template>

  <div class="relative font-Dana w-full" v-cloak>

    <HeaderMain />

    <MainBg />

    <MainConcept />

  </div>

</template>



<style>

[v-cloak] {
  display: none;
}

</style>