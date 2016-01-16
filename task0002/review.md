###深拷贝

1.引用类型值的复制实质：两个变量**引用一个同对象**,改变其中一个对象的属性，另一个也一起改变

2.递归：调用自身，使用argument.callee等价于当前调用的函数

3.for-in遍历数组和对象的属性;Object.keys(obj):返回可美剧的属性及方法

###array的一些方法：

1.arr.slice(start,end):
    截取从start到end（不包括该元素）的子字符串；
    start:必须，表示开始处
    end:可选，若没有设置则认为截取到数组结束为止
    均可以为负数（-n表示倒数第n个）
    
    



### RegExp:

1.reg.test(str)——————str.search(reg)

2.reg.exec(str)——————str.match(reg)

#string

1.str.search(regexp):

    return index of first match character or -1(not found)
    example:
    function testInput(re,str){
        var midString;
        if(str.search(re)==-1){
           midString=" doesn't contain ";
        }else{
            midString =" contains "
        }
        return str+ midString+ re 
    }
    testInput(/\d+/,"1 2 3")//1 2 3 contains /\d+/
    
2.str.substring(start,end)

    返回下标从start到end-1的字符串

3.str.substr(start,length)

    返回从start开始，长度为length的字符串
    
4.str.replace(regexp,replacement)

    执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。

5.str.match(searchValue/regExp)
    
    可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
    如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组。该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
    如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，则返回一个数组。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。
    example:
    var str="1 2 3 4 5lalalalala 666";var pattern = /\s\d+/g;console.log(str.match(pattern))//[" 2", " 3", " 4", " 5", " 666"]
    var str="1 2 3 4 5lalalalala 666";var pattern = /\s\d+/;console.log(str.match(pattern))//[" 2", index: 1, input: "1 2 3 4 5lalalalala 666"]


###遗留问题
1.for-in 与for的区别
    “不要使用for in遍历数组，会遍历到数组对象扩展出来的属性”