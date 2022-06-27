let prix = 0;
let price = 0;


class Product {
    constructor (name, category, price, promotion, discount){
    this.name = name;
    this.category = category;
    this.price = price;
    this.promotion = promotion;
    this.discount = discount;
    }

    getCategory() {
        return this.category;
    }

    getPromotion(){
        return this.promotion;
    }

    getRemise(){
        return this.discount
    }

    nvPrix(){
        prix = this.price - this.price*this.discount/100
        return prix.toFixed(2);
    }
};


