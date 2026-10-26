document.getElementById("contact-form").onsubmit = () => {
//alert("hi");
    let isValid = true;

    // Clear all errors
    clearErrors();

let fname = document.getElementById("fname").value.trim();
    if (fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

let lname = document.getElementById("lname").value.trim();
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

let met = document.getElementById("meet").value;
    if(met == "none"){
        document.getElementById("err-meet").style.display = "block";
        isValid = false;
    }
    

let checkbox = document.getElementById("mailing-list");
        if(checkbox.checked){
            //console.log("is checked");
            document.getElementById("err-email").style.display = "block";
            //document.getElementById("email-format").style.display ="block";
            isValid=false;
        }

let email_input = document.getElementById("email").value;
        if(email_input !=="" && !email_input.includes("@",".")){
            document.getElementById("err-emailsign").style.display = "block";
            isValid = false;
        }else{
            document.getElementById("err-emailsign").style.display = "none";
        
        }


let linkedin_input = document.getElementById("linkedin").value.trim();
    if(linkedin_input !=="" && !linkedin_input.startsWith("https://linkedin.com/in/")){
        document.getElementById("err-linkedin").style.display = "block";
        isValid = false;
    }else{
        document.getElementById("err-linkedin").style.display="none";
    }


   return isValid;

};

    function clearErrors(){
        let errors= document.getElementsByClassName("err");
        for(let i=0; i<errors.length; i++){
            errors[i].style.display = "none";
        }
    }

