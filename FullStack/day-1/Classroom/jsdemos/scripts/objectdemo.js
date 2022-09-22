function show(){
    const Userdata={
         uname: document.data.uname.value,
         email:document.data.email.value,
         city:document.data.city.value
    }
    
    
    document.getElementById('show').innerHTML=Userdata.uname + " " + Userdata.email + " " + Userdata.city

    }
    
    