

document.querySelector("form").addEventListener("submit",mylogin)
 let data = JSON.parse(localStorage.getItem("details"))

 function mylogin() {
    event.preventDefault()
    // console.log("inside")
    checkuser()
 }

 function checkuser(){
    let uemail = document.getElementById("email").value;
    let upassword = document.getElementById("password").value;
    
    let flag = false
    for(let i=0;i<data.length;i++){
        if(uemail==data[i].email && upassword==data[i].password){
            // console.log("k")
            flag = true;
            // alert("login successful")
        }
    }
    if(flag==true){
        alert("Login sucessfully")
        window.location.href="index.html"
    }else{
        alert("wrong user details")
    }
 }