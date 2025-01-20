
var selectedRow = null;
var formData = {};
function autoSubmit(event) {
    event.preventDefault();    /* to stop the auto submit */

    
    if(selectedRow == null) {
        readFormData();

    } else {
        console.log(selectedRow)
        updateRecord()
    }

}




function readFormData() {
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

    
    formData["terms"] = document.querySelector('input[type="checkbox"]').checked == true;


    ValidAndcontrolShow(formData);
    // return formData;
}


function validation(formData) {
    // console.log("validations form")
    let fnameErr = document.getElementById('fname-err');
    let lnameErr = document.getElementById('lname-err');
    let passErr = document.getElementById('pass-err');
    let phnoErr = document.getElementById('phno-err');
    let emailErr = document.getElementById('email-err');
    let genderErr = document.getElementById('gender-err');
    let countryErr = document.getElementById('country-err');
    let stateErr = document.getElementById('state-err');
    let pinErr = document.getElementById('pin-err');
    let termsErr = document.getElementById('terms-err');
    

    fnameErr.textContent = "";
    lnameErr.textContent = "";
    passErr.textContent = "";
    phnoErr.textContent = "";
    emailErr.textContent = "";
    genderErr.textContent = "";
    countryErr.textContent = "";
    stateErr.textContent = "";
    pinErr.textContent = "";
    termsErr.textContent = "";


    let isValid = true;
    //firstname validation
    if(formData["fname"] === ""||/\d/.test(formData["fname"]) == true ) {
        fnameErr.textContent = "**Firstname is not valid...";
        // document.getElementById("fname").setAttribute('class','errorEffect')
        isValid = false;
    }
    // if() {
    //     fnameErr.textContent = "**Enter name properly...";
    //     isValid = false;
    // }

    // //password validation
    if(formData['pass'] ==="" || formData['pass'].length  < 2 || formData['pass'].length  > 50 ||/[^a-zA-Z0-9\s]/.test(formData["pass"]) == false) {
        isValid = false;
        passErr.textContent = "**Password is not valid";
        document.querySelector('#eye').setAttribute('class','eyeAdd');
        // if(formData["pass"] ==="") {
        //     passErr.textContent = "**This field is required..";
        // }
        // if(formData['pass'].length  < 2)
        //     passErr.textContent = "**Password is too small "; //password word will contain atleast 6 characters 
        // if(formData['pass'].length  > 10)
        //     passErr.textContent = "**Password is too large ";
        // if(/[^a-zA-Z0-9\s]/.test(formData["pass"]) == false)
           

    }
    // if(formData['pass'] ==="" ) {
    //     passErr.textContent="**This field is required...";
    //     isValid = false;
    // }

    // //email validation
    
    let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
    if(formData['email'] ==="" || emailRegx.test(formData['email']) == false) {
        isValid = false;
        emailErr.textContent="**Email is not valid..."
    }

    //Pincode validation
   
    if(formData['pin'] === ""||formData['pin'].length > 7 || formData['pin'].length <5  || /^\d+$/.test(formData['pin']) == false) {
        pinErr.textContent = "**Pincode is not valid.."
        isValid = false;
    }
    
    //Gender Validations
    let radioButtons = document.getElementsByName('gender');
    let flag = false;
    for(let radio of radioButtons) {
        if(radio.checked) {
            flag = true;
            break;
        }
    }
     if(flag == false) {
        genderErr.textContent = "**Select your gender...";
        isValid = false;

     } else {
        // console.log(document.querySelector("input[name='gender']:checked").value);
         formData["gender"] = document.querySelector("input[name='gender']:checked").value;
     }

     //Terms & Condition Validations
     
     if(formData["terms"] == false) {
        termsErr.textContent = "**Accept the terms and conditions...";
        isValid = false;
     }

     //phno
     if(formData['phno'].length != 10 ||  /^\d+$/.test(formData['phno']) == false) {
        phnoErr.textContent = "**Phone no is not valid.."
        isValid = false;
    }


    //  If valid data is filled in all fields
     
    //  if(isValid == true && selectedRow == null) {
    //     //console.log("Null")
    //     resetForm()
    //     // alert("Form Submitted Successfully")
    //     showData(formData);
    //  }
    return isValid
     
}

function ValidAndcontrolShow(formData) {
    isValid = validation(formData)
    if(isValid == true && selectedRow == null) {
        resetForm()
        // alert("Form Submitted Successfully")
        showData(formData);
     }
}

