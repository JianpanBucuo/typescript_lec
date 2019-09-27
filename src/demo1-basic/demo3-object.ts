// 在 Typescript中， 我们使用接口（interface）来定义对象

interface Person {
    name: string;
    age: number;
}

let person1: Person = {
    name: 'nic',
    age: 12
}
// 定义的变量 比接口少一些 或 多一些 是不允许的 
// 赋值时，变量的形状必须和接口的形状保持一致

// 可选属性
// 有时 我们希望一些属性不是 必须的

interface PersonCanNoAge  {
    name: string;
    age?: number;
}
let person2: PersonCanNoAge = {
    name:　'123'
}
// 这时仍然不可以添加为定义的属性

// 任意属性
// 一旦定义了任意属性， 确定属性 和 可选属性 必须是 任意属性的子集
interface Person3 {
    name: string;
    age: number;
    [propName: string]: string | number;
}

let tom: Person3 = {
    name: 'Tom',
    age: 12,
    gender: 'male'
};

// 只读属性
// 有时候，我们希望对象中的一些字段只能在创建的时候被赋值，那么可以使用 readOnly 字段 定义只读属性

interface Person4 {
    readonly id: number;
    name: string;
    age: number;
}
let tom2: Person4 = {
    id: 1,
    name:'tom',
    age: 12
}