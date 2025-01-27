var formModule = (function($){
    var formData = {};
    var selectedRow = null;    // //Error 
    var i = 0;
    
    function init() {
            //For AutoSubmit
        $("#form").on("submit",(e)=> {
            e.preventDefault();
          
            if(selectedRow == null) {
                readFormData();
        
            } else {
                tableModule.updateRecord(selectedRow);
            }
            $(document).on('selectedRowUpdated', function(event, updatedRow) {
                selectedRow = updatedRow;
            });
           
        });
        function readFormData() {
            formData.fname = $('#fname').val();
            // formData["fname"] = $('#fname').val();
            formData["lname"] = $('#lname').val();
            formData["pass"] = $('#pass').val();
            formData["phno"] = $('#phno').val();
            formData["email"] = $('#email').val();
                //For gender 
            if($('#male').prop('checked')) {
                formData.gender = "Male";
            }
            else if($('#female').prop('checked')){
                formData.gender = "Female";
            }
            else if($('#others').prop('checked')){
                formData.gender = "Others";
            }

            formData["country"] = $('#country :selected').text() == "Select Country" ? "" : $('#country :selected').text();

            formData["state"] = $('#state :selected').text() == "Select State" ? "" : $('#state :selected').text();

            formData["city"] = $('#city :selected').text() == "Select City" ? "" : $('#city :selected').text();
            

            // formData["state"] = $('#state').val();
            // formData["city"] = $('#city').val();

            formData["landmark"] = $('#landmark').val();
            formData["pin"] = $('#pin').val();
            formData["terms"] = $('#terms')[0].checked;
            formData.index = i++;  
            localStorage.setItem("formData",JSON.stringify(formData));
             
            ValidAndcontrolShow(formData);
        }

    }
    function resetForm() {
        $("#form")[0].reset(); 

        // $("#fname").val('');
        // $("#lname").val('');
        // $("#phno").val('');
        // $("#email").val('');
        // $("#pass").val('');
        // $("#landmark").val('');
        // $("#city").val('');
        // $("#state").val('');
        // $("#country").val('');
        // $("#pin").val('');
        // //For the terms and condition part
        // $('#terms')[0].checked = false;
    
        // //
        // let radioButtons = $('[name = "gender"]');
        // for(let radio of radioButtons) {
        //     if(radio.checked) {
        //         radio.checked = false;
        //         break;
        //     }
        // }
        // selectedRow = null;
    }
    function ValidAndcontrolShow(formData) {
        let isValid = validationModule.validation(formData)
        console.log("isvalid",isValid);
        if(isValid == true && selectedRow == null) {
            console.log("Hi");
            resetForm()
            tableModule.showData();
            pageModule.displaySubmitPopup();
        }
    }

    return {
        init:init ,
        formData:formData,
        resetForm : resetForm,
        // ValidAndcontrolShow:ValidAndcontrolShow
    }
})(jQuery);





















// Initialize the module
// $(document).ready(function() {
//     tableModule.init();
// });


// var formModule = (function($){

//     var formData = {};
//     var selectedRow = null;
    
//     function init() {
//         // console.log("formModule");
//         var i = 0;
//             //For AutoSubmit
//         $("#form").on("submit",(e)=> {
//             e.preventDefault();
//             if(selectedRow == null) {
//                 readFormData();
        
//             } else {
//                 // updateRecord()
//             }
//         });
//         function readFormData() {
//             formData.fname = $('#fname').val();
//             // formData["fname"] = $('#fname').val();
//             formData["lname"] = $('#lname').val();
//             formData["pass"] = $('#pass').val();
//             formData["phno"] = $('#phno').val();
//             formData["email"] = $('#email').val();
//             formData["country"] = $('#country').val();
//             formData["state"] = $('#state').val();
//             formData["city"] = $('#city').val();
//             formData["landmark"] = $('#landmark').val();
//             formData["pin"] = $('#pin').val();
//             formData["terms"] = $('#terms')[0].checked;
//             formData.index = i++;  

//             // ValidAndcontrolShow(formData);
//             showData(formData)

//             // console.log(formData)
//         }
//         // function ValidAndcontrolShow(formData) {
//         //     isValid = validation(formData)
//         //     if(isValid == true && selectedRow == null) {
//         //         // resetForm()
//         //         // alert("Form Submitted Successfully")
//         //         showData(formData);
//         //     }
//         // }

//     }
//     return {
//         init:init ,
//         formData:formData
//     }
// })(jQuery);