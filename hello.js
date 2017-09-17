var MyClass = (function () {
    function MyClass(title, message) {
        this.title = title;
        this.message = message;
    }
    MyClass.prototype.print = function () {
        return "<h1>" + this.title + "</h1>" + 
        "<p>" + this.message + "</p>";
    };
    return MyClass;
}());
;
var msg = new MyClass("Hello", "this is TypeScript sample!");

document.write(msg.print());

document.write('<h1>Sample!</h1>');

var price = 1000;
var tax = 0.08;

var res = price * (1.0 * tax);
var msg1 = price + '円の税込価格は、' + res + '円です。';

document.write(msg1);