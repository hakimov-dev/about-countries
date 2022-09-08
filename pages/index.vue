<template>
  <div class="container-xl px-[5%] !pt-[20vh]">
    <div class="filter w-full flex items-center justify-between">
      <input class="w-[23%] input dark:bg-[#18181B] bg-white dark:text-white outline-none text-black font-medium rounded-[10px] border-gray-400 border-solid border-[1.5px] transition-all hover:border-gray-200 focus:border-gray-200" type="text" name="search" placeholder="Enter country name to search...">
      <select class="select select-bordered dark:bg-[#18181B] bg-white dark:text-white outline-none text-black w-[20%] max-w-xs">
       <option disabled selected>Select region</option>
       <option value="africa">Africa</option>
       <option value="asia">Asia</option>
       <option value="americas">Americas</option>
       <option value="oceania">Oceania</option>
       <option value="antarctic">Antarctic</option>
      </select>
    </div>
    <div v-if="$store.state.allCountry !== null" class="main-content flex items-center justify-between flex-wrap my-[5%]">
      <CountryCard v-for="(item, idx) in $store.state.allCountry" :key="idx" :country="item"/>
    </div>
    <div v-else class="loading-content flex items-center justify-center h-[62vh]">
      <LoadingAnimation />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.$store.dispatch('allCountries')
  }
}
</script>

<style scoped>
input{
  box-sizing: border-box;
  padding-left: 36px;
  background-image: url('../assets/imgs/search.png');
  background-size: 20px;
  background-position-x: 10px;
  background-position-y: 50%;
  background-repeat: no-repeat;
  }
</style>