<template>
    <section class="w-full bg-gradient-to-l items-center space-y-3 from-white via-sky-100 to-white py-3 px-4 flex flex-col">
        <!-- title -->
        <div class="flex flex-col items-center space-y-3 w-full sm:w-[88%]  ">
            <h1 class="text-4xl tracking-tighter">یک تیم خلاق</h1>

            <!-- hr div -->
            <div class="w-[80%] h-[4px] bg-gradient-to-l from-blue-600 via-blue-300 to-blue-600"></div>

            <h2 class="text-xl sm:text-2xl tracking-tight">برای هر نوع بحثی با کارشناسان ما ملاقات کنید</h2>

        </div>

        <!-- cards -->
        <div class="w-full flex flex-col lg:flex-row items-center justify-center space-y-3 lg:space-y-0 lg:gap-x-4 ">
            <div v-for="(src, index) in imgSrc" :key="index" class=" backdrop-blur-lg
            group relative rounded-3xl lg:w-[28%] xl:w-[18%] sm:h-[330px] lg:h-[360px] overflow-hidden bg-black ">
                <img class="w-full h-full rounded-3xl object-cover transition-all duration-300 group-hover:opacity-40" :src="src" alt="Team Member">
                
                <!-- Content that appears on hover -->
                <div  class="absolute bottom-0 left-0 right-0 bg-transparent items-center
                text-white  flex flex-col space-y-2 
                p-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">

                    <div class="w-full  bg-transparent text-lg lg:text-base">

                        <p>نام و نام خانوادگی: [نام عضو]</p>
                        <p>سمت: [سمت عضو]</p>
                        <p>تجربه: [تجربه کاری یا تخصص عضو]</p>

                    </div>

                    <!-- hr div -->
                    <div class="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 rounded-full h-[3px] w-full"></div>


                    <!-- social media -->
                    <section class="flex flex-row w-[54%] sm:w-[49%] lg:w-[80%] justify-center gap-x-6 lg:gap-x-3 ">

                        <a class="outline outline-white rounded-full p-1 hover:bg-transparent hover:backdrop-blur-sm
                        transition-all duration-500 hover:scale-[1.04]" v-for="(socialSrc, socialIndex) in socialMediaSrc" :key="socialIndex" href="#">
                            <img  :src="socialSrc" alt="">
                        </a>

                    </section>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>


const imgSrc = [
    '/src/assets/images/ourTeam/vecteezy_ai-generated-a-businessman-shake-hands-with-another-man-in_37337472.jpg',
    '/src/assets/images/ourTeam/vecteezy_ai-generated-a-young-business-woman-standing-in-front-of-a_35329870.jpg',
    '/src/assets/images/ourTeam/vecteezy_ai-generated-a-businessman-shake-hands-with-another-man-in_37337472.jpg',
    '/src/assets/images/ourTeam/vecteezy_ai-generated-a-young-business-woman-standing-in-front-of-a_35329870.jpg'
];


const socialMediaSrc = [
    "/src/assets/images/socialMedias/icons8-facebook-logo-48.png",
    "/src/assets/images/socialMedias/icons8-telegram-48.png",
    "/src/assets/images/socialMedias/icons8-linkedin-logo-48.png",
    "/src/assets/images/socialMedias/icons8-instagram-48.png",
]


</script>

<style scoped>
/* Add any additional styles here */
</style>
