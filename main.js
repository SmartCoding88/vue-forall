
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

app.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',
    data() {
        return {
            tasks: [
                { description: 'Go to the store', finished: true },
                { description: 'Finish screencast', finished: false },
                { description: 'Make donation', finished: false },
                { description: 'Clean the room', finished: true }
            ]
        }
    }
});

app.component('message', {
    template: `
    <article class="message" :class="type">
        <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{description}}
        </div>
    </article>
    `,
    props:{
        title:{type:String},
        description:{type:String},
        type:{type: String}
    }
})

app.mount("#root");