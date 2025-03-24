<template>
  <div 
    @click="toggleMenu" 
    id="nav-icon2" 
    class="w-[40px] h-[30px] relative mx-auto my-12 cursor-pointer transform transition-transform duration-500" 
    :class="{ open: isOpen }" 
    :aria-expanded="isOpen">
    <span class="block absolute h-[5px] w-full  bg-sky-950 transition-all duration-300 ease-in-out" :class="{ 'top-0': !isOpen, 'top-[12px] rotate-45': isOpen }"></span>
    <span class="block absolute h-[5px] w-full  bg-blue-950 transition-all duration-300 ease-in-out" :class="{ 'opacity-100': !isOpen, 'opacity-0': isOpen }" style="top: 12px;"></span>
    <span class="block absolute h-[5px] w-full  bg-sky-950 transition-all duration-300 ease-in-out" :class="{ 'top-[24px]': !isOpen, 'top-[12px] -rotate-45': isOpen }"></span>
  </div>
  
  <nav id="navB" class="absolute transform translate-x-[560px] py-3 space-y-2
   transition-transform duration-500 flex flex-col items-center w-44 bg-white text-black rounded-lg shadow-lg">

  <!-- Analyitical png -->
  <div >
    <img src="/src/assets/images/Header/icons8-data-analysis-68.png" alt="">

  </div>

  <div class="w-11/12 h-[2px] bg-gradient-to-l from-gray-400 via-gray-200 to-gray-400 "></div>

   <!-- Logo -->
   <div class="w-[88%] px-2 flex flex-row justify-center gap-x-3 border-b-2 pb-[2px] rounded-2xl">
        <!-- facebook -->
        <a href="#" class="w-auto hover:scale-[1.06] transition-transform duration-500" >
          <img src="/src/assets/images/socialMedias/icons8-facebook-logo-48.png" 
           alt="" class="">
        </a>
        <!-- instagram -->
        <a href="#" class="w-auto hover:scale-[1.06] transition-transform duration-500" >
          <img src="/src/assets/images/socialMedias/icons8-instagram-48.png"
           alt="" class="">
        </a>
          <!-- Linkedin -->
        <a href="#" class="w-auto hover:scale-[1.06] transition-transform duration-500" >
          <img src="/src/assets/images/socialMedias/icons8-linkedin-logo-48.png"
           alt="" class="">
        </a>
        <!-- Telegram -->
      <a href="#" class="w-auto hover:scale-[1.06] transition-transform duration-500" >
        <img src="/src/assets/images/socialMedias/icons8-telegram-48.png"
         alt="" class="">
      </a>     

   </div>

   <!-- divider div -->
   <div class="w-11/12 h-[2px] bg-gradient-to-l from-slate-400 via-slate-300 to-slate-400 mt-3"></div>



    <ul v-for="(eachLi, index) in liArr" :key="index" class="space-y-[2px] mt-2 w-full  flex-col justify-center">
      <a href="#"  class="flex flex-row-reverse items-center w-[94%] mr-1 hover:bg-sky-50 rounded-xl p-[3px] hover:scale-[1.06]
       transition-all duration-500 justify-end gap-x-4">
        <h3 href="#" class="hover:text-[#d3531a] font-medium mt-1">{{ eachLi }}</h3>
            <span>|</span>
        <span v-html="svgArray[index]" class="size-6"></span>
      </a>
      <!-- hr div -->
     <div class="w-full h-1 animated-bg "></div>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';

const isOpen = ref(false);
const liArr = ["خانه", "درباره ما", "تیم", "پردازش"];
const svgArray = [
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
  `,
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
  </svg>
` 
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  navTransform(newValue);
});

function navTransform(isOpen) {
  const navB = document.getElementById("navB");
  if (isOpen) {
    navB.classList.remove('translate-x-[560px]');
    navB.classList.add('translate-x-[50px]');
  } else {
    navB.classList.remove('translate-x-[50px]');
    navB.classList.add('translate-x-[560px]');
  }
}
</script>

<style scoped>
#nav-icon2 {
  transition: transform 0.5s ease-in-out;
}

#nav-icon2.open {
  transform: rotate(90deg);
}

.animated-bg {
  background: linear-gradient(-90deg, rgba(0, 174, 255, 0.2) 0%, rgba(0, 174, 255, 0) 100%);
  /* transition: background-color 0.5s ease; */
  border-radius: 9px;
}




</style>
