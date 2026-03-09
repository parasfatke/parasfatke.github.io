function validateForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;

if(name=="" || email=="" || phone==""){
alert("Please fill all required fields");
return false;
}

if(!email.includes("@")){
alert("Enter valid email");
return false;
}

if(phone.length<10){
alert("Enter valid phone number");
return false;
}

alert("Enquiry submitted successfully");

return true;
}
