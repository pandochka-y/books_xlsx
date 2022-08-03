
// Vue.use(Vuex)
Vue.component('SearchBar', SearchBar)
Vue.component('SearchBarInput', SearchBarInput)
Vue.component('BaseNavigation', BaseNavigation)
Vue.component('ListBooks', ListBooks)
Vue.component('ListBooksItem', ListBooksItem)
Vue.component('SpinnerLoader', SpinnerLoader)
Vue.component('SearchBarButton', SearchBarButton)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseSelect', BaseSelect)
Vue.component('TheHeader', TheHeader)
Vue.component('App', App)

var app = new Vue({
    el: "#app",
    store,
    router,
});