const form  = document.getElementById('form');
const email  = document.getElementById('email');
const number  = document.getElementById('number');
const password  = document.getElementById('password');



/**************************
  Show input error message
 **************************/
function showError(input,message){
 const formControl = input.parentElement;
 formControl.className = "form_field error";
 const small = formControl.querySelector('small')
 small.innerText = message
}
/**************************
  Show input success 
 **************************/
function showSucces(input){
  const formControl = input.parentElement;
  formControl.className = "form_field success";
}

/**************************
  Check email validity 
 **************************/
function isValidEmail(email)
{
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


/**************************
  Event listers
 **************************/
form.addEventListener("submit",function(e){
  e.preventDefault();
  
  if(email.value === ""){
    showError(email,"Email is required");
  }
  else if(!isValidEmail(email.value)) {
    showError(email,"Email is not valid");

  }else{
    showSucces(email)
  }

  if(number.value === ""){
    showError(number,"Number is required");
  }else{
    showSucces(number)
  }

  if(password.value === ""){
    showError(password,"Password is required");
  }else{
    showSucces(password)
  }

});