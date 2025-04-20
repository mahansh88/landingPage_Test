<template>
    <main class="w-screen">
      <div class="w-full py-16 flex flex-col items-center space-y-7 bg-black/85">
        <!-- title -->
        <div class="text-white tracking-tight text-2xl sm:text-4xl">
          <h1>از جدید ترین اخبار ما ، با خبر شوید.</h1>
        </div>
  
        <!-- hr div -->
        <div class="bg-gradient-to-l from-blue-200 via-blue-300/80 to-blue-200 rounded-full h-[2px] w-[30%]"></div>
  
        <!-- search options -->
        <div class="flex flex-row w-full justify-center gap-x-4">
          <input v-model="email" class="bg-white w-[60%] sm:w-[54%] md:w-[40%] py-3 rounded-lg px-5" placeholder="آدرس ایمیل" type="text" />
          <button @click.prevent="searchJoinBtn" class="py-3 rounded-lg px-5 bg-blue-600 text-white cursor-pointer transition-opacity hover:opacity-85 duration-300" type="button">عضویت!</button>
        </div>
  
        <!-- Feedback Message -->
        <div v-if="message" class="text-red-500 mt-2">{{ message }}</div>
      </div>
      


      
    </main>
  </template>
  
<script setup>
    import { ref} from 'vue';
    import { usePopupStore } from '../../../stores/usePopUpStore';

    const popUpElement = usePopupStore()

    const email = ref('');
    const message = ref('');
    // const successMessage = ref(false);

    function searchJoinBtn() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,6}\.[a-zA-Z]{2,3}$/;

        if (!emailRegex.test(email.value)) {
            message.value = 'لطفاً یک آدرس ایمیل معتبر وارد کنید.';
            email.value = "";
        } else {
            message.value = '';
           
          popUpElement.showPopup("با موفقیت ارسال شد")

          email.value = "";

        }
    }



  

    // function popUpElement(){
    //     let divElem  = document.createElement("div");
    //     divElem.setAttribute("class", "w-52 px-3 py-6 bg-green-600 fixed -top-20 rounded-3xl mx-auto left-0 right-0 z-[9999] text-center transition-all duration-500 text-white ");
    //     divElem.textContent = "باموفقیت انجام شد !"
    //     document.body.insertAdjacentElement("afterbegin", divElem);

    //     setTimeout(() => {
    //       divElem.classList.remove("-top-20");
  
    //       divElem.classList.add("top-4");
          
    //     }, 400);

        
    //     setTimeout(() => {
    //         // divElem.remove()
    //         divElem.classList.remove("top-4");
    //         divElem.classList.add("-top-20");

    //         setTimeout(() => {
    //             divElem.remove()
    //         }, 4500);


    //     }, 3600);
    // }




</script>
  