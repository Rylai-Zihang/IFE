###深拷贝

1.引用类型值的复制实质：两个变量**引用一个同对象**,改变其中一个对象的属性，另一个也一起改变

2.递归：调用自身，使用argument.callee等价于当前调用的函数

3.for-in遍历数组和对象的属性;Object.keys(obj):返回可美剧的属性及方法

###array的一些方法：

1.arr.slice(start,end):
    截取从start到end（不包括该元素）的子字符串；
    start:必须，表示;第一个
    end:可选，若没有设置则认为截取到数组结束为止
    均可以为负数（-n表示倒数第n个）
    
2.arr.subtring(start,end):
    不接受负参数，其余一致
    
3.arr.replace()

4.arr.match

5.arr.search

### RegExp:

1.reg.test()

2.reg.exec()

###遗留问题
1.for-in 与for的区别
    “不要使用for in遍历数组，会遍历到数组对象扩展出来的属性”