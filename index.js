console.log('videonumber50');
let validusername=false;
let validemail=false;
let validphone=false;
let validpin=false;
let username = document.getElementById("name");
username.addEventListener("blur", function () {
    let regx = /^[a-zA-Z]([a-zA-z]){1,20}/;
    let usernamevalue = username.value;
    if (regx.test(usernamevalue)) {
        username.classList.add("is-valid");
        username.classList.remove("is-invalid");
        validusername=true;
    }
    else {
        username.classList.add("is-invalid");
        username.classList.remove("is-valid");
        validusername=false;
    }
});

let email = document.getElementById("email");
email.addEventListener("blur", function () {

    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let emailvalue = email.value;
    if (regx.test(emailvalue)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        validemail=true;
    }
    else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        validemail=false;
    }
});
let phone = document.getElementById("phone");
phone.addEventListener("blur", function () {

    let regx = /^([0-9]{10}$)/;
    let phonevalue = phone.value;
    if (regx.test(phonevalue)) {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
        validphone=true;
    }
    else {
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        validphone=false;
    }
});
let pin = document.getElementById("pin");
pin.addEventListener("blur", function () {

    let regx = /(^[0-9]{6}$)/
    let pinvalue = pin.value;
    if (regx.test(pinvalue)) {
        pin.classList.add("is-valid");
        pin.classList.remove("is-invalid");
        validpin=true;
    }
    else {
        pin.classList.add("is-invalid");
        pin.classList.remove("is-valid");
        validpin=false;
    }
})


let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let success=document.getElementById("success");
    let danger=document.getElementById("failed")
    if(validusername && validemail && validphone && validpin){
        success.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success ! Message:</strong> Your Form Submit Successfully
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      setTimeout(() => {
          success.innerHTML="";
      }, 2000);
        
    }
    else{
        danger.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error! Message:</strong> Input not valid. Hence not submitting the form. Please correct the errors and try again
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        
      setTimeout(() => {
        danger.innerHTML="";
    }, 2000);
    }

  
})