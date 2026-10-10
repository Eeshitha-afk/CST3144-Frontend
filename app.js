let webstore = new Vue({ // The Vue instance
    el: '#app',
    data: {
        showLessons: true,
        // Sample lessons for the will be replaced later with data from the backend
        lessons: [
            {
                id: 1001,
                subject: 'Mathematics',
                location: 'Dubai Knowledge Park',
                price: 100,
                spaces: 5,
                icon: 'fas fa-calculator'
            },
            {
                id: 1002,
                subject: 'English',
                location: 'Al Barsha',
                price: 80,
                spaces: 5,
                icon: 'fas fa-book'
            },
            {
                id: 1003,
                subject: 'Science',
                location: 'Dubai Marina',
                price: 120,
                spaces: 5,
                icon: 'fas fa-flask'
            },
            {
                id: 1004,
                subject: 'Coding',
                location: 'Dubai Knowledge Park',
                price: 150,
                spaces: 5,
                icon: 'fas fa-code'
            },
            {
                id: 1005,
                subject: 'Art',
                location: 'Jumeirah',
                price: 90,
                spaces: 5,
                icon: 'fas fa-palette'
            },
            {
                id: 1006,
                subject: 'Music',
                location: 'Al Barsha',
                price: 110,
                spaces: 5,
                icon: 'fas fa-music'
            },
            {
                id: 1007,
                subject: 'Photography',
                location: 'Dubai Marina',
                price: 130,
                spaces: 5,
                icon: 'fas fa-camera'
            },
            {
                id: 1008,
                subject: 'Chess',
                location: 'Jumeirah',
                price: 70,
                spaces: 5,
                icon: 'fas fa-chess'
            },
            {
                id: 1009,
                subject: 'Cooking',
                location: 'Deira',
                price: 140,
                spaces: 5,
                icon: 'fas fa-utensils'
            },
            {
                id: 1010,
                subject: 'Drama',
                location: 'Deira',
                price: 95,
                spaces: 5,
                icon: 'fas fa-masks-theater'
            }
        ],
        cart: [], // Store one lesson ID for each space added to the cart
        order: {
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            gift: 'Do not send as a gift',
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as a gift'
        },
        states: {
            AL: 'Alabama',
            AZ: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
        }
    },
    methods: {
        addToCart: function(lesson) {
            if (lesson.spaces > 0) {
                this.cart.push(lesson.id);
                lesson.spaces--;
            }
        },
        toggleCart: function() {
            this.showLessons = !this.showLessons;
        },
        removeFromCart: function(index) {
            let lesson = this.lessons.find(lesson => lesson.id === this.cart[index]);
            if (lesson) {
                this.cart.splice(index, 1);
                lesson.spaces++;
            }
        },
        submitForm: function() {
            if (this.canCheckout) {
                // Temporary confirmation until the backend is connected
                alert('Order submitted!');
            }
        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length;
        },
        cartLessons: function() {
            return this.cart.map(id => this.lessons.find(lesson => lesson.id === id));
        },
        canCheckout: function() {
            return this.cartItemCount > 0 &&
                /^[A-Za-z]+$/.test(this.order.firstName) &&
                /^[A-Za-z]+$/.test(this.order.lastName) &&
                /^[0-9]+$/.test(this.order.phone);
        }
    }
});
