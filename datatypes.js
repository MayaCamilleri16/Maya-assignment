//string, i.e. a number of characters
let fullname = "Maya";
console.log(fullname);

//Number
let age = 18
console.log(age);
age = "Maya";
console.log()

//overriding  data types
let a =1, b =2, c=a+b;
console.log(c);
c = "a";
let d = c+a;
console.log(d);

function validateForm(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('firstName').value;
    var email = document.getElementById('firstName').value;
    var message = document.getElementById('firstName').value;
     var errors = "";
 
    if(isEmpty(firstName) || 
    isEmpty(lastName) || 
     isEmpty(email) || 
         isEmpty(message)) {
             errors += "<li>please fill in all fields.</li>";
    }
    if (errors != ""){
     document.getElementById('errors-content').innerHTML = "<ul class='errors-list'>" +errors+"</ul";
     document.getElementById('errors').classList.
     remove('d-none');
     document.getElementById('errors').classList.add
     ('d-block');
    }
 }
 
 
 
 function isEmpty(field){
     if(field == ""){
         return true;
     }
 
     
 else{
     return false;
 }
 }
 
 