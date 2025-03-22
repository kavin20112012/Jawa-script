function validate (e){
    e.preventDefault();

    const email =document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgBox = document.getElementById("message").value;

    let message="";
     
    if (email===''){
        message="please enter an email"
        msgBox.style.color='red';

    }
    else if (password===''){
        message="password must be atleast 8 charecters";
        msgBox.style.color = 'red';
    
    }
    else if(age==='' ){
        message="Age must be between 12 and 50";
        msgBox.style.color = 'red';
    }
    else{
        message="Login successfull";
        msgBox.style.color = 'green';
    }
    msgBox.innerHTML = message
    

    
}