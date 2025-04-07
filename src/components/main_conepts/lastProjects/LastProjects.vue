<template>
    <section class="mt-3 space-y-8 bg-white w-full flex flex-col items-center py-3 px-4">
      <!-- Title -->
      <div class="w-full flex flex-col space-y-3 items-center">
        <h1 class="text-4xl tracking-tighter">آخرین پروژه ها</h1>
        <!-- hr div -->
        <div class="w-[80%] h-[4px] bg-gradient-to-l from-blue-600 via-blue-300 to-blue-600"></div>
        <h2 class="text-2xl tracking-tight">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</h2>
      </div>
  
      <!-- Projects -->
      <div class="w-full flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:gap-x-3 items-center justify-center">
        <div v-for="(projectSrc, index) in projectImgmgArray" :key="index" class="group w-[80%] md:w-[66%] lg:w-[23%] relative flex
        transition-all duration-700 md:hover:scale-[1.03] text-lg sm:text-xl lg:text-lg xl:text-xl">
          <img class="w-full" :src="projectSrc" alt="">
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 space-y-10" >

              <h2 class="">{{ projectName[index] }}</h2>

              <button class="py-2 px-5 rounded-xl bg-black text-white cursor-pointer transition-transform duration-500
              transform translate-y-full group-hover:translate-y-0">مشاهده جزییات </button>

          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projectName = [
    "بازاریابی آنلاین",
    "طراحی محصول",
    "پویانمایی موبایل",
    "طراحی وب"
  ];
  
  const projectImgmgArray = [
    "/src/assets/images/projects/vecteezy_simple-business-cards-with-elegant-designs-placed-on-the_51443509.jpg",
    "/src/assets/images/projects/vecteezy_red-umbrella-in-the-desert-under-a-clear-blue-sky_55430695.jpg",
    "/src/assets/images/projects/vecteezy_modern-dining-room-interior-with-green-chairs-and-wooden-table_54368143.jpg",
    "/src/assets/images/projects/vecteezy_minimalist-dining-room-with-wooden-table-and-bench-neutral_54368255.jpg",
  ];

  
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  