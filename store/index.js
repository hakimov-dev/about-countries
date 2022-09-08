export default{
    state: {
        allCountry: null,
        searchInput: '',
        selectRegion: '',
        country: null
    },
    mutations: {
        setAllCountry(state, data){

        }
    },
    actions: {
       async allCountries(ctx, payload){
          try{
           const { data } = await this.$axios.get(process.env.API_URL + '/all')
           
           ctx.commit('setAllCountry', data)
          }catch(error){
            console.log(error)
          }
        }
    },
    getters: {},
    modules: {}
}