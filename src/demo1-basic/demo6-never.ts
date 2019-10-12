import { stringify } from "querystring";

function error(msg: string):never {
    throw new Error(msg);
}
function warnUser(): number {
    console.log("This is my warning message");
    return undefined;
}

declare function create(o: object | null): void;
// create([1,2])


interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);

}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: string | number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: '1',
        area:1
    }
}

let mySquare = createSquare({ color: "red", width: 100 });

interface SearchFunc {
    (source: string, subString: string):boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return false;

}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", 
'1'];

let myStr: string = myArray[0];

interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { }
}

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square: Square = {color:'blue',sideLength:10,penWidth:1}  ;
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function(start:number) {return '1'}  as Counter;
    counter[1] = '123';
    counter.interval = 123;
    counter.reset = function () { console.log('reset')};
    return counter;
}
console.log(getCounter(),getCounter().interval)


class Control {
    private state: any;
}


 let output = identity<string>("myString"); 
 let output2 = identity("myString");

 function longIdentity<T> (args: T[]):T[] {
     return args;
 }
 function identity<T> (args:T): T {
    return args;
 }
 interface GenericIdentityFn<T> {
     <T>(args: T): T;
 }
 let myId: GenericIdentityFn<number> = identity;