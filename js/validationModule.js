var validationModule = (function(){
    
    function validation(formData) {
        let fnameErr = $('#fname-err');
        let lnameErr = $('#lname-err');
        let passErr = $('#pass-err');
        let phnoErr = $('#phno-err');
        let emailErr = $('#email-err');
        let genderErr = $('#gender-err');
        let countryErr = $('#country-err');
        let stateErr = $('#state-err');
        let pinErr = $('#pin-err');
        let termsErr = $('#terms-err');
    

        fnameErr.text("");
        lnameErr.text("");
        passErr.text("");
        phnoErr.text("");
        emailErr.text("");
        genderErr.text("");
        countryErr.text("");
        stateErr.text("");
        pinErr.text("");
        termsErr.text("");


        let isValid = true;
        //firstname validation
        if(formData["fname"] === ""||/\d/.test(formData["fname"]) == true ) {
            fnameErr.text( "**Firstname is not valid...");
            $("#fname").addClass('errorEffect')
            isValid = false;
        }
        // if() {
        //     fnameErr.textContent = "**Enter name properly...";
        //     isValid = false;
        // }

        //password validation
        if(formData['pass'] ==="" || formData['pass'].length  < 6 || formData['pass'].length  > 50 ||/[^a-zA-Z0-9\s]/.test(formData["pass"]) == false) {
            isValid = false;
            passErr.text("**Password is not valid");
            $('#eye').attr('class','eyeAdd');
            $("#pass").addClass('errorEffect') ;   //for red border 
            // if(formData["pass"] ==="") {
            //     passErr.textContent = "**This field is required..";
            // }
            // if(formData['pass'].length  < 2)
            //     passErr.textContent = "**Password is too small "; //password word will contain atleast 6 characters 
            // if(formData['pass'].length  > 10)
            //     passErr.textContent = "**Password is too large "; iife
            // if(/[^a-zA-Z0-9\s]/.test(formData["pass"]) == false)
            

        }
        // // if(formData['pass'] ==="" ) {
        // //     passErr.textContent="**This field is required...";
        // //     isValid = false;
        // // }

        // // //email validation
        
        let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
        if(formData['email'] ==="" || emailRegx.test(formData['email']) == false) {
            isValid = false;
            emailErr.text("**Email is not valid...");
            $("#email").addClass('errorEffect');
        }

        //Pincode validation
    
        if(formData['pin'] === ""||formData['pin'].length > 7 || formData['pin'].length <5  || /^\d+$/.test(formData['pin']) == false) {
            pinErr.text("**Pincode is not valid..");
            $("#pin").addClass('errorEffect');
            isValid = false;
        }
        
        // //Gender Validations
        let radioButtons = $('#gender');
        console.log(radioButtons);
        let flag = false;
        for(let radio of radioButtons) {
            if(radio.checked) {
                flag = true;
                break;
            }
        }
         if(flag == false) {
            genderErr.text("**Select your gender...");
            isValid = false;

         } else {
            // console.log(document.querySelector("input[name='gender']:checked").value);
            formData["gender"] = $("input[name='gender']:checked").value;
         }

         //Terms & Condition Validations
        
         if(formData["terms"] == false) {
            $("#terms").addClass('errorEffect')
            termsErr.text("**Accept the terms and conditions...") ;
            isValid = false;
         }

         //phno
         if(formData['phno'].length != 10 ||  /^\d+$/.test(formData['phno']) == false) {
            phnoErr.text("**Phone no is not valid..");
            $("#phno").addClass('errorEffect')
            isValid = false;
        }
        console.log(formData);

        //  If valid data is filled in all fields
        
        //  if(isValid == true && selectedRow == null) {
        //     //console.log("Null")
        //     resetForm()
        //     // alert("Form Submitted Successfully")
        //     showData(formData);
        //  }
        return isValid
     
    }
    function init(){
        validation(formData)
    }
    return {
        init:init,
        validation:validation
    }
}(jQuery))