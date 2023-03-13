
const { createApp } = Vue

let app = createApp({
    data() {

    },

    computed: {

    },

    methods: {

    }
});

app.component('task', {
    template: '<li><slot></slot></li>'
});

app.mount("#root");