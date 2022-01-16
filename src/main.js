import { createApp } from 'vue'
import App from './App.vue'
import { store } from '../store'


// const clickOutside = {
//     beforeMount: (el, binding) => {
//         el.clickOutsideEvent = event => {
//             // here I check that click was outside the el and his children
//             if (!(el == event.target || el.contains(event.target))) {
//                 // and if it did, call method provided in attribute value
//                 binding.value();
//             }
//         };
//         document.addEventListener("click", el.clickOutsideEvent);
//     },
//     unmounted: el => {
//         document.removeEventListener("click", el.clickOutsideEvent);
//     },
// };


const app = createApp(App)
// app.directive('click-outside', clickOutside)



app.use(store)
app.mount('#app')
