<template>
  <NuxtLink class="w-[30%]" :to="`/country/${country.name.common}`">
    <div
      class="pointer-events-none card w-[100%] dark:bg-[#27272A] bg-white dark:text-white text-black shadow-xl my-[16px]"
    >
      <figure>
        <img class="w-[400px] h-[225px]" :src="country.flags.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ country.name.common }}</h2>
        <hr />
        <div class="flex items-start flex-col">
          <p class="font-bold">
            Region:
            <span class="font-semibold opacity-80">{{ country.region }}</span>
          </p>
          <p class="font-bold my-[16px]">
            Capital:
            <span class="font-semibold opacity-80">{{
              openArray(country.capital)
            }}</span>
          </p>
          <p class="font-bold mb-[16px]">
            Timezone:
            <span class="font-semibold opacity-80">{{
              country.timezones[0]
            }}</span>
          </p>
          <p class="font-bold">
            Population:
            <span class="font-semibold opacity-80">{{
              country.population
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      default: null
    }
  },

  methods: {
    openArray(array) {
      const res = `${array}`

      return res.replace('[]', '')
    }
  }
}
</script>
