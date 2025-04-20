<template >

    <main id="contact_us"  class=" w-full  flex flex-col space-y-3 items-center bg-sky-100/80 py-3">
         <!-- title -->
        <div id="contact_us"  class="flex flex-col items-center space-y-3 w-full sm:w-[88%]">
            <h1 class="text-4xl tracking-tighter">در تماس باشید</h1>

            <!-- hr div -->
            <div class="bg-gradient-to-l from-blue-600 via-blue-300 to-blue-600  w-[88%] rounded-2xl h-[3px] "></div>

            <h2 class="text-xl sm:text-2xl tracking-tight">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</h2>

        </div>

        
        <section class="w-screen lg:px-16 xl:px-32 flex flex-col-reverse items-center   lg:flex-row-reverse lg:justify-center lg:gap-x-32">
            <!-- contact form -->
            <form class="w-[84%] sm:w-[78%] md:w-[66%] lg:w-[45%] xl:w-[41%] flex flex-col px-4 py-7 rounded-2xl rounded-t-3xl space-y-3
            border border-blue-700 mt-4 transform translate-y-4 md:translate-y-0">
                <!-- name and email -->
                <div class="flex flex-row w-full justify-between">
                    <!-- name -->
                    <div  class="w-[40%] lg:w-[46%] flex flex-col justify-start space-y-1">
                        <div class="gap-x-2 flex flex-row items-center">
                            <h2 class="text-lg">نام</h2>
                            <span class="text-sm text-gray-400">*</span>
                        </div>
                        <input 
                            @focus="addShadow($event)" 
                            @blur="removeShadow($event)"
                            class="transition-all duration-500 py-[6px] sm:py-2 px-2 sm:px-6 md:px-10 lg:px-8 xl:px-10 rounded-2xl border border-blue-600" 
                            placeholder="نام شما" 
                            v-model="name" 
                            type="text" 
                            aria-label="نام شما">
                    </div>
                    <!-- email -->
                    <div class="w-[40%] lg:w-[46%] flex flex-col justify-start space-y-1">
                        <div class="gap-x-2 flex flex-row items-center">
                            <h2 class="text-lg">ایمیل</h2>
                            <span class="text-sm text-gray-400">(اختیاری)</span>
                        </div>
                        <input 
                            @focus="addShadow($event)" 
                            @blur="removeShadow($event)"
                            class="transition-all duration-500 py-[6px] sm:py-2 px-2 sm:px-6 md:px-10 lg:px-8 xl:px-10  rounded-2xl border border-blue-600 " 
                            placeholder="ایمیل شما" 
                            v-model="email" 
                            type="email" 
                            aria-label="ایمیل شما">
                    </div>
                </div>
                <!-- subject -->
                <div class="flex flex-col justify-start space-y-1">
                    <div class="gap-x-2 flex flex-row items-center">
                        <h2 class="text-lg">موضوع</h2>
                        <span class="text-sm text-gray-400">*</span>
                    </div>
                    <input 
                        @focus="addShadow($event)" 
                        @blur="removeShadow($event)"
                        class="transition-all duration-500 py-2 px-10 rounded-2xl border border-blue-600" 
                        placeholder="موضوع" 
                        v-model="subject" 
                        type="text" 
                        aria-label="موضوع">
                </div>
                <!-- text area -->
                <div class="flex flex-col justify-start space-y-1">
                    <div class="gap-x-2 flex flex-row items-center">
                        <h2 class="text-lg">پیام</h2>
                        <span class="text-sm text-gray-400">*</span>
                    </div>
                    <textarea 
                        @focus="addShadow($event)" 
                        @blur="removeShadow($event)"
                        class="transition-all duration-500 py-2 px-10 rounded-2xl border border-blue-600" 
                        placeholder="پیام شما" 
                        v-model="message" 
                        rows="5"
                        aria-label="پیام شما">
                    </textarea>
                </div>
                <!-- submit button -->
                <button 
                    @click.prevent="sendBtn" type="submit" class="mt-4 w-[35%] mx-auto text-lg font-medium py-2 px-2 bg-blue-600 text-white rounded-2xl transition-opacity duration-300 hover:opacity-80 cursor-pointer">
                    ارسال
                </button>
            </form>
    
            <!-- detail info -->
            <div class="w-[76%] py-3 pt-5  sm:w-[70%] md:w-[60%] lg:w-[37%] xl:w-[33%] space-y-5 flex flex-col px-7
            border-r border-blue-500 rounded-lg">
    
                <!-- info and svg -->
                <div v-for="(svgN, index) in svgArray" :key="index"  class="w-full flex flex-col items-center space-y-3">
    
                    <section class="w-full flex flex-row justify-start gap-x-5">
                        <!-- svg -->
                        <div class="w-[16%] lg:w-[22%] xl:w-[19%] h-full py-3 flex justify-center items-center rounded-full bg-blue-600">
                            <i class="" :class="svgN"></i>
                        </div>
        
                        <!-- info -->
                        <div  class="flex flex-col space-y-1 w-[99%] py-1 px-6 border-r-2 rounded-2xl border-blue-950/60">
                            <h1 class="text-2xl md:text-lg lg:text-xl xl:text-2xl font-Dana  font-semibold">{{ infoTitle[index] }}</h1>
                            <h2 :style="{'direction' : index === 0 ? 'rtl' : 'ltr'}" class="text-lg md:text-base xl:text-lg">{{ infoDescript[index] }}</h2>
                        </div>
                    </section>
    
                    <!-- hr div -->
                    <div :style="{'display' : index === 2 ? 'none' : 'block'}" class="w-[80%] h-[1px] bg-gradient-to-l from-blue-200 via-blue-300 to-blue-200"></div>
    
                </div>
    
    
    
                <h1 class="ml-10 text-3xl font-medium">مارا دنبال کنید</h1>
    
                <!-- hr div -->
                <div class="w-[98%] mx-auto h-[2px] bg-gradient-to-l from-blue-300 via-blue-500 to-blue-300"></div>
    
                    <!-- social media -->
                <div class="w-full flex flex-row justify-center gap-x-4 -mt-2">
    
                    <div v-for="(icon, index) in socialMediaIcons" :key="index" class="px-3 py-2 rounded-full cursor-pointer transition-all duration-500 hover:opacity-80"
                    :class="{'bg-blue-500' : index === 0, 'bg-blue-700/70' : index === 3, 'bg-purple-900/70': index === 1, 'bg-sky-400' : index === 2}">
                        <i class="socialI"  :class="icon"></i>
                    </div>
    
    
                </div>
    
    
            </div>
        </section>
    </main>
