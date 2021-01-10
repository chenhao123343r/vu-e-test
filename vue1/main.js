const demo = new Vue({
    el: '#demo',
    data: {
        books: [{
            id: 1,
            name: 'java',
            date: '2020/12/09',
            price: 700,
            count: 1
        }, {
            id: 2,
            name: 'php',
            date: '2020/12/09',
            price: 300,
            count: 1
        }, {
            id: 3,
            name: 'c++',
            date: '2020/12/09',
            price: 300,
            count: 1
        }, {
            id: 4,
            name: 'vue',
            date: '2020/12/09',
            price: 500,
            count: 1
        }, ]

    },
    methods: {
        de(index) {
            this.books[index].count--;


        },
        pl(index) {
            this.books[index].count++;
        },
        removeBtn(index) {
            this.books.splice(index, 1);
        }
    },
    //过滤器
    filters: {
        showprice(price) {
            return '￥' + price
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            for (let item of this.books) {
                totalPrice += item.price * item.count;
            }
            return totalPrice;
        }
    }


})