const signInLinkBtn = document.querySelector(".sign-in-link-btn");
const signUpLinkBtn = document.querySelector(".sign-up-link-btn");
const loginSignUpContainer = document.querySelector(".login-sign-up-container");

signUpLinkBtn.addEventListener('click',()=>{
    console.log("working");
    loginSignUpContainer.classList.toggle("active");
})

signInLinkBtn.addEventListener('click',()=>{
    loginSignUpContainer.classList.toggle("active");
})