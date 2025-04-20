<template>
 <!-- Hamburger icon -->
 <div 
  @click="toggleMenu" 
  id="nav-icon2" 
  class="w-[40px] h-[30px] relative mx-auto my-4 cursor-pointer transition-transform duration-500"
  :class="{ open: isOpen }" 
  :aria-expanded="isOpen">
  
  <!-- Top Line -->
  <span 
    class="block absolute h-[4px] w-11/12 bg-gray-200 rounded-full transition-all duration-300 origin-center"
    :class="{
      'top-0 rotate-45 translate-y-[8px]': isOpen,
      'top-0': !isOpen
    }">
  </span>
  
  <!-- Middle Line -->
  <span 
    class="block absolute h-[4px] w-11/12 bg-gray-200 rounded-full transition-opacity duration-300"
    :class="{
      'opacity-0': isOpen,
      'opacity-100': !isOpen
    }"
    style="top: 9px;">
  </span>
  
  <!-- Bottom Line -->
  <span 
    class="block absolute h-[4px] w-11/12 bg-gray-200 rounded-full transition-all duration-300 origin-center"
    :class="{
      'bottom-0 -rotate-45 translate-y-[-10px]': isOpen,
      'bottom-0': !isOpen
    }"
    style="top: 18px;">
  </span>
</div>
  <!-- nav menu -->
  <nav  id="navB" class="absolute transform translate-x-[560px]  space-y-2 h-screen px-5 sm:px-3 
   transition-transform duration-500 flex flex-col items-center w-56 bg-gradient-to-t bg-white text-black rounded-lg shadow-lg">

  <div class="bg-gradient-to-b h-72 from-sky-300 via-sky-100 to-transparent w-[120%] sm:w-[111%]">
    <h1 class="text-sm text-transparent">Transparent Text</h1>
  </div>


  <!-- hr div
  <div class="w-full h-[2px] bg-gradient-to-l from-blue-950 via-blue-700 to-blue-900 transform -translate-x-2 sm:-translate-x-0 "></div>

    -->
 

    <section class="flex flex-col w-full -mt-12 m-6">
      <ul v-for="(eachLi, index) in liArr" :key="index" class="space-y-[2px] mt-2 w-full  flex-col justify-center">
      <a :href="addHrefToScroll[index]" @click="closingMenu"  class="flex flex-row-reverse items-center w-[94%] mr-1 bg-sky-50 rounded-xl p-[3px] hover:scale-[1.06]
       transition-all duration-500 justify-end gap-x-4">
        <h3  class="hover:text-[#d3531a] font-medium mt-1">{{ eachLi }}</h3>
            <span>|</span>
        <span v-html="svgArray[index]" class="size-6"></span>
      </a>
      <!-- hr div -->
     <div class="w-full h-1 animated-bg mt-3 "></div>
    </ul>

    </section>

<!--     
    divider div
    <div class="w-full h-[2px] bg-gradient-to-l from-blue-950 via-blue-700 to-blue-900 mt-12 transform -translate-x-2 sm:-translate-x-0"></div> -->

  
    <section class="flex flex-col items-center justify-start h-screen bg-gradient-to-t from-sky-300 via-sky-100 to-transparent w-[120%] sm:w-[111%] ">

            <!-- socialMedia icons -->
            <div class="w-[88%] px-2 flex flex-row justify-center gap-x-3 border-b-2 pb-[2px] rounded-2xl mt-2">
                  <!-- facebook -->
                  <a  href="#"  class=" w-auto hover:scale-[1.06] transition-transform duration-500" >
                    <img src="/src/assets/images/socialMedias/icons8-facebook-logo-48.png" 
                    alt="" class="">
                  </a>
                  <!-- instagram -->
                  <a  href="#"  class=" w-auto hover:scale-[1.06] transition-transform duration-500" >
                    <img src="/src/assets/images/socialMedias/icons8-instagram-48.png"
                    alt="" class="">
                  </a>
                    <!-- Linkedin -->
                  <a  href="#"  class=" w-auto hover:scale-[1.06] transition-transform duration-500" >
                    <img src="/src/assets/images/socialMedias/icons8-linkedin-logo-48.png"
                    alt="" class="">
                  </a>
                  <!-- Telegram -->
                <a  href="#"  class=" w-auto hover:scale-[1.06] transition-transform duration-500" >
                  <img src="/src/assets/images/socialMedias/icons8-telegram-48.png"
                  alt="" class="">
                </a>     

          </div>

    </section>

  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';

const isOpen = ref(false);
const liArr = ["خانه", "درباره ما", "تیم", "پردازش", "کارها", "قیمت", "کار با ما"];
const addHrefToScroll = ["#home","#about_us", "#team", "#process" , "#projects", "#prices", "#contact_us"];
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
` ,
`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
`,

`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
</svg>
`,

`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
`
];

const toggleMenu = async () => {  
  isOpen.value = !isOpen.value;  
  await nextTick(); // Wait for DOM updates
  hamburgerChangeColor(); // Run after DOM updates
  
};
let arrayOfSpanTags;
let scrollWatcher2;

function hamburgerChangeColor(){  
  const burgerElem = document.getElementById("nav-icon2");  
  if (!burgerElem) return; // Check if the element exists  

  arrayOfSpanTags = Array.from(burgerElem.children);  
  scrollWatcher2 = Math.round(window.scrollY);  

  arrayOfSpanTags.forEach(span => {  
    if (scrollWatcher2 >= 40) {  
      span.classList.remove("bg-gray-200");  
      span.classList.add("bg-blue-950");  
    } else {  
      span.classList.remove("bg-blue-950");  
      span.classList.add("bg-gray-200");  
    }  
  });  
};  



watch(isOpen, (newValue) => {  
  navTransform(newValue);  
  hamburgerChangeColor(); // Call this when menu state changes  
});  

function navTransform(isOpen) {  
  const navB = document.getElementById("navB");  
  if (isOpen) {  
    navB.classList.remove('translate-x-[560px]');  
    navB.classList.add('translate-x-[38px]');  
  } else {  
    navB.classList.remove('translate-x-[38px]');  
    navB.classList.add('translate-x-[560px]');  
  }  
}  

function handleScroll(){
  hamburgerChangeColor()
}

function closingMenu(){

        isOpen.value = false;
        
}




onMounted(() => {  
  window.addEventListener('scroll', handleScroll); // Add scroll listener  
  hamburgerChangeColor(); // Check initial scroll position  
  
  


});  

onBeforeUnmount(() => {  
  window.removeEventListener('scroll', hamburgerChangeColor); // Clean up listener  
});  

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
