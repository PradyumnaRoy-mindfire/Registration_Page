var formModule = (function($){

    var formData = {};
    var selectedRow = null;
    
    function init() {
        // console.log("formModule");
        var i = 0;
            //For AutoSubmit
        $("#form").on("submit",(e)=> {
            e.preventDefault();
            if(selectedRow == null) {
                readFormData();
        
            } else {
                // updateRecord()
            }
        });
        function readFormData() {
            formData.fname = $('#fname').val();
            // formData["fname"] = $('#fname').val();
            formData["lname"] = $('#lname').val();
            formData["pass"] = $('#pass').val();
            formData["phno"] = $('#phno').val();
            formData["email"] = $('#email').val();
            formData["country"] = $('#country').val();
            formData["state"] = $('#state').val();
            formData["city"] = $('#city').val();
            formData["landmark"] = $('#landmark').val();
            formData["pin"] = $('#pin').val();
            formData["terms"] = $('#terms')[0].checked;
            formData.index = i++;  

            // ValidAndcontrolShow(formData);
            showData(formData)

            // console.log(formData)
        }
        // function ValidAndcontrolShow(formData) {
        //     isValid = validation(formData)
        //     if(isValid == true && selectedRow == null) {
        //         // resetForm()
        //         // alert("Form Submitted Successfully")
        //         showData(formData);
        //     }
        // }

    }
    return {
        init:init ,
        formData:formData
    }
})(jQuery);