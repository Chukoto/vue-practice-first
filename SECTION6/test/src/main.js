import Vue from 'vue';
import App from './App.vue';

// Trueにするとdevelopment mode
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App), //importするvueファイルを変えたりする場合は、それに合わせて括弧内を変更する必要がある
}).$mount('#app');
