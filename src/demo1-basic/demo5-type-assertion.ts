//类型断言
// 当不确定联合类型的变量到底是哪个类型的时候，我们只能访问联合类型的所有类型的共有的属性和方法

//通过断言 可以预先判断要访问的属性类型

function assertGetLength(something: string| number):number {
    if((<string>something).length) {
        return (<string>something).length
    } else {
        return something.toString().length;
    }
}