function hideError(name) {
    console.log(name)
    if(name == 'fname') {
        let fnameErr = document.getElementById('fname-err');
        fnameErr.textContent = "";
    }
    else if(name == 'password') {
        let passErr = document.getElementById('pass-err');
        passErr.textContent = "";
    }
    else if(name == "phoneNumber") {
        let phnoErr = document.getElementById('phno-err');
        phnoErr.textContent = "";
    }
    else if(name == 'email'){
        let emailErr = document.getElementById('email-err');
        emailErr.textContent = "";
    }
    else if(name == 'gender') {
        let genderErr = document.getElementById('gender-err');
        genderErr.textContent = "";
    }
    else if(name == 'pin') {
        let pinErr = document.getElementById('pin-err');
        pinErr.textContent = "";
    }
    else if(name == 'terms') {
        let termsErr = document.getElementById('terms-err');
        termsErr.textContent = "";
    }
    
    
   
}

 function showData(formData) {
     let table = document.getElementById('table');
     let tableRef = table.getElementsByTagName('tbody')[0];   //tbody's 0th index is the 'th'
    //console.log(tableRef.rows.length)                           //shows the all rows present in the tbody
    let index = tableRef.rows.length                            // index is needed to insert row that is got from the no. of rows
    var selectRow = table.insertRow(index++);  //  creating a new row,,, index is the position of the row to insert
    
    

    var cell1 = selectRow.insertCell(0);       //one cell is created
    var cell2 = selectRow.insertCell(1);
    var cell3 = selectRow.insertCell(2);
    var cell4 = selectRow.insertCell(3);
    var cell5 = selectRow.insertCell(4);
    var cell6 = selectRow.insertCell(5);
    var cell7 = selectRow.insertCell(6);
    var cell8 = selectRow.insertCell(7);
    var cell9 = selectRow.insertCell(8);
    var cell10 = selectRow.insertCell(9);
    var cell11 = selectRow.insertCell(10);

    

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

    cell11.innerHTML = '<td><button class="btnEdit"  onclick="onEdit(this,formData)">Edit</button> <button class="btnDelete" onclick="deleteCurRow(this)" id="btn2" >Delete</button></td> ';
    //'this' will send the whole content of the row

    let btnEdit = document.querySelector('.btnEdit');
    let btnDelete = document.querySelector('.btnDelete');
    btnEdit.setAttribute('class','btnEdit');
    btnDelete.setAttribute('class','btnDelete');

    resetForm();
    
 }    
 
 function onEdit(td,formData) {
    // console.log(formData)
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("landmark").value = selectedRow.cells[5].innerHTML;
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;
    document.getElementById("state").value = selectedRow.cells[7].innerHTML;
    document.getElementById("country").value = selectedRow.cells[8].innerHTML;
    document.getElementById("pin").value = selectedRow.cells[9].innerHTML;
    // updateRecord();
}
function updateRecord() {
    // selectedRow = td.parentElement.parentElement;
    
    let newFormData = {}
    
    newFormData["fname"] = document.getElementById("fname").value;
    newFormData["lname"] = document.getElementById("lname").value;
    newFormData["pass"] = document.getElementById("pass").value;
    newFormData["phno"] = document.getElementById("phno").value;
    newFormData["email"] = document.getElementById("email").value;
    newFormData["country"] = document.getElementById("country").value;
    newFormData["state"] = document.getElementById("state").value;
    newFormData["city"] = document.getElementById("city").value;
    newFormData["landmark"] = document.getElementById("landmark").value;
    newFormData["pin"] = document.getElementById("pin").value;
    newFormData["terms"] = document.getElementById("terms").value;
    console.log(selectedRow);
    if(validation(newFormData) == true) {
        selectedRow.cells[0].innerHTML = document.getElementById("fname").value;
        selectedRow.cells[1].innerHTML = document.getElementById("lname").value;
        selectedRow.cells[2].innerHTML = document.getElementById("phno").value;
        selectedRow.cells[3].innerHTML = document.getElementById("email").value;
        selectedRow.cells[5].innerHTML = document.getElementById("landmark").value;
        selectedRow.cells[6].innerHTML = document.getElementById("city").value;
        selectedRow.cells[7].innerHTML = document.getElementById("state").value;
        selectedRow.cells[8].innerHTML = document.getElementById("country").value;
        selectedRow.cells[9].innerHTML = document.getElementById("pin").value;
        resetForm();
        selectedRow = null;
    }

    
    console.log("Not checking")
    
    // selectedRow = null;
    // resetForm();
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phno").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.querySelector('#eye').removeAttribute('class','eyeAdd');
    document.getElementById("landmark").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("pin").value = "";
    //For the terms and condition part
    document.querySelector('input[type="checkbox"]').checked = false;

    //
    let radioButtons = document.getElementsByName('gender');
    for(let radio of radioButtons) {
        if(radio.checked) {
            radio.checked = false;
            break;
        }
    }
    // selectedRow = null;
}

 function deleteCurRow(td) {
    // console.log(td)
    var i = td.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);   //i is the index
 }
