<template>
  <div class="container-xl px-[5%] pt-[4%]">
    <div class="filter w-full flex items-center justify-between">
      <input class="w-[23%] dark:text-white text-black font-medium outline-none p-2 dark:bg-[#18181B] rounded-[10px] border-gray-400 border-solid border-[1.5px] transition-all hover:border-gray-200 focus:border-gray-200" type="text" name="search" placeholder="Enter country name to search...">
      <select>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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