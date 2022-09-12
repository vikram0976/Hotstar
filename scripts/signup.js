

document.querySelector("form").addEventListener("submit",myfun)
let newarr = JSON.parse(localStorage.getItem("details")) || []
   function myfun(event){
       event.preventDefault()
    //    console.log("inside")
       let obj={
           name:document.getElementById("name").value,
           contact:document.getElementById("contact").value,
           email:document.getElementById("email").value,
           password:document.getElementById("password").value,
       }

      newarr.push(obj)
   localStorage.setItem("details",JSON.stringify(newarr))
   window.location.href="login.html"
}