const new_window_button = document.getElementById("new-window");
var myWindow = null;
const first_window = window;
var error = "Error Occurred!";

function getErrorMessage(input){
  return input.name.charAt(0).toUpperCase() + input.name.slice(1) + " cannot be Empty!";
}

function checkRequired(inputArr) {
    var isReq = false;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        error = getErrorMessage(input);
        isReq =  true;
      }
    });
    return isReq;
}

function checkPassword(password){
  if(password.value.toLowerCase() !== "rbm"){
    error = "Wrong Password!";
    return true;
  }
  return false;
}

new_window_button.addEventListener('click',function (e) {

    if(myWindow == null || myWindow.closed) {
        myWindow = window.open("login.html","MsgWindow", "top=100,left=250,width=800,height=500");

        console.log(myWindow);
        console.log(myWindow.document);
        console.log(window.document);
        console.log(myWindow.document.getElementById('username'));
        myWindow.addEventListener('click',function(e){
            location.href="./landing-page/home.html";
            myWindow.close();
        });
    } else {
        myWindow.focus();
      }
    
    // const username = myWindow.document.getElementById('username');
    // const password = myWindow.document.getElementById('password');
    // const errormsg = myWindow.document.getElementById('error-msg');
    // const submit = myWindow.document.getElementById('submit-form');

    // console.log(myWindow);
    // console.log(myWindow.document);
    // console.log(window.document);
    // console.log(myWindow.document.getElementById('username'));
    // submit.onclick = function () {
    //     alert("Button Clicked!");
    //     submit.disabled = true;
    //     if(checkRequired([username]) || checkPassword(password)){
    //       document.getElementById("submit-form").disabled = false;
    //       errormsg.style.display ="block";
    //       errormsg.innerText = error;
    //     }else{
    //       errormsg.style.display ="none";
    //       setTimeout(function(){ href = "../../acme/index.html"; }, 5000);
    //     }
    // };

    // submit.onclick = function(){
    //     alert("Button Clicked");
    // }

    // myWindow.document.getElementById("submit-form").addEventListener('click',function(e){
    //     this.alert(
    //         "Button Clicked!"
    //     )
    //     myWindow.close();
    // })

    // myWindow.addEventListener('click',function(e){
    //     this.alert(
    //         this.username + 
    //         "Button Clicked!"
    //     )
    //     this.window.close();
    //     location.href="./landing-page/home.html";
    //     myWindow.close();
    // })


});



