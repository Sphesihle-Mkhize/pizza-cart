function pizzaCart() {
    return {
        cart: [],
        totalSmall: 0,
        totalMedium: 0,
        totalLarge: 0,
        totalCost: 0,
        showPayment: false,
        paymentAmount: 0,
        message: '',

        addToCart(size) {
            let found = false;
            this.cart.forEach(item => {
                if (item.size === size) {
                    item.quantity++;
                    found = true;
                }
            });
            if (!found) {
                this.cart.push({ size: size, quantity: 1 });
            }
            this.updateTotals();
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
            this.updateTotals();
        },

        updateTotals() {
            this.totalSmall = this.cart.filter(item => item.size === 'small').reduce((sum, item) => sum + item.quantity, 0);
            this.totalMedium = this.cart.filter(item => item.size === 'medium').reduce((sum, item) => sum + item.quantity, 0);
            this.totalLarge = this.cart.filter(item => item.size === 'large').reduce((sum, item) => sum + item.quantity, 0);
            this.totalCost = this.totalSmall * 8 + this.totalMedium * 10 + this.totalLarge * 12;
        },

        checkout() {
            this.showPayment = true;
        },

        processPayment() {
            if (this.paymentAmount >= this.totalCost) {
                this.message = 'Enjoy your pizzas!';
                setTimeout(() => this.message = '', 3000);
                this.clearCart();
            } else {
                this.message = 'Sorry - that is not enough money!';
                setTimeout(() => this.message = '', 3000);
            }
        },

        clearCart() {
            this.cart = [];
            this.totalSmall = 0;
            this.totalMedium = 0;
            this.totalLarge = 0;
            this.totalCost = 0;
            this.showPayment = false;
            this.paymentAmount = 0;
        }
    }
}