 //any 任意类型 ----------------------------------------------------
 // 如果是 any类型， 允许被赋值为任意类型

 let myFavoriteNumber: any = 12;
 myFavoriteNumber = '12';

 //任意值上 可以访问任意属性 或 方法
 let anything: any = 13;
 anything.x;
 anything.sayHello('123');

 //如果在声明变量的时候，未指定类型，那么它会被识别为任意值类型。


 //类型推论----------------------------------------------------------
 let exampleStr = 'my name';
//  exampleStr = 1;  默认是 string 类型， 不能在赋值其他类型

//联合类型 ------------------------------------------------------------
// 联合类型使用 | 分割每个类型

let unitType: number | string = 123;
unitType = '123';

//访问任意类型的属性 和方法
//当不确定一个 联合类型到底是哪个类型的时候，我们只能访问此联合类型的共有方法

function getLength(something: string | number): string {
    // return something.length;   // 只有string类型由此方法
    return something.toString();
}
