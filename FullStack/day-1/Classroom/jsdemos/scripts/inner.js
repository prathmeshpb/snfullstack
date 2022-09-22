let person={
    name:'admin',
    greet: function(){
        return "hello" + this.name
    }
}

let user = Object.create(person)
user.name = 'Manager'
user.doWork = function(task){
    return "i can do this " + task
}

console.log(user);
console.log(user.doWork('teaching'))