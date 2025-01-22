var tableModule = (function($){
    function init() {
        // console.log("tableModule");
        var formData = formModule.formData;
        console.log(formData)

        function showData() {
            let tableBody = $('#table tbody');
            var newRow = `<tr > 
                            <td>${formData["fname"]}</td>
                            <td>${formData["lname"]}</td>
                            <td>${formData["phno"]}</td>
                            <td> ${formData["email"]} </td>
                            <td> ${formData["gender"]} </td>
                            <td> ${formData["landmark"]} </td>
                            <td> ${formData["city"]} </td>
                            <td> ${formData["state"]} </td>
                            <td> ${formData["country"]} </td>
                            <td> ${formData["pin"]} </td>
                            <td><button class="btnEdit"  >Edit</button> <button class="btnDelete" onclick="deleteCurRow(this)" id="btn2" >Delete</button></td> 
                            <tr>`;
            tableBody.append(newRow) ;
            
            $('.btnEdit').attr('class','btnEdit');
            $('.btnDelete').attr('class','btnDelete')
            // resetForm();
            // $(".btnEdit").on('click',function() {
            //     onEdit(formData);
            // });
        }
    }
    return {
        init:init ,
        showData:showData(formData)
    }
})(jQuery);