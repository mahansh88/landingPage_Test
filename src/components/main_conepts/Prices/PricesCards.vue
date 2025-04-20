<template>

    <section id="prices" class="bg-sky-50 w-full py-3  space-y-3">

        <!-- title -->
        <div  class="flex flex-col items-center space-y-3 w-full sm:w-[88%] mx-auto ">

            <h1 class="text-4xl tracking-tighter">طرح های قیمت</h1>

            <!-- hr div -->
            <div class="bg-gradient-to-l from-blue-600 via-blue-300 to-blue-600  w-[88%] rounded-2xl h-[3px] " ></div>


            <h2 class="text-xl sm:text-2xl tracking-tight">لورم ایپسوم یک متن ساختگیست</h2>
            

        </div>


        <!-- cards -->
        <div class="w-full flex flex-col items-center space-y-3 md:space-x-0 md:flex-row justify-center gap-x-8 lg:gap-x-12 xl:gap-x-16">


            <div class="group w-[80%] md:w-[33%] lg:w-[28%] xl:w-[24%]
            py-3 rounded-lg px-4 bg-white flex flex-col items-center hover:cursor-help" v-for="(title, index) in priceTitle" :key="index">

                <h1 class="text-4xl font-bold tracking-tight">{{ title }}</h1>

                <h2 class="text-xl font-semibold">{{ priceTimeLine[index] }}</h2>

                <!-- hr div -->
                <div class="bg-gradient-to-r from-blue-300  via-blue-500 to-blue-300  w-[88%] rounded-2xl h-[3px] " ></div>


                <!-- price section -->
                <section class="relative flex justify-center items-center">

                    <div class="absolute flex flex-col items-center space-y-1 text-blue-900">
                        <h2 class="text-5xl">
                            {{ priceCount[index] }}
                        </h2>
                        <span class="text-5xl">تومان</span>
                    </div>

                    <div class="text-9xl text-gray-700/10 ">
                        <h1>{{ priceCount[index] }}</h1>
                    </div>


              
                </section>

                <!-- hr div -->
                <div class="bg-gradient-to-r from-blue-300  via-blue-500 to-blue-300  w-[88%] rounded-2xl h-1 " ></div>

                <!-- priceCard other infos -->
                <div class="flex flex-col space-y-2 w-full items-center text-xl md:text-lg lg:text-2xl">

                    <h2 class="font-semibold">{{ domainCounts[index] }}</h2>
                    <!-- hr div -->
                    <div class="bg-gradient-to-r from-blue-300  via-blue-500 to-blue-300  w-[88%] rounded-2xl h-[2px] " ></div>
    
                    <h2 class="font-semibold">{{ subDomain_count[index] }}</h2>
                    <!-- hr div -->
                    <div class="bg-gradient-to-r from-blue-300  via-blue-500 to-blue-300  w-[88%] rounded-2xl h-[2px] " ></div>
                    <h1 class="font-medium">{{ helpTimeLine[index] }}</h1>
    
                    <!-- hr div -->
                    <div class="bg-gradient-to-r from-blue-300  via-blue-500 to-blue-300  w-[88%] rounded-2xl h-[2px] " ></div>

                </div>

                <a class="w-full flex justify-center">
                    <button class="py-1 px-10 bg-blue-900 text-white text-lg rounded-xl mt-3 cursor-pointer
                    transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-950 ">الان امتحان کن</button>
                </a>



            </div>
        </div>

    </section>



</template>

<script setup>


    const priceTitle = ["استاندارد", "شرکتی", "ویژه"];

    const priceTimeLine = ["در ماه", "در ماه", "در ماه"];

    const priceCount = [100 , 600, 900]

    const domainCounts  = [10, 10, 10];

    const subDomain_count = [10, 16, 19];

    const helpTimeLine = ["پشتیبانی نامحدود", "پشتیبانی نامحدود", "پشتیبانی نامحدود"];

</script>