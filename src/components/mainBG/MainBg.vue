<template>
    <section class="w-screen h-screen fixed bg-sky-600 z-[1]">
      <img 
        src="/src/assets/images/BG/vecteezy_successful-business-team-walking-towards-bright-urban_54880289.jpeg"
        class="w-screen h-screen object-cover opacity-80" 
        alt="Successful Business Team"
      />
      <div class="absolute top-60 w-full flex flex-col text-white text-5xl items-center justify-center">
          <h2 id="titleH2" class="text-lg ">{{ displayedText }}</h2>
        <div class="bg-black/80 rounded-3xl py-5 px-60  flex flex-col items-center space-y-2">
            <h1 class="text-6xl transition-opacity duration-500">ما تجارت میکنیم, نه فقط بازاریابی</h1>
            <h2 class="text-base">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</h2>
            <button class="border bg-black/80 tracking-tight border-black/95 cursor-pointer rounded-xl py-2 px-5 text-xl
             transition-all duration-300 hover:scale-105" type="button"><a href="#">ارتباط با ما</a></button>
        </div>
      </div>
    </section>
</template>
  
<script setup>

</script>