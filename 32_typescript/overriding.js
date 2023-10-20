// 오버라이딩 vs 오버로딩
// 1. 오버라이딩
// - Class에서 상속 > 하위 클래스가 상위 클래스의 메소드를 상속받을 때 같은 이름의 함수(메서드)를 재정의

class Car {
    constructor(year){
        this.year = year;
    }

    getYear() {
        return this.year;
    }
}

class Truck extends Car {
    // 부모 클래스(car) getYear 메서드를 재정의 => "overriding"
    getYear() {
        return this.year + 5;
    }
}
const car = new Car(2020);
const truck = new Truck(2020);

console.log(car);
console.log(car.getYear());
console.log(truck);
console.log(truck.getYear());

