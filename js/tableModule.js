var tableModule = (function($)
 {     
    var selectedRow = null;
    function showData() {
        //  localStorage.clear();
        // let formData = {};
        let storageLength = localStorage.length;
        let tableBody = $('#table tbody');
        for(let i = 0;i < storageLength;i++) {
            formData = JSON.parse(localStorage.getItem(i));
            var newRow = $("<tr>''</tr>")
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
            attachEventHandlers(formData.index);
        }
        // console.log(this.parentElement.parentElement);
        // var newRow = $("<tr>''</tr>")
        // newRow.append($(`<td>${formData.fname}</td>`))
        // newRow.append($(`<td>${formData.lname}</td>`))
        // newRow.append($(`<td>${formData.phno}</td>`))
        // newRow.append($(`<td>${formData.email}</td>`))
        // newRow.append($(`<td>${formData.gender}</td>`))
        // newRow.append($(`<td>${formData.landmark}</td>`))
        // newRow.append($(`<td>${formData.city}</td>`))
        // newRow.append($(`<td>${formData.state}</td>`))
        // newRow.append($(`<td>${formData.country}</td>`))
        // newRow.append($(`<td>${formData.pin}</td>`))
        // newRow.append($(`<button class="btnEdit">Edit</button><button class="btnDelete" id="btn2">Delete</button>`))
        
        
        
        // tableBody.append(newRow);
        // // console.log(this.parentElement.parentElement);
        // attachEventHandlers(formData.index);
    }

     function attachEventHandlers(idx) {
        $('.btnEdit').on('click', function() { 
            $('#submit').val("Update");
            onEdit(idx);
            // Add edit functionality here
        });

        $('.btnDelete').on('click', function() {
            console.log(formModule.formData.idx);
            deleteCurRow(formModule.formData.idx);
        });
    }

    
    function onEdit(idx) {
        console.log(idx);
        // console.log(localStorage.getItem(idx));
        // Get the 3rd row (index 2) of a table

        let formData = JSON.parse(localStorage.getItem(idx));
        // console.log("Formdata on edit",formData);

        $('#fname').val(formData.fname);
        $('#lname').val(formData.lname);
        $('#phno').val(formData.phno);
        $('#email').val(formData.email);
        $('#pass').val(formData.pass);
        $('#landmark').val(formData.landmark);
        $('#city').val(formData.city);
        $('#state').val(formData.state);
        $('#country').val(formData.country);
        $('#pin').val(formData.pin);
        console.log("thisrow",this);
        selectedRow = formData                         // selectedRow is updated asynchronously,that's why we cant acess immediately
        
       ;
        // console.log("selected row",selectedRow);

        // updateRecord(selectedRow,idx)
        $(document).trigger('selectedRowUpdated', selectedRow);   
    }
   
    function updateRecord(row) {
        // let row = JSON.parse(localStorage.getItem(idx));
        //data after editing
        newFormData = {
            index:row.index,
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

        // go for validations 

            //new data is udated to the  row
        row.fname = newFormData.fname,
        row.lname = newFormData.lname;
        row.pass = newFormData.pass;
        row.gender = newFormData.gender;
        row.phno = newFormData.phno;
        row.email = newFormData.email;
        row.landmark = newFormData.landmark;
        row.state = newFormData.state;
        row.country = newFormData.country;
        row.pin = newFormData.pin;
        row.terms = $('#terms')[0].checked;

        // console.log(newFormData.index);

        const rows = $(`#table tbody tr:eq(${newFormData.index})`);
        rows.find('td:eq(0)').text(newFormData.fname);
        rows.find('td:eq(1)').text(newFormData.lname);
        rows.find('td:eq(2)').text(newFormData.pass);
        rows.find('td:eq(3)').text(newFormData.gender);
        rows.find('td:eq(4)').text(newFormData.phno);
        rows.find('td:eq(5)').text(newFormData.email);
        rows.find('td:eq(6)').text(newFormData.landmark);
     
        
        
        // localStorage.setItem(row.index,JSON.stringify(row))
        // console.log("Row after update",localStorage);
        formModule.resetForm();
        selectedRow = null;
        $(document).trigger('selectedRowUpdated', selectedRow); 
        
    }
    function deleteCurRow(idx) {
        console.log(idx);
        $('#table').deleteRow(idx);
    }
   
    function init() {
        showData(formModule.formData);
    }

    // Return public methods
    
    return {
        updateRecord:updateRecord,
        selectedRow:selectedRow,
        init: init,
        showData: showData
    };

})(jQuery);

