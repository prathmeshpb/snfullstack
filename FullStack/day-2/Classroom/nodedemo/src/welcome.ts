class MyClass {
  showName(uname: string, email: string) {
    console.log(`Welcome to Ts ${uname} ${email}`);
  }
}

const userdata = ["admin", "manager", "adas"];
console.log(...userdata);

let classDemo = new MyClass();
classDemo.showName("admin", "aa@mm.com");
