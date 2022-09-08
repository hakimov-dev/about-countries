<template>
    <div class="flex items-center justify-between w-full container-xl px-[5%] py-[6%]">
        <img src="https://placeimg.com/600/525/arch" alt="">
        <div class="about flex items-start flex-col">
        <p class="font-bold">
          Region: <span class="font-semibold opacity-80">Asia</span>
        </p>
        <p class="font-bold">
          Subregion: <span class="font-semibold opacity-80">Central Asia</span>
        </p>
        <p class="font-bold my-[16px]">
          Capital: <span class="font-semibold opacity-80">Tashkent</span>
        </p>
        <p class="font-bold mb-[16px]">
          Borders: <span class="font-semibold opacity-80">  'AFG', "KAZ", 'KGZ', 'TJK', 'TKM'</span>
        </p>
        <p class="font-bold">
          Population: <span class="font-semibold opacity-80">34,232,050</span>
        </p>
        <p class="font-bold">
          Area: <span class="font-semibold opacity-80">447400</span>
        </p>
        <p class="font-bold">
          Start of week: <span class="font-semibold opacity-80">Monday</span>
        </p>
        <p class="font-bold">
          Location: <a href="https://goo.gl/maps/AJpo6MjMx23qSWCz8" class="font-semibold opacity-80"><svg class="h-10 w-10"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg> Google maps</a>
        </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryAbout'
}
</script>