import axios from 'axios'
axios.defaults.baseURL = 'http://219.87.143.101/API/'


export const state = () => ({
  locales: ['tw', 'cn', 'en'],
  locale: 'en',
  en: {},
  cn: {},
  tw: {},
})

export const mutations = {
  SET_LANG(state, locale) {
    // console.log(locale, 'mutations');
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_DATA(state,data) {
    // console.log(state.locale);
  	if(state.locale === 'en') {
  	  state.en = data
  	} else if (state.locale === 'cn'){
  		state.cn = data
  	} else {
      state.tw = data
    }
  },
}

export const actions = {
  async GET_DATA({commit,state}) {
    // console.log(this.history);
    let lang = 1
    if (state.locale === 'cn') lang = 2
    else if (state.locale === 'tw') lang = 1
  	const { data } = await axios.get(`/Index/GetBackground?langId=${lang}`,{
  		headers: {
  			language: state.locale
  		}
  	}) 
  	commit('SET_DATA',data);
  }
}
