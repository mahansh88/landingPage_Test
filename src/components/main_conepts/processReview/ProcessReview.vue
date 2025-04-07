
<template>
    <!-- Part 1 -->
    <section class="w-full  flex mt-12  flex-col items-center space-y-3 lg:space-y-0 lg:flex-row justify-center md:gap-x-3">
        <img src="/src/assets/images/TeamGroupImages/Pixel_Working_04.jpg"
        class="rounded-xl w-[80%] md:w-[70%] lg:w-[45%] object-contain  xl:w-[41%] xl:object-cover" alt="">
        
        <article class="w-[82%] lg:w-[40%] flex flex-col space-y-6 px-3 py-1 border-r-2 rounded-xl border-r-gray-500">

            <h1 class="text-4xl font-bold tracking-tight">با شرکت ما آشنا شوید !</h1>

            <div class="flex flex-col space-y-9 text-lg text-slate-800">
                <p v-html="paragraphOne"></p>
                <p v-html="paragraphTwo"></p>
            </div>

            <div class="hidden md:flex flex-col w-full space-y-3 mt-3 ">
                <!-- hrDivs -->
                <div class="w-full h-[1px] bg-gradient-to-l from-gray-400 via-gray-200 to-gray-400 "></div>
                <div class="w-full h-[1px] bg-gradient-to-l from-gray-400 via-gray-200 to-gray-400"></div>
            </div>
        </article>

    </section>

    <!-- Part 2 -->
    <section class="mt-3 space-y-8 bg-sky-100 w-full flex flex-col  items-center py-3 px-4">
        <!-- title -->
        <div class="w-full flex flex-col space-y-3 items-center ">

            <h1 class="text-4xl tracking-tighter">فرآیند ما</h1>
            <!-- hr div -->
            <div class="w-[80%] h-[4px] bg-gradient-to-l from-blue-600 via-blue-300 to-blue-600"></div>

            <h2 class="text-2xl tracking-tight">برای هر نوع بحثی با کارشناسان ما ملاقات کنید</h2>
        </div>

        <!-- process -->
        <article class="flex flex-col lg:flex-row justify-center lg:gap-x-3 xl:gap-7 items-center space-y-4 ">
            <!-- card `-->
            <div v-for="(detail, index) in cardworkDetails" :key="index" class="bg-white rounded-xl w-[80%] md:w-[80%] lg:w-[30%] xl:w-[24%]  px-5 py-7 flex flex-col space-y-3 lg:hover:scale-[1.06]
        transition-all duration-500">

                <div class="w-20 flex justify-center rounded-full bg-sky-800 py-5 ">
                    <i class="custome-size " :class="fafaArray[index]"></i>

                </div>
                <h2 class="text-3xl font-bold tracking-tight">{{ h2Title[index] }}</h2>
                <p class="text-lg">{{ cardPar[index] }}</p>

                <section v-for="(each, eachindex) in detail" :key="eachindex" class="flex flex-col">
                    <div class="flex flex-row gap-x-3 items-center">
                        <i class="fa fa-long-arrow-left"></i>
                        <p>{{ each }}</p>
                    </div>

                </section>

            </div>

        </article>

    </section>



</template>



<script setup>

let paragraphOne = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایا.`;
let paragraphTwo = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.";


const fafaArray = [
    `fa fa-diamond`,
    `fa fa-lightbulb-o`,
    `fa fa-tablet`,
]
const h2Title = ["پلن و طراحی","پیاده سازی و تست", "زنده کن"]


const cardPar = [
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`,
    `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`
]


const cardworkDetails = [
    ["مصاحبه با مشتری", "جمع آوری داده های مصرف کننده", "ایجاد استراتژی محتوا", " تجزیه و تحلیل تحقیقات"],
    [" ساخت wireframe", "جمع آوری بازخورد مشتری", "توسعه کد", "بررسی بازاریابی"],
    [" استقرار وب سایت", "راه اندازی محصول در بازار", "جمع آوری داده های UX", "نگهداری فصلی"],
]
</script>

<style scoped>

    .custome-size {
        font-size: 2rem;
        color: white;
    }

</style>