/*-------------------原型示例------------------------*/
function Elem(id) {
    this.elem = document.getElementById(id);
}

Elem.prototype.html = function (val) {
    var elem = this.elem;
    if (val) {
        elem.innerHTML = val;
        return this;
    } else {
        return elem.innerHTML;
    }
};

Elem.prototype.on = function (type, fn) {
    var elem = this.elem;
    elem.addEventListener(type, fn);
    return this;
};

// var test = new Elem('test');
// console.log(test.html());

/*--------------------作用域示例---------------------*/
function fn2() {
    var a = 100;
    return function () {
        console.log(a);
    }
}

var f1 = fn2();

function fn3(fn) {
    var a = 300;
    fn();
}

fn3(f1);

/*---------------------异步和单线程------------*/

/*--------------------ajax-------------------*/
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://120.76.230.93:8095/api/BasicInfo/DivOfPower?proID=K330803000151', true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var testID = document.getElementById('test');
        var data = JSON.parse(xhr.responseText);
        // testID.innerText = JSON.stringify(data.result);
    }
};

/*--------------------本地存储----------------------*/
function Dog(color, name) {
    this.color = color;
    this.name = name;
}
//新建一个对象：
var p = new Dog("red", "狗狗");
var objStr = JSON.stringify(p);
var s = window.localStorage;
s.setItem("dog", objStr);
var storage=JSON.parse(s.getItem('dog'));
console.log(storage.color);
console.log(storage.name);































