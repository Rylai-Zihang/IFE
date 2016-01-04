//类型判断----------------------------------------------
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr){
    return  Object.prototype.toString.call(arr)==="[object Array]"
}

//var arr=[1,2,3];
//console.log(isArray(arr))//true

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
    return Object.prototype.toString.call(fn) === '[object Function]';
}

//var hello = function(){
//    console.log("hello")
//}
//console.log(isFunction(hello))

//浅拷贝-----------------------------------------------
//for in结构
function clone(obj){
    var obj1=new Object();
    for(key in obj){
        obj1[key] = obj[key];
    }
    return obj1;
}

//浅拷贝：拷贝对象以指针的方式进行拷贝  即拷贝对象指针同原对象均是同一个对象的引用
var srcObj = {
    a: "code better",
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = clone(srcObj);

srcObj.a = "come";
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);//come
console.log(abObj.b.b1[0]);//Hello

console.log(tarObj.a);      // code better
console.log(tarObj.b.b1[0]);    // "Hello"

//深拷贝-----------------------------------------------
//递归：调用自身，使用argument.callee等价于当前调用的函数
var cloneObject =function(obj){
    var result={};
    for(key in obj){
        var copy = obj[key];
        if(typeof copy =="object"){
            result[key]= arguments.callee(copy);
        }else{
            result[key] = copy;
        }
    }
    return result;
    
}

//深拷贝：对拷贝对象进行改变不会影响到原对象 
//var abObj = srcObj;
//var tarObj = cloneObject(srcObj);
//
//srcObj.a = "come";
//srcObj.b.b1[0] = "Hello";
//
//console.log(abObj.a);//come
//console.log(abObj.b.b1[0]);//Hello
//
//console.log(tarObj.a);      // code better
//console.log(tarObj.b.b1[0]);    // "hello"

//数组去重--------------------------------------------
function uniqArray(arr){
     var tempArr=[];
     for(var i=0;i<arr.length;i++){
        if(tempArr.indexOf(arr[i])==-1){
            tempArr.push(arr[i]);
        }
     }
    return tempArr;
}

//var a = [1, 3, 5, 7, 5, 3];
//var b = uniqArray(a);
//console.log(b); // [1, 3, 5, 7]

//去除空格及制表符(一)普通函数
//循环之后变量依然存在
//arrayObject.slice(start,end)：从start到end处(不包括)的字符串,接受负参数，负参数相当于从尾部开始
//arrayObject.subString(start,end):不接受负参数
function simpleTrim(str) {
    // your implement
    var temp=[];
    for(var i=0;i<str.length;i++){ 
        if(str[i]!=" "&&str[i]!="/t"){
            break;
        }
    };
    for(var j=str.length-1;j>=0;j--){
        if(str[j]!=" "&&str[j]!="/t"){
            break;
        }    
    }
//    console.log(i);
//    console.log(j);
    temp=str.slice(i,j);
    return temp;
}

//var str = '   hi!  ';
//str = simpleTrim(str);
//console.log(str); // 'hi!'

//去除空格及制表符(二)  正则表达式：空格制表符 转换为空字符""
//RegExp：esec:捕获，test:检查是否匹配
//arrayObject：replace:替换，match:匹配
var trim=function(str){
    var regex=/^\s+|\s+$/g;
    var newStr=str.replace(/^\s+|\s+$/g, '')
    console.log(newStr)

}

//trim(str);

//遍历数组-----------------------------------
function each(arr,fn){
    for(var i=0;i<arr.length;i++){
        var a=fn(arr[i],i);
        console.log(a)
    }
}
//或者使用for-in 循环
//function each(arr,fn){
//    for(var i in arr){
//        var a=fn(arr[i],i);
//        console.log(a)
//    }
//}
function output(item, index) {
    return (index + ': ' + item)
}

//var arr = ['java', 'c', 'php', 'html'];
//each(arr, output);

