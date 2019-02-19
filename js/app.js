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
            }
        ],
        newFruit: '',
        newQuantity: '',
        total: 0
    },
    methods: {
        addFruit() {
            console.log('click');
            if (this.newFruit !== '' && this.newQuantity !== '') {
                this.fruits.push({
                    name: this.newFruit,
                    quantity: this.newQuantity
                })
                this.newFruit = '', this.newQuantity = '';

            }

        }
    },
    computed: {
        totalStock() {
            this.total = 0;
            this.total = this.fruits.reduce((a, b) => a.quantity + b.quantity);
            return this.total;
        }
        // totalStock() {
        //     this.total = 0;
        //     for (fruit of this.fruits) {
        //         this.total = this.total + fruit.quantity;
        //     }
        //     return this.total;
        // }
    }

})