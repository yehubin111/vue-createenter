import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from 'vue-svg-icon/Icon.vue'

Vue.component('icon', Icon);

Vue.directive('clickOutside', {
    bind(el, binding, vnode) {
        function documentHandler(e) {
            if(binding.expression) {
                binding.value(e);
            }
        }

        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    update() {},
    unbind(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})