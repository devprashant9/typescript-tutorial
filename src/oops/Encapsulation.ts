class Encapsulation {
  private _name: string;
  private _model: string;
  private _price: number;

  constructor(name: string, model: string, price: number) {
    this._name = name;
    this._model = model;
    this._price = price;
  }

 
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (!value) throw new Error("Name cannot be empty");
    this._name = value;
  }

  
  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    if (!value) throw new Error("Model cannot be empty");
    this._model = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value < 0) throw new Error("Price must be positive");
    this._price = value;
  }
}

// Usage
const car = new Encapsulation("Mercedes", "Benz", 99999);
console.log(car.name);
car.name = "BMW";
console.log(car.price);
car.price = 120000;
