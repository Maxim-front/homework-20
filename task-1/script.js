class Circle {
    constructor(radius = 10) {
        this.radius = radius;
    }

    square() {
        return 3.14 * this.radius ** 2;
    }

    static createDefault(radius) {
        const obj = new Circle(radius);
        return obj;
    }
}

const circleFirst = new Circle()
console.log(circleFirst.square())

//Попробуйте создать несколько Circle для каждого из элементов массива: [21, 34, 15, 13]

let initialArray = [21, 34, 15, 13];

let objArray = []

for (let item of initialArray) {
    objArray.push(Circle.createDefault(item))
}

console.log(objArray)