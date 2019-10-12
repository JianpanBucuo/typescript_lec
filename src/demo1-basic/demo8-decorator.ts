function enumerable (value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
        console.log(target);
        descriptor.value = () => {
            console.log('descriptor.value')
        }
        console.log(propertyKey);
        console.log(descriptor);
    }
}
class GreetA {
    greeting: string;
    constructor(msg: string) {
        this.greeting = msg;
    }
    @enumerable(false)
    greet () {
        console.log('hello ' + this.greeting);
    }
}
var aa = new GreetA('a');
aa.greet();