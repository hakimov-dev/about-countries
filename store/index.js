/*eslint-disable */
export const state = () => ({
  allCountry: null,
  country: null
})

export const getters = {}

export const mutations = {
  setCountry(state, data) {
    state.allCountry = null

    state.allCountry = data
  },
}

export const actions = {
  async allCountries(ctx, payload) {
    try {
      const { data } = await this.$axios.get(process.env.API_URL + '/all')
      ctx.commit('setCountry', data)
    } catch (error) {
      console.log(error)
    }
  },

  async selectRegion(ctx, event){
    try{
     const { data } = await this.$axios.get(process.env.API_URL + '/region/' + event.target.value)

     ctx.commit('setCountry', data)
    }catch(error){
      console.log(error)
    }
  },

  async searchCity(ctx, event){
    try{
     const { data } = await this.$axios.get(process.env.API_URL + '/name/' + event.target.value)

      ctx.commit('setCountry', data)
    }catch(error){
    if(error.response.data)
      alert(error.response.data.message)
     else
       console.log(error)
    }
  },

  async getCityByName(ctx, city){
   try{
    const { data } = await this.$axios.get(process.env.API_URL + '/name/' + city)

    ctx.commit('setCountryByName', data)
   }catch(error){
    console.log(error)
   }
  }
}
