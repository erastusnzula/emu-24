const signInLinkBtn = document.querySelector(".sign-in-link-btn");
const signUpLinkBtn = document.querySelector(".sign-up-link-btn");
const loginSignUpContainer = document.querySelector(".login-sign-up-container");
const cardClicked = document.querySelector(".card-clicked");
const cardClickedB = document.getElementById("card-clicked");
const vcardClickedB = document.getElementById("vcard-clicked");
const vCardClicked = document.querySelector(".vcard-clicked");
const paymentEmail = document.getElementById("payment-email");
const paymentCardNumber = document.getElementById("payment-card-number");
const paymentCardCVV = document.getElementById("payment-card-CVV")
const paymentCardExpiry = document.getElementById("payment-card-expiry");
const mastercard = document.querySelector(".mastercard-selected");
const visacard = document.querySelector(".visacard-selected");



const disabledInput = ()=>{
    paymentCardCVV.disabled = false;
    paymentCardExpiry.disabled = false;
    paymentCardNumber.disabled = false;
}

if(cardClicked){
    cardClicked.addEventListener('click',()=>{
        // paymentEmail.disabled=false;
        
        cardClickedB.style.backgroundColor = "#820cf1";
        vcardClickedB.style.backgroundColor = "#fff";
        visacard.style.display = 'none';
        mastercard.style.display = 'block';
        disabledInput()
       
    })
}

if(vCardClicked){
    vCardClicked.addEventListener('click',()=>{
        const vpaymentEmail = document.getElementById("vpayment-email");
        const vpaymentCardNumber = document.getElementById("vpayment-card-number");
        const vpaymentCardCVV = document.getElementById("vpayment-card-CVV")
        const vpaymentCardExpiry = document.getElementById("vpayment-card-expiry")
        // paymentEmail.disabled=false;
        
        vcardClickedB.style.backgroundColor="#820cf1";
        cardClickedB.style.backgroundColor = "#fff";
        visacard.style.display = 'block';
        mastercard.style.display = 'none';
        vpaymentCardCVV.disabled = false;
        vpaymentCardExpiry.disabled = false;
        vpaymentCardNumber.disabled = false;
        
    })
}


signUpLinkBtn.addEventListener('click',()=>{
    console.log("working");
    loginSignUpContainer.classList.toggle("active");
})

signInLinkBtn.addEventListener('click',()=>{
    loginSignUpContainer.classList.toggle("active");
})


