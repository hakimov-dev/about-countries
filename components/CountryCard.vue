<template>
  <NuxtLink :to="`${country.name.common}`">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Country name</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">More about</button>
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
  }
}
</script>