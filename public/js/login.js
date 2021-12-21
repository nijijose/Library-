let fill = document.getElementById("name");
let msg = document.getElementById("error");
let password = document.getElementById("password");
let epass = document.getElementById("perror");

function search(){
    let nameregexp = /^([a-zA-Z\ ]+)$/
    if(nameregexp.test(fill.value)){
      msg.innerHTML = "";
      fill.style.border = "2px solid green";
      return true;
    }
    else{
      msg.innerHTML = "Please enter the username that contain uppercase and lowercase letters.";
      msg.style.color = "red";
      fill.style.border = "2px solid red";
      return false;
  
    }
  }

  function show(){
    var x = document.getElementById("password");
    if(x.type === "password"){
      x.type = "text";
    }
    else{
      x.type = "password";
    }
  }


  function validate(){
    var passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(passregexp.test(password.value)){
        epass.innerHTML = "";
        password.style.border = "2px solid green";
        return true;
    }
    else{
      epass.innerHTML = "Please enter the password that contain minimum 8 characters, at least one lowercase letter and uppercase letter, and atleast one number";
      epass.style.color = "red";
      password.style.border = "2px solid red";
      return false;
    }
}