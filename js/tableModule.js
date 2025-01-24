var tableModule = (function($)
 {     
    var selectedRow = null;
    function showData() {
         
        // let formData = {};
        let storageLength = localStorage.length;
        let tableBody = $('#table tbody');
            // formData = JSON.parse(localStorage.getItem("formData"));
            var formData = formModule.formData;
            var newRow = $("<tr>''</tr>");
            newRow.append($(`<td>${formData.fname}</td>`))
            newRow.append($(`<td>${formData.lname}</td>`))
            newRow.append($(`<td>${formData.phno}</td>`))
            newRow.append($(`<td>${formData.email}</td>`))
            newRow.append($(`<td>${formData.gender}</td>`))
            newRow.append($(`<td>${formData.landmark}</td>`))
            newRow.append($(`<td>${formData.city}</td>`))
            newRow.append($(`<td>${formData.state}</td>`))
            newRow.append($(`<td>${formData.country}</td>`))
            newRow.append($(`<td>${formData.pin}</td>`))
            newRow.append($(`<button class="btnEdit">Edit</button><button class="btnDelete" id="btn2">Delete</button>`))
            tableBody.append(newRow);
            attachEventHandlers(newRow,formData);
            formModule.resetForm();
       
        
        
        
        // // console.log(this.parentElement.parentElement);
        // attachEventHandlers(formData.index);
    }

     function attachEventHandlers(newRow,formData) {
        $('.btnEdit').on('click', function() { 
            // Change the button -> "Update"
            $('#submit').val("Update");
            onEdit();
        });

        $('.btnDelete').on('click', function() {
            deleteCurRow();
        });
    }

    
    function onEdit() {
        $(document).on('click', '.btnEdit', function() {
            // target the row that contains the clicked button
            selectedRow = $(this).closest('tr');
            $(document).trigger('selectedRowUpdated', [selectedRow]); 

            // Populate the form with the current values of the selected row
            $('#fname').val(selectedRow.find('td').eq(0).text());
            $('#lname').val(selectedRow.find('td').eq(1).text());
            $('#phno').val(selectedRow.find('td').eq(2).text());
            $('#email').val(selectedRow.find('td').eq(3).text());
            $('#pass').val(selectedRow.find('td').eq(4).text());
            $('#email').val(selectedRow.find('td').eq(5).text());
            $('#email').val(selectedRow.find('td').eq(6).text());
            $('#email').val(selectedRow.find('td').eq(7).text());
    
            
        });



        // console.log(newRow);
        // console.log(localStorage.getItem(idx));
        // Get the 3rd row (index 2) of a table
        //newRow.find('td').eq(0).text()
        //let formData = JSON.parse(localStorage.getItem("formData"));
        // console.log("Formdata on edit",formData);

        // $('#fname').val(newRow.find('td').eq(0).text());
        // $('#fname').val(newRow.find('td').eq(0).text());
        // $('#lname').val(newRow.find('td').eq(1).text());
        // $('#phno').val(formData.phno);
        // $('#email').val(formData.email);
        // $('#pass').val(formData.pass);
        // $('#landmark').val(formData.landmark);
        // $('#city').val(formData.city);
        // $('#state').val(formData.state);
        // $('#country').val(formData.country);
        // $('#pin').val(formData.pin);
        // console.log("thisrow",this);
                                // selectedRow is updated asynchronously,that's why we cant acess immediately
        
       ;
        // console.log("selected row",selectedRow);
        // $(document).on('click', '.btnEdit', function() {
        //     formData.fname = $(this).closest('tr').find('td').eq(0).html() ;
        //     // localStorage.setItem("formData",formData);
        // //    dj(selectedRow)
             
        // });
        // selectedRow = newRow
        
        
        // updateRecord(selectedRow,idx)
    }
   
    function updateRecord(selectedRow) {
        // let row = JSON.parse(localStorage.getItem(idx));
        //data after editing
        newFormData = {
            // index:newRow.index,
            fname:$('#fname').val(),
            lname:$('#lname').val(),
            pass:$('#pass').val(),
            gneder:$('#fname').val(),
            phno:$('#phno').val(),
            email:$('#email').val(),
            landmark:$('#landmark').val(),
            city:$('#city').val(),
            state:$('#state').val(),
            country:$('#country').val(),
            pin:$('#pin').val(),
            terms:$('#terms')[0].checked
        }

        selectedRow.find('td').eq(0).text(newFormData.fname);
       
        // newRow.html(newFormData.fname)

        // go for validations 
        // newRow.append($(`<td>${newFormData.fname}</td>`))
        // newRow.find('td:eq(0)').text(newFormData.fname);
        



            //new data is udated to the  row
        // row.fname = newFormData.fname,
        // row.lname = newFormData.lname;
        // row.pass = newFormData.pass;
        // row.gender = newFormData.gender;
        // row.phno = newFormData.phno;
        // row.email = newFormData.email;
        // row.landmark = newFormData.landmark;
        // row.state = newFormData.state;
        // row.country = newFormData.country;
        // row.pin = newFormData.pin;
        // row.terms = $('#terms')[0].checked;

        // // console.log(newFormData.index);

        // const rows = $(`#table tbody tr:eq(${newFormData.index})`);
        // rows.find('td:eq(0)').text(newFormData.fname);
        // rows.find('td:eq(1)').text(newFormData.lname);
        // rows.find('td:eq(2)').text(newFormData.pass);
        // rows.find('td:eq(3)').text(newFormData.gender);
        // rows.find('td:eq(4)').text(newFormData.phno);
        // rows.find('td:eq(5)').text(newFormData.email);
        // rows.find('td:eq(6)').text(newFormData.landmark);
     
        // newRow.find('td:eq(0)').text(newFormData.fname);
        // newRow.find('td:eq(1)').text(newFormData.lname);
        // newRow.find('td:eq(2)').text(newFormData.pass);
        // newRow.find('td:eq(3)').text(newFormData.phno);
        // newRow.find('td:eq(4)').text(newFormData.email);
        // newRow.find('td:eq(5)').text(newFormData.fname);
        // newRow.find('td:eq(6)').text(newFormData.fname);
        


        // localStorage.setItem(row.index,JSON.stringify(row))
        // console.log("Row after update",localStorage);
        formModule.resetForm();
        selectedRow = null;
        $(document).trigger('selectedRowUpdated', selectedRow); 
        
    }
    function deleteCurRow() {
        $(document).on('click', '.btnDelete', function() {
            $(this).closest('tr').remove();  // Remove the  row (tr) that clicked the button .btnDelete
        });
    }
   
    function init() {
        // localStorage.clear();   
        if(selectedRow != null){
            showData();
        }
    }

    // Return public methods
    
    return {
        updateRecord:updateRecord,
        selectedRow:selectedRow,
        init: init,
        showData: showData
    };

})(jQuery);

