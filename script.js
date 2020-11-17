const form  = document.getElementById('form');
const email  = document.getElementById('email');
const number  = document.getElementById('number');
const password  = document.getElementById('password');



/**************************
  Show input error message
 **************************/
function showError(input,message){
 const formControl = input.parentElement;
}




/**************************
  Event listers
 **************************/
form.addEventListener("submit",function(e){
  e.preventDefault();
 
if(email.value === ""){
  showError(email,"Email is required");
}else{
  showSucces(email)
}


});