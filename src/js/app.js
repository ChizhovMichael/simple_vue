
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import $ from 'jquery';


Vue.use(VueRouter);

let app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    data: {
        json: {}
    },
    methods: {
        created() {
            fetch('/request.php')
            .then(response => response.json())
            .then((data) => {
                this.json = data.tarifs;
            })
        }
    }
});
