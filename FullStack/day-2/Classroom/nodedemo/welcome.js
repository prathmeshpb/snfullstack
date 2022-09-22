var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.showName = function (uname, email) {
        console.log("Welcome to Ts ".concat(uname, " ").concat(email));
    };
    return MyClass;
}());
var classDemo = new MyClass();
classDemo.showName('admin', 'aa@mm.com');
