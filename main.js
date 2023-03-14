
const { createApp } = Vue

let app = createApp({
    data() {
        return {
            showModal: false
        }
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

app.component('modal',{
    template: `
    <div id="modal-js-example" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content text-white">
         <p>Hello there</p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,   
});

app.component('tabs',{
    template:`
    <div>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data(){
        tabs:[]
    },
    created(){
        this.tabs = this.$children;
    }
});
app.component('tab', {
    template:`
        <div><slot></slot></div>
    `,
    props:{
        name: {required: true}
    }
})

app.mount("#root");