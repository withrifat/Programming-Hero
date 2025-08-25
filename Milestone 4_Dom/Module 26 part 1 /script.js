// login button functionality
// login button function
document.getElementById('loginBtn').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 12345678910;
    const pin = 1234;
    const umobileNumber = document.getElementById('mobileNumber').value;
    const mobileNumberConverted = parseInt(umobileNumber);
    const upin = document.getElementById('passWord').value;
    const pinConverted = parseInt(upin);
    if(mobileNumberConverted === mobileNumber && pinConverted === pin){
        window.location.href = './home.html'
    }else{
        alert("Login failed | Invalid Credentials");
    }
})