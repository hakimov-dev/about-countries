<template>
  <div
    class="nav container-xl bg-white dark:bg-zinc-800 shadow-xl w-full flex justify-between items-center px-[5%] h-[13vh]"
  >
    <NuxtLink to="/" class="logo flex items-center">
      <img
        class="h-[70px] w-[80px] mr-[10px]"
        src="../assets/imgs/logo.png"
        alt=""
      />
      <h1 class="text-[22px] font-medium dark:text-white">Countries about</h1>
    </NuxtLink>
    <div class="additional flex items-center">
      <button class="dark-mode" @click="changeTheme" >
        <transition name="fade">
          <svg
          v-if="theme != 'dark'"
          class="w-[38px] h-[38px] transition-all text-gray-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
        </svg>
        <svg
          v-if="theme == 'dark'"
          class="w-[38px] h-[38px] transition-all text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        </transition>
      </button>
      <a href="https://github.com/hakimov-dev" target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="42"
          height="42"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          class="w-[42px] h-[42px] transition-all text-gray-600 dark:text-white"
        >
          <path
            d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
            fill="currentColor"
          ></path></svg
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',

  data() {
    return {
      theme: 'dark'
    }
  },

  mounted() {
    if (this.theme === 'dark') 
      document.documentElement.classList.add('dark')
     else
      document.documentElement.classList.remove('dark')  
  },

  methods: {
    changeTheme() {
      if (this.theme === 'dark'){
          document.documentElement.classList.remove('dark')
          this.theme = 'light'
          }
       else{
        this.theme = 'dark'
        document.documentElement.classList.add('dark')
    }
    }
  }
}
</script>
