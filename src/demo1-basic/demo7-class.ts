class Person {
    public name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

     getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard); // error/

class A {
    public name:string;
    constructor(name) {
        this.name = name;
    }
}
class B extends A {
    constructor(name, x) {
        super(name);
    }
    say() {
        console.log(this.name,'aaa');
    }
}
var axx = new B('xxxxx',1);
console.log(axx.say())
console.log(axx.name);