const app = new Vue({
    el: '#app',
    data: {
        title: 'To Do List',
        taskList: [],
        newTask: ''
    },
    methods: {
        addTask: function () {
            this.taskList.push({
                text: this.newTask,
                state: false
            })
            this.newTask = '';
            console.log(this.taskList);
        }
    }
})