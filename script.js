
function autoSubmit(event) {
    event.preventDefault();    /* to stop the auto submit */
    readFormData();

}

function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["pass"] = document.getElementById("pass").value;
    formData["phno"] = document.getElementById("phno").value;
    formData["email"] = document.getElementById("email").value;
    formData["country"] = document.getElementById("country").value;
    formData["state"] = document.getElementById("state").value;
    formData["city"] = document.getElementById("city").value;
    formData["landmark"] = document.getElementById("landmark").value;
    formData["pin"] = document.getElementById("pin").value;
    formData["terms"] = document.getElementById("terms").value;
    formData["gender"] = document.querySelector("input[name='gender']:checked").value;
    formData["terms"] = document.querySelector('input[type="checkbox"]').checked == true;

    showData(formData);
}

function validation(formData) {

    let isValid = false;
    if(formData["fname"] === "" ||  /\d/.test(formData["fname"])) {
        isValid = false;
    }
}
 function showData(formData) {
    let table = document.getElementById('table');

    console.log(table)

    var newRow = table.insertRow(1);  // index is the position of the row to insert
    var cell1 = newRow.insertCell(0);       //one cell is created
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    var cell11 = newRow.insertCell(10);

    cell1.innerHTML = formData["fname"];
    cell2.innerHTML = formData["lname"];
    cell3.innerHTML = formData["phno"];
    cell4.innerHTML = formData["email"];
    cell5.innerHTML = formData["gender"];
    cell6.innerHTML = formData["landmark"];
    cell7.innerHTML = formData["city"];
    cell8.innerHTML = formData["state"];
    cell9.innerHTML = formData["country"];
    cell10.innerHTML = formData["pin"];
    cell11.innerHTML = '<td><button class="btn">Edit</button> <button class="btn" onclick="deleteCurRow(1)">Delete</button></td> ';
    
    
 }    
 
 function deleteCurRow(idx) {
    document.getElementById("table").deleteRow(idx);
 }
// formData = {
//     fname :{
//         value:"",
//         message:"",
//     }
// }