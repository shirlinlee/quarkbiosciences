import createPersistedState from 'vuex-persistedstate';
import acceptLanguage from 'accept-language';
import * as acceptLanguageList from '~/assets/static/lang.json';
acceptLanguage.languages(acceptLanguageList);

export default async ({ app, store }) => {
  createPersistedState({
    key: 'setting',
    paths: ['local'],
  })(store);

  const lang = store.state.local.ui_lang;
  const avail = acceptLanguage.get(navigator.language);

  // wait file downloading or page will load 'no locale'
  await app.i18n.loadLocaleMessage(lang || avail, '/locales/');
};