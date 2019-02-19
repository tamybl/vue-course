const app = new Vue({
    el: '#app',
    data: {
        title: 'Hola mundo con Vue',
        fruits: [{
            name: 'platano',
            state: false,
            quantity: 6
        },
        {
            name: 'manzana',
            state: true,
            quantity: 0
        }],
        newFruit: '',
        newQuantity: ''
    },
    methods: {
        addFruit() {
            console.log('click');
            if (this.newFruit !== '' && this.newQuantity !== '') {
                this.fruits.push({
                    name: this.newFruit, quantity: this.newQuantity
                })
                this.newFruit = '', this.newQuantity = '';

            }

        }
    }

})