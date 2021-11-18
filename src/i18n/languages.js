import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './languages/english.json';
import sv from './languages/swedish.json';

const languages = { en, sv };

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  messages: languages,
});
