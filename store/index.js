/*eslint-disable */
export const state = () => ({
  allCountry: null,
  searchInput: '',
  selectRegion: '',
  country: null
})

export const getters = {}

export const mutations = {
  setCountry(state, data) {
    state.allCountries = null

    state.allCountry = data
  },

  openArray(state, array){
        const res = `${array}`

        return res.replace('[]', '')
  }
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

  async searchRegion(ctx, event){
    try{
     const { data } = await this.$axios.get(process.env.API_URL + '/region/' + event.target.value)

     ctx.commit('setCountry', data)
    }catch(error){
      console.log(error)
    }
  }
}
