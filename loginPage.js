
document.addEventListener("DOMContentLoaded", function() {
    const rightBody = document.getElementById("otp_button");
    const otpSystem = document.querySelector('.otp_system');

    otpSystem.style.display = 'none';
   
    const submitButton = document.querySelector('.right_body input[type="button"]');
    const otpTimer = document.getElementById("otptimer");
    submitButton.addEventListener('click', function() {
        
        if (rightBody.style.display !== 'none') {
            rightBody.style.display = 'none';
            otpSystem.style.display = 'flex';
        } else {
            rightBody.style.display = 'flex';
            otpSystem.style.display = 'none';
        }
        otpTimer.innerHTML = 30;
        const expireInterval = setInterval(function(){
            otpTimer.innerHTML--;
            if(otpTimer.innerHTML == 0){
                clearInterval(expireInterval);
            }
        },1000);
    });
});

 const login = document.getElementById("submit");
 login.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/home.html";
 });
