//类型别名
//用来给一个类型起一个新的名字

type name = string;
type nameResolver = () => string;

type nameOrNameResolver = name | nameResolver;
function getName (n: nameOrNameResolver) :Name{
        if (typeof n == 'string') {
            return n;
        } else {
            return n();
        }
}