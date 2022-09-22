"use strict";
class MyClass {
    showName(uname, email) {
        console.log(`Welcome to Ts ${uname} ${email}`);
    }
}
const userdata = ["admin", "manager", "adas"];
console.log(...userdata);
let classDemo = new MyClass();
classDemo.showName("admin", "aa@mm.com");
