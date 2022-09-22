

// console.log('This is a Log msg Welcome to Js');
// document.write('this is document write msg')
// alert('welcome')


function callme(){
    
console.log('This is a Log msg Welcome to Js');
document.write('this is document write msg')
alert('welcome')

}

function showme(){
    document.getElementById('show').innerHTML='Welcome to id Msg'
}

function showReplace(){
    let newdata = document.data.uname.value
    document.getElementById('show').innerHTML=newdata
    alert(newdata)
}