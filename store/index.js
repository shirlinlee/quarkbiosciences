export const state = () => ({
  locales: ['tw', 'cn', 'en'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    console.log(state, locale, 'mutations');
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
