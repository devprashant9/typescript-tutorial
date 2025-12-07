class Car {
    name: string;
    model: string;
    price: number;

    constructor(name: string, model: string, price: number) {
        this.name = name;
        this.model = model;
        this.price = price;
    }

}

const car = new Car("Mercedes", "Benz", 99999);
console.log(car);