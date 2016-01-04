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
/*
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
//引用类型值——复制的实质：两个变量引用一个同对象
console.log(abObj.a);//come
console.log(abObj.b.b1[0]);//Hello

console.log(tarObj.a);      // code better
console.log(tarObj.b.b1[0]);    // "Hello"
*/

//深拷贝-----------------------------------------------
//使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等

//所有类型的深拷贝
var cloneObject = function(src){
    var clone =src;
//  对于Object和Array的遍历，可以使用for in，这样可以保证在在Array对象上扩展的属性也可以正确复制
    if(src instanceof Array){
        for(key in src){
            clone[key]= arguments.callee(src[key]);
        }
    }
    if(src instanceof Object){
        for(key in src){
            if(src.hasOwnProperty(key)){//忽略继承属性
                clone[key] =cloneObject(src[key])
            }
        }
    }
//    对于Date,String,Boolean等引用类型的数据，需要考虑调用构造函数重新构造，直接赋值依然会有引用问题（不是真正的clone引用变量
    if(src instanceof Date){
        clone=new Date(src)
    }
    return clone;
}

 
//var date = new Date("July 21, 1983 01:15:00");
//var myDate = cloneObject(date);
//console.log(myDate)      //Thu Jul 21 1983 01:15:00 GMT+0800 

//测试用例
/*var srcObj = {
    a: "code better",
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};

var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = "come";
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);//come
console.log(abObj.b.b1[0]);//Hello

console.log(tarObj.a);      // code better
console.log(tarObj.b.b1[0]);    // "hello"

*/

//数组去重--------------------------------------------

//原始方法
function uniqArray1(arr){
     var tempArr=[];
     for(var i=0,len=arr.length;i<len;i++){
        if(tempArr.indexOf(arr[i])==-1){
            tempArr.push(arr[i]);
        }
     }
    return tempArr;
}

//hash——只考虑数组内为字符串和数字的话
//hash1
function uniqArray2(arr){
    var hashTable={};
    for(var i=0;i<arr.length;i++){
        var key=arr[i];
        hashTable[key]=true;
    }
    return Object.keys(hashTable)//?why:string类 
}
//hash2
function uniqArray3(arr){
    var hash={};
    return arr.filter(function(item){
        return hash.hasOwnProperty(item)?false:(hash[item]=true);
    }); 
}

//测试用例
/*
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray1(a);
console.log(b); // [1, 3, 5, 7]
b = uniqArray2(a);
console.log(b); // ["1", "3", "5", "7"]
//如果只考虑数组内为字符串和数字的话，可以使用HashMap方式进行字典去重，但需要考虑作为HashKey相同时（比如：’1’和1），要使用type区分处理
a=[1,"1",{a:1},{a:2}]
b=uniqArray3(a);
console.log(b);//[1, Object]
*/


//去除空格及制表符(一)普通函数
//循环之后变量依然存在


//改进版——使用正则表达式
function isTrim(c){
    var pattern=/\s/g;
    return pattern.test(c);
}

function simpleTrim(str) {
    // your implement
    var temp=[];
    for(var i=0;i<str.length;i++){ 
        if(!isTrim(str[i])){
            break;
        }
    };
    for(var j=str.length-1;j>=0;j--){
        if(!isTrim(str[j])){
            break;
        }    
    }
    temp=str.slice(i,j+1);
    return temp;
}


/*
var str = '   hi!  ';
str = simpleTrim(str);
console.log(str); // 'hi!'
*/
//去除空格及制表符(二)  正则表达式：空格制表符转换为空字符""
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
    for(var i=0,len=arr.length;i<len;i++){
        var a=fn(arr[i],i);
        console.log(a)
    }
}
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
    if(obj.toString&&obj.propertyIsEnumerable(toString)===false)
    i+=1;
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
console.log(getObjectLength(obj)); // 3

//学习正则表达式，在`util.js`完成以下代码----------邮箱没有完成
function isEmail(emailStr) {
    return emailStr.search(/^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i) !== -1;
}

function isMobilePhone(phone) {
    var pattern =new RegExp("\\d{11}");
    return pattern.test(phone)
}

var result1=isEmail("sabinahang");
var result2=isEmail("sabinahang@sina.com");
var result3=isMobilePhone("11");
var result4=isMobilePhone("13319283452");
console.log(result2)

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
