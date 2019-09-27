// 数组类型 ----------------------------------------------
//使用类型和方括号 表示法

let fiboacci: number[] = [1,2,3];
// 数组中的项不允许出现其他类型

// 数组泛型
// 使用 Array<T>来表示数组
let fiboa: Array<number> = [1,2,3];

// any 在数组中的应用

let anyArr: Array<any> = [1,2,'2',[23]];

//函数类型 -------------------------------------------------
// 一个函数有输入输出，要在 typescript中对其进行约束，需要把 输入输出都考虑到

// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}
// 输入多余参数或少于要求的参数是不允许的
// 函数表达式
let mySum = function(x: number, y: number): number {
    return  x + y;
}
// 是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样
let mySum2: (x: number, y: number) => number = (x:number, y: number): number => x + y;

// 接口形式来定义需要符合的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearchFunc: SearchFunc = (source: string, subString: string):boolean => {
        return source.search(subString) != -1;
}

// 可选参数
function buildName (firstName: string, lastName: string): string {
    if(lastName) {
        return firstName + lastName;
    } else {
        return firstName;
    }
}

// 默认参数
// 可选参数
function buildName2 (firstName: string, lastName: string = 'Last name'): string {
        return firstName + lastName;
}

// rest参数
function push(array: any[], ...rest: any[]){
    rest.forEach((v) => {
        array.push(v);
    })
}
let a = [];
push(a, 1, 2, 3);