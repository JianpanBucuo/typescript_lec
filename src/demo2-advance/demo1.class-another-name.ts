// //类型别名
// //用来给一个类型起一个新的名字

// type Name = string;
// type nameResolver = () => string;

// type nameOrNameResolver = Name | nameResolver;
// function getName (n: nameOrNameResolver) :Name{
//         if (typeof n == 'string') {
//             return n;
//         } else {
//             return n();
//         }
// }

// // 字符串字面量类型
// // 字符串字面量类型用来约束取值只能是某几个字符串中的一个

// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent (ele: HTMLElement, event: EventNames) {

// }
// // handleEvent(document.getElementById('div'),'click')