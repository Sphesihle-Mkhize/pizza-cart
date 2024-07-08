function pizzaCart() {
    return {
        pizzas: [
            { name: 'Margherita', size: 'Small', price: 80 },
            { name: 'Pepperoni', size: 'Medium', price: 100 },
            { name: 'Hawaiian', size: 'Large', price: 120 },
        ],
        cart: [],
        total: 0,
        showPayment: false,
        paymentAmount: 0,
        message: '',
        
        addToCart(index) {
            const pizza = this.pizzas[index];
            const cartItem = this.cart.find(item => item.name === pizza.name && item.size === pizza.size);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.cart.push({ ...pizza, quantity: 1 });
            }
            this.calculateTotal();
        },
        
        increment(index) {
            this.cart[index].quantity++;
            this.calculateTotal();
        },
        
        decrement(index) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
            } else {
                this.cart.splice(index, 1);
            }
            this.calculateTotal();
        },
        
        calculateTotal() {
            this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        
        checkout() {
            this.showPayment = true;
            this.message = '';
        },
        
        processPayment() {
            if (this.paymentAmount >= this.total) {
                this.message = 'Enjoy your pizzas!';
                this.cart = [];
                this.total = 0;
            } else {
                this.message = 'Sorry - that is not enough money!';
            }
            this.showPayment = false;
            this.paymentAmount = 0;
        }
    };
}