</template>

<script setup>
import { usePopupStore } from "../../../stores/usePopUpStore";
import { ref} from "vue";

const popUpElem = usePopupStore();

const svgArray = ["fa fa-map-marker", "fa fa-assistive-listening-systems", "fa fa-at"];

const infoTitle = ["آدرس", "شماره تماس", "پست الکترونیک"];

const infoDescript = [  
    "تهران، خیابان ولیعصر، نبش خیابان طالقانی", // Address  
    "021-12345678", // Phone number  
    "example@example.com" // Email  
];  

const socialMediaIcons = [
    "fa fa-instagram",
    "fa fa-linkedin",
    "fa fa-twitter",
    "fa fa-telegram"
]


let name = ref("");
let email = ref("");
let subject = ref("");
let message = ref("");

const addShadow = (event) => {
    event.target.classList.add("shadow-inner", "shadow-blue-500");
};

const removeShadow = (event) => {
    event.target.classList.remove("shadow-inner", "shadow-blue-500");
};



function sendBtn() {  

    name.value = name.value.trim();
    subject.value = subject.value.trim();
    message.value = message.value.trim()
    
    if (!name.value) {  

        popUpElem.errorPopUp("نام باید وارد شود !"); 

    } else if (!subject.value) {  

        popUpElem.errorPopUp("لطفا موضوع را مشخص کنید ");

    } else if (!message.value) {  

        popUpElem.errorPopUp("لطفا پیام خود را بنویسید");

    } else {  

        popUpElem.showPopup("با موفقیت ارسال شد !");  
        name.value = "";
        subject.value = "";
        message.value = "";

    }  
}


</script>

<style scoped>
input, textarea {
    outline: none;
}

i {
    font-size: 27px;
    color: white;
}

.socialI {
    font-size: 19px;
}
</style>
