<template>
    <div class="flex items-center justify-between w-full container-xl px-[5%] py-[6%] !pt-[20vh]">
        <img src="https://flagcdn.com/uz.svg" class="w-[50%] rounded-md h-[420px]" alt="">
        <div class="about flex items-start flex-col w-[45%] text-black dark:text-white">
           <p class="font-bold">
             Region: <span class="font-semibold opacity-80">Asia</span>
           </p>
           <p class="font-bold mt-[13px]">
             Subregion: <span class="font-semibold opacity-80">Central Asia</span>
           </p>
           <p class="font-bold my-[13px]">
             Capital: <span class="font-semibold opacity-80">Tashkent</span>
           </p>
           <p class="font-bold mb-[13px]">
             Borders: <span class="font-semibold opacity-80">  'AFG', "KAZ", 'KGZ', 'TJK', 'TKM'</span>
           </p>
           <p class="font-bold mb-[13px]">
             Population: <span class="font-semibold opacity-80">34,232,050</span>
           </p>
           <p class="font-bold mb-[13px]">
             Area: <span class="font-semibold opacity-80">447400</span>
           </p>
           <p class="font-bold mb-[13px]">
             Start of week: <span class="font-semibold opacity-80">Monday</span>
           </p>
           <p class="font-bold flex items-center">
              Location: <a href="https://goo.gl/maps/AJpo6MjMx23qSWCz8" target="_blank" class="font-semibold flex items-center ml-[10px] opacity-80"><svg class="h-[24px] w-[24px]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg> Google maps</a>
           </p>
           <p class="font-bold flex items-center mt-[13px]">
               Coat of arms: <span><img class="h-[110px] w-[110px] ml-[10px]" src="https://mainfacts.com/media/images/coats_of_arms/uz.svg" alt=""></span>
           </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryAbout',

    mounted() {
       if(this.$route.params.country !== undefined){
        console.log('Go')
       }else{
        this.$router.go(-1)
       }
    }
}
</script>