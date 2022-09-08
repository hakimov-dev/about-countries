export default{
    state: {
        allCountry: null,
        searchInput: '',
        selectRegion: '',
        country: null
    },
    mutations: {},
    actions: {
       async allCountries(){
          try{
           const countries = await this.$axios.get(process.env.API_URL + '/all')
           console.log(countries)
          }catch(error){
            console.log(error)
          }
        }
    },
    getters: {},
    modules: {}
}