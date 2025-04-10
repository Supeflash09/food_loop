const wrapper =document.querySelector('.wrapper');
const registerLink =document.querySelector('.register-link');
const loginLink =document.querySelector('.login-link');

registerLink.onclick = () =>{
    wrapper.classList.add('active');
}

loginLink.onclick = () =>{
    wrapper.classList.remove('active');
}



function login () {
    let username=document.getElementById("username").value;
    let password=document.getElementById("password_user").value;
    

    let website_username="fabio";
    let website_password="fabio123"

    if(username == website_username && password == website_password){
        window.location="prima.html"
    }


}


function registrati(){
    if(2>0){
        window.location="prima.html"
    }
}