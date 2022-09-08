/*eslint-disable */
export const state = () => ({
  allCountry: null,
  searchInput: '',
  selectRegion: '',
  country: null
})

export const getters = {}

export const mutations = {
  setAllCountry(state, data) {
    state.allCountry = data
  }
}

export const actions = {
  async allCountries(ctx, payload) {
    try {
      const { data } = await this.$axios.get(process.env.API_URL + '/all')
      ctx.commit('setAllCountry', data)
    } catch (error) {
      console.log(error)
    }
  }
}
