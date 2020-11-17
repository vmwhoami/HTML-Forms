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
function isValidEmail(input)
{
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())){
    showSucces(input)
  }else{
    showError(input, `Email is not valid` )
  }
}

/**************************
  Check presence
 **************************/
function checkPresence(arr){

  arr.forEach(item => {
 
    if(item.value === ""){
      showError(item, `${capItemId(item)} must pe present` )
    }else{
      showSucces(item)
    }    
  });

}

function capItemId(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}




/**************************
  Event listers
 **************************/
form.addEventListener("submit",function(e){
  e.preventDefault();
  
 checkPresence([email,number,password]);
 isValidEmail(email)
});