//获取一个对象里面第一层元素的数量，返回一个整数------------------
function getObjectLength(obj) {
    var i=0;
    for(key in obj){
        i++
    }
    return i
}
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};

//console.log(getObjectLength(obj)); // 3

//学习正则表达式，在`util.js`完成以下代码----------邮箱没有完成
function isEmail(emailStr) {
   var pattern =new RegExp("^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$[^.]+@\.com","g")
    return pattern.test(emailStr)
}

function isMobilePhone(phone) {
    var pattern =new RegExp("\\d{11}");
    return pattern.test(phone)
}

//var result1=isEmail("sabinahang");
//var result2=isEmail("sabinahang@sina.com");
//var result3=isMobilePhone("11");
//var result4=isMobilePhone("13319283452");
//console.log(result4)

//DOM
//array与string的转换
//split方法：string.split(seperator,<howmany>),从seperator处分割字符串，与array.join方法相反;
//arrayObject.join(<seperator>)，将数组对象的所有元素放进一个字符串

//判断这个类是否存在
function hasClass(element,className){
    var classes= element.className.split(" ");
    return classes.indexOf(className);
}

function addClass(element, newClassName){
    element.className+=" "+newClassName;
}

function removeClass(element, oldClassName) {
    var index=hasClass(element,oldClassName);
    if(hasClass(element,oldClassName)!=-1){
        var classes= element.className.split(" "); 
        classes.splice(index,1);
        element.className =classes.join(" ");
    }
    else{
        return
    }
}
//way2 巧用replace
function removeClass(element, oldClassName) {
    if (hasClass(element, oldClassName)) {
        element.className = element.className.replace(oldClassName, '');; 
    }
}

var dom_class=document.getElementById("dom-class");

//console.log(hasClass(dom_class,"red"));//-1
//addClass(dom_class,"red");
//console.log(hasClass(dom_class,"red"));//1
//removeClass(dom_class,"center");
//console.log(hasClass(dom_class,"red"));//0
//removeClass(dom_class,"center");

function isSiblingNode(element,siblingNode){
    return element.parentNode==siblingNode.paretnNode
}


//相对浏览器窗口的位置

//网页大小
//分为相对大小及绝对大小，相对大小即视图（浏览器窗口的大小）；绝对大小是整个网页的大小，包括滚动条滚过的所有长度
//相对大小
function getViewport(){
    return {
        width:document.body.clientWidth||document.documentElemnt.clientWidth,
height:document.body.clientHeight||document.documentElemnt.clientHeight

    }
}

//绝对大小
function getPagearea(){
　　　　if (document.compatMode == "BackCompat"){
　　　　　　return {
　　　　　　　　width: document.body.scrollWidth,
　　　　　　　　height: document.body.scrollHeight
　　　　　　}
　　　　} else {
　　　　　　return {
　　　　　　　　width: document.documentElement.scrollWidth,
　　　　　　　　height: document.documentElement.scrollHeight
　　　　　　}
　　　　}
　　}
//console.log(getPagearea())

//网页元素坐标
//绝对坐标——offsetTop offsetLeft 相对于其父容器offsetParent对象的左上角的距离

function getPosition(element){
    var parent = element.offsetParent;
    var left=element.offsetLeft;
    var top=element.offsetTop;
    var e=element;
    while(parent!=null){
        e=e.offsetParent;
        parent=e.offsetParent;
        left+=e.offsetLeft;
        top+=e.offsetTop;
    }
    return {
        left,top
    }
}

//console.log(getPosition(dom_class));

//mini$

function $(selector){
    var element;
    if(typeof(selector)=="string"){
        if(selector.indexOf(" ")==-1){//单一选择器
            var a=selector.indexOf("#");
            var b=selector.indexOf(".");
            var c=selector.indexOf("[");
            var d=selector.indexOf("]");
            if(a===0){ 
                element=document.getElementById(selector.slice(1));
            }
            else if(b===0){
                element=document.getElementsByClassName(selector.slice(1))[0];           
            }
            else if(c===0){
                
            }
        }
    }
    
}
