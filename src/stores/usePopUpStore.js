// stores/usePopupStore.js  
import { defineStore } from 'pinia';  
import { ref } from 'vue';  

export const usePopupStore = defineStore('popup', () => {  
    const isVisible = ref(false);  
    const message = ref('');  

    const showPopup = (msg) => {  
        message.value = msg;  
        isVisible.value = true;  

        // Create the popup element  
        const divElem = document.createElement("div");  
        divElem.setAttribute("class", "w-52 text-sm md:text-base  sm:w-68 py-5 bg-green-600 fixed -top-20 rounded-3xl mx-auto left-0 right-0 z-[9999] text-center transition-all duration-500 text-white ");  
        divElem.textContent = message.value;  

        document.body.insertAdjacentElement("afterbegin", divElem);  

        // Show the popup  
        setTimeout(() => {  
            divElem.classList.remove("-top-20");  
            divElem.classList.add("top-4");  
        }, 400);  

        // Hide the popup after a few seconds  
        setTimeout(() => {  
            divElem.classList.remove("top-4");  
            divElem.classList.add("-top-20");
            // divElem.classList.remove('fixed')  

            setTimeout(() => {  
                divElem.remove();  
                isVisible.value = false;
            }, 4500);  
        }, 3600);  
    };  


    const errorPopUp = (msg)=>{
        message.value = msg;  
        isVisible.value = true;  

        // Create the popup element  
        const divElem = document.createElement("div");  
        divElem.setAttribute("class", " w-52 text-sm md:text-base sm:w-68 py-5 bg-red-600 fixed -top-20 rounded-3xl mx-auto left-0 right-0 z-[9999] text-center transition-all duration-500 text-white ");  
        divElem.textContent = message.value;  

        document.body.insertAdjacentElement("afterbegin", divElem);  

        // Show the popup  
        setTimeout(() => {  
            divElem.classList.remove("-top-20");  
            divElem.classList.add("top-4");  
        }, 400);  

        // Hide the popup after a few seconds  
        setTimeout(() => {  
            divElem.classList.remove("top-4");  
            divElem.classList.add("-top-20");
            // divElem.classList.remove('fixed')  

            setTimeout(() => {  
                divElem.remove();  
                isVisible.value = false;
            }, 4500);  
        }, 3600);  
    }

    return {  
        isVisible,  
        message,  
        showPopup,  
        errorPopUp
    };  
});

