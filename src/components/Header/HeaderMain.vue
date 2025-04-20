<template>
    <header class="fixed top-0 z-40 w-screen flex flex-row-reverse
     justify-between transition-all duration-500 rounded-b-3xl items-center py-1 md:py-6
      tracking-tighter px-5 sm:px-10 xl:px-20 bg-black/30 text-white">
    

      
        <!-- Company Title -->
        <div class="md:mr-20 flex flex-col items-center p-1 space-y-1">
            <div class="flex flex-row items-center gap-x-2">
                <h1 class="text-2xl md:text-xk lg:text-2xl xl:text-3xl font-extrabold">Sky Chaser</h1>
                <img src="/src/assets/images/Header/vecteezy_metallic-style-logo_33659577.png" class="w-9 md:w-12 lg:w-14 xl:w-16 md:bg-cover" alt="">
            </div>
            <div class="w-full h-[2px] bg-gradient-to-r from-gray-500 to-transparent"></div>
        </div>

        <div class="hidden lg:flex items-center gap-x-1">
            <h2 id="titleH2" class="text-sm lg:text-base xl:text-xl">{{ displayedText }}</h2>
            <span v-if="isTyping" class="typing-indicator"></span> <!-- Typing indicator line -->
        </div>

        <section id="contents" class="hover:bg-gradient-to-l hover:bg-black/90 transition-colors duration-500 hidden md:flex flex-row py-2 md:px-2 lg:px-4  xl:px-6 md:gap-x-5 lg:gap-x-5 xl:gap-x-8 ml-20 lg:text-xl border-r-2 rounded-md bg-gradient-to-l border-black from-black via-transparent to-transparent">
    
        <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500 ">
                <a href="#home">خانه</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
            
            <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500">
                <a href="#about_us">درباره ما</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
            <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500">
                <a href="#team">تیم</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
            <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500">
                <a href="#process">پردازش</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
            <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500">
                <a href="#projects">کارها</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
            <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500">
                <a href="#prices">قیمت</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
            <div class="group flex flex-col items-start relative hover:scale-105 transition-transform duration-500">
                <a href="#contact_us">کار با ما</a>
                <div class="absolute right-0 bottom-0 h-[2px] rounded-full bg-gray-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></div>
            </div>
        </section>

        <!-- Hamburger Menu -->
        <section class="block md:hidden">
            <HamburgerMenu />
        </section>
    </header>
</template>

<script setup>
import HamburgerMenu from './HamburgerMenu.vue';
import { onMounted, ref, onBeforeUnmount } from 'vue';

let navFlag = ref(false);

const displayedText = ref('');
const isTyping = ref(false); // Track typing state

const texts = [
    'با تجربه سی سال موفقیت در کسب و کار آنلاین', 
    'ما تجارت میکنیم , نه فقط بازاریابی'
];

let textIndex = 0;
let charIndex = 0;

const typeText = () => {
    isTyping.value = true; // Set typing state to true
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            displayedText.value += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Delay for typing each character
        } else {
            // When the full text is typed, pause and then move to the next text
            setTimeout(() => {
                displayedText.value = '';
                charIndex = 0; // Reset character index
                textIndex = (textIndex + 1) % texts.length; // Loop back to the first text
                isTyping.value = false; // Set typing state to false
                typeText(); // Start typing new text
            }, 2000); // Pause before starting new text
        }
    }
};

const headerChange = () => {
    let header = document.querySelector("header");
    let scrollWatcher;

    let quickLinks = document.getElementById('contents');
    
    document.addEventListener('scroll', () => {
        scrollWatcher = Math.round(window.scrollY);
        
        if (scrollWatcher >= 40){
            header.classList.remove("bg-black/30", "text-white", "md:py-6");
            header.classList.add("md:py-4", "text-black", "bg-white");
            
            quickLinks.classList.remove("hover:bg-gradient-to-l", "hover:bg-black/90", "bg-gradient-to-l", "border-black",  "from-black",  "via-transparent",  "to-transparent");
            quickLinks.classList.add("hover:bg-gradient-to-l", "hover:bg-gray-100/90", "bg-gradient-to-l", "border-gray-200/90",  "from-gray-200",  "via-transparent",  "to-transparent");   
        } else {
            if (!header.classList.contains("bg-black/30", "text-white", "md:py-6")){
                header.classList.remove("md:py-4", "text-black", "bg-white");
                quickLinks.classList.remove("hover:bg-gradient-to-l", "hover:bg-gray-100/90", "bg-gradient-to-l", "border-gray-200/90",  "from-gray-200",  "via-transparent",  "to-transparent");
                
                header.classList.add("bg-black/30", "text-white", "md:py-6");
                
                quickLinks.classList.add("hover:bg-gradient-to-l", "hover:bg-black/90","border-black", "bg-gradient-to-l", "from-black", "via-transparent", "to-transparent");
            }
        }


    });
}


onMounted(() => {
    typeText(); // Start typing animation
    headerChange();
});



onBeforeUnmount(()=> {
    window.removeEventListener("scroll", ()=>{})
})



</script>

<style scoped>
h2 {
    opacity: 1;
    transition: opacity 0.5s ease;
}
h2:empty {
    opacity: 0; /* Fade out when empty */
}
.typing-indicator {
    display: inline-block;
    width: 2px; /* Width of the typing indicator */
    height: 20px; /* Height of the typing indicator */
    background-color: black; /* Color of the indicator */
    animation: blink 0.8s infinite; /* Blinking effect */
    margin-left: 5px; /* Space between text and indicator */
}

@keyframes blink {
    0%, 100% {
        opacity: 1; /* Full opacity */
    }
    50% {
        opacity: 0; /* Half opacity */
    }
}
</style>