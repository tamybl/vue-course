const app = new Vue({
    el: '#app',
    data: {
        title: 'To Do List',
        taskList: [],
        newTask: ''
    },
    created: function () {
        let db = JSON.parse(localStorage.getItem('task-vue'));
        if (db === null) {
            this.taskList = [];
        }
        else {
            this.taskList = db;
        }
    },
    methods: {
        addTask: function () {
            this.taskList.push({
                text: this.newTask,
                state: false
            });
            localStorage.setItem('task-vue', JSON.stringify(this.taskList));
            this.newTask = '';
            console.log(this.taskList);
        },
        changeState: function (index) {
            this.taskList[index].state = true;
            localStorage.setItem('task-vue', JSON.stringify(this.taskList));
        },
        deleteTask: function(index) {
            this.taskList.splice(index, 1);
            localStorage.setItem('task-vue', JSON.stringify(this.taskList));
        }
    }
})