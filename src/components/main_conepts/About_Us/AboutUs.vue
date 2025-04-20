<template>

    <article id="about_us" class="w-full px-3 sm:px-6 lg:px-12 xl:px-28  flex flex-col items-center  bg-sky-50">

        <!-- title -->
        <section class="flex flex-col items-center mt-20 w-full  space-y-2 ">
            <h1 class="text-4xl tracking-tighter text-white">ما یک آژانس حرفه ای وب هستیم</h1>
            <div class="w-11/12 sm:w-10/12 md:w-[70%] lg:w-[60%] xl:w-[50%]
            h-[2px] bg-gradient-to-l from-blue-500 via-blue-300 to-blue-500"></div>
            <h2 class="text-2xl tracking-tight text-white">این یک قالب حرفه ای میباشد</h2>
        </section>

        <!-- cols of what we do -->
        <section class="py-3 flex space-y-3 lg:space-y-0 lg:gap-x-3 flex-col   lg:flex-row-reverse w-full justify-center  items-center">
            <div class="hover:scale-[1.06] transition-all duration-500 cursor-help w-9/12 sm:w-8/12 md:w-[60%] lg:w-auto
             bg-gray-100 flex flex-col items-center py-14 pt-8 px-3 space-y-2" v-for="(icon, index) in whatWeDoIcons" :key="index">

                <i :class="icon" class="text-blue-600"></i>

                <h1 class="text-2xl">{{ whatWeDoTitle[index] }}</h1>
                <div class="w-[90%] h-[2px] bg-gradient-to-l from-blue-500 via-blue-300 to-blue-500"></div>
                <h2 class="text-xl">{{ whatWeDoText[index] }}</h2>
                <div class="w-[90%] h-[2px] bg-gradient-to-l from-blue-500 via-blue-300 to-blue-500"></div>
                <p class="text-base">{{ whatWeDoText2[index] }}</p>


            </div>
        </section>


    </article>

</template>


<script setup>

let whatWeDoIcons = [`fa fa-briefcase`, "fa fa-building", "fa fa-code", "fa fa-anchor"] ;
let whatWeDoTitle = ["برندسازی آنلاین", "مشاوره آنلاین", "تجربه دیجیتال", "بازاریابی آنلاین"];

let whatWeDoText = [
    "ایجاد هویت برند و حضور آنلاین",
    "ارائه مشاوره تخصصی در حوزه دیجیتال",
    "تجربه کاربری بهینه و جذاب",
    "استراتژی‌های مؤثر بازاریابی دیجیتال"
]

let whatWeDoText2 =[
    `
این فرآیند شامل تعریف یک هویت برند منحصربه‌فرد است که با مخاطبان هدف شما همخوانی دارد. این شامل توسعه یک سبک بصری و پیام‌رسانی منسجم در تمامی پلتفرم‌ها می‌شود. یک حضور قوی آنلاین باعث افزایش شناسایی و اعتماد میان مشتریان بالقوه می‌شود.

`,
`ما راهنمایی‌های تخصصی متناسب با نیازهای کسب‌وکار شما در فضای دیجیتال ارائه می‌دهیم. این شامل استراتژی‌هایی برای بازاریابی آنلاین مؤثر، تعامل در رسانه‌های اجتماعی و بهینه‌سازی وب‌سایت است. هدف ما کمک به شما در پیمایش پیچیدگی‌های تحول دیجیتال است.

`,
`ما بر ایجاد رابط‌های کاربری دوستانه تمرکز داریم که رضایت مشتری را افزایش می‌دهد. این شامل طراحی ناوبری شهودی و محتوای جذاب است که کاربران را درگیر نگه می‌دارد. یک تجربه کاربری مثبت منجر به نرخ تبدیل بالاتر و وفاداری مشتری می‌شود.

`,
`استراتژی‌های ما شامل مجموعه‌ای از تکنیک‌های بازاریابی دیجیتال برای حداکثر کردن دسترسی شما است. این شامل سئو، بازاریابی محتوا و کمپین‌های تبلیغاتی هدفمند می‌شود. ما به دنبال جذب ترافیک، تولید سرنخ و در نهایت افزایش فروش از طریق روش‌های اثبات‌شده هستیم.`
];


</script>


<style scoped>

.fa {
    font-size: 4rem; 
}
*, ::after, ::before {
    box-sizing: border-box;
}

/* Optional: Define primary and secondary colors for reuse */
:root {
  --primary-color: #ffffff; /* white */
  --secondary-color: #3b82f6; /* blue-500 */
}

/* Apply primary color to text elements */
h1, h2, p {
  color: var(--primary-color);
}

/* Use secondary color for icons */
i {
  color: var(--secondary-color);
}

/* Optional: If you want to style other elements with these colors, add here */

</style>