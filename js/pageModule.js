var pageModule = (function($){
    function hideError(name) {
        $("#fname").on('input',function() {
            $("#fname").removeClass('errorEffect');
            $("#fname-err").text("");
        });
       
        $("#pass").on('input',function() {
            $("#pass").removeClass('errorEffect');
            $("#pass-err").text("");
        });
        
        $("#phno").on('input',function() {
            $("#phno").removeClass('errorEffect');
            $("#phno-err").text("");
        });
        
        $("#email").on('input',function() {
            $("#email").removeClass('errorEffect');
            $("#email-err").text("");
        });
        
        $("#gender").on('input',function() {
            $("#gender").removeClass('errorEffect');
            $("#gender-err").text("");
        });
        
        $("#pin").on('input',function() {
            $("#pin").removeClass('errorEffect');
            $("#pin-err").text("");
        });
       
        $("#terms").on('input',function() {
            $("#terms").removeClass('errorEffect');
            $("#terms-err").text("");
        });
        
       
    }
    function showHiddenPassword() {
        //         //Show Password
        $('#eye').click(function() {
            let temp = $('#pass').attr('type')
            $("#pass").addClass("fullWidth");
            if ($('#pass').attr('type') === "password") {
                $('#pass').attr('type','text');
            } else {
                $('#pass').attr('type','password');;
            }
        });
    }
    function displaySubmitPopup() {
        $(".submitPopup").addClass('showPopup');
        setTimeout(function() {
            $(".submitPopup").hide();
        },1000)
    }

    function displayDeletePopup() {
        $(".deletePopup").addClass('showPopup');
    }
    function addressDropdown () {
        var countryList = {
            "India" : {
                "West Bengal" :["Kolkata","Kharagpur","Durgapur"],
                "Odisha" :["Bhubaneswar","Baleswar","Puri"],
                "Jharkhand":["Tata","Jamshedpur","Ranchi"]
           },
           "USA": {
                "California": ["Los Angeles", "San Francisco", "San Diego"],
                "Texas": ["Houston", "Dallas", "Austin"],
                "New York": ["New York City", "Buffalo", "Rochester"]
            },
            "Australia": {
                "New South Wales": ["Sydney", "Newcastle", "Wollongong"],
                "Victoria": ["Melbourne", "Geelong", "Ballarat"],
                "Queensland": ["Brisbane", "Gold Coast", "Cairns"]
            },
            "Canada": {
                "Ontario": ["Toronto", "Ottawa", "Mississauga"],
                "British Columbia": ["Vancouver", "Victoria", "Richmond"],
                "Quebec": ["Montreal", "Quebec City", "Laval"]
            }
       }
       $("#country").on('change',function(){
        // console.log($('#country :selected').text()); // there should be an space b/w '#country' and ':selected'
                //to show the states in optiions
            if($('#country :selected').text() == "India") {
                $("#state").find('option').remove().end();       //it will delete all the rows ,am deleting all the rows as if we select India first it will
                $("#state").append($(`<option selected disabled >Select State</optiion>`));
                $.each(countryList["India"],function(key,value) {
                    $("#state").append($(`<option>${key}</optiion>`));
                });

                    //to show the cities in options
                $("#state").on('change', function(){
                    let selectedState = $('#state :selected').text();
                    $("#city").find('option').remove().end();       //it will delete all the rows ,am deleting all the rows as if we select India first it will
                    $("#city").append($(`<option selected>Select City</optiion>`));

                    countryList["India"][`${selectedState}`].forEach(cityName => {
                        $("#city").append($(`<option>${cityName}</optiion>`));
                    });
                });

                
            }

            else if($('#country :selected').text() == "USA") {
                $("#state").find('option').remove().end()
                $("#state").append($(`<option selected>Select State</optiion>`));
                $.each(countryList["USA"],function(key,value) {
                    $("#state").append($(`<option>${key}</optiion>`));
                });

                $("#state").on('change', function(){
                    let selectedState = $('#state :selected').text();
                    $("#city").find('option').remove().end();       //it will delete all the rows ,am deleting all the rows as if we select India first it will
                    $("#city").append($(`<option selected>Select city</optiion>`));

                    countryList["USA"][`${selectedState}`].forEach(cityName => {
                        $("#city").append($(`<option>${cityName}</optiion>`));
                    });
                });
            }

            else if($('#country :selected').text() == "Australia") {
                $("#state").find('option').remove().end();
                $("#state").append($(`<option selected>Select State</optiion>`));
                $.each(countryList["Australia"],function(key,value) {
                    $("#state").append($(`<option>${key}</optiion>`));
                });

                $("#state").on('change', function(){
                    let selectedState = $('#state :selected').text();
                    $("#city").find('option').remove().end();       //it will delete all the rows ,am deleting all the rows as if we select India first it will
                    $("#city").append($(`<option selected>Select city</optiion>`));

                    countryList["Australia"][`${selectedState}`].forEach(cityName => {
                        $("#city").append($(`<option>${cityName}</optiion>`));
                    });
                });
            }
            else if($('#country :selected').text() == "Canada") {
                $("#state").find('option').remove().end();
                $("#state").append($(`<option>Select State</optiion>`));
                $.each(countryList["Canada"],function(key,value) {
                    $("#state").append($(`<option>${key}</optiion>`));
                });

                $("#state").on('change', function(){
                    let selectedState = $('#state :selected').text();
                    $("#city").find('option').remove().end();       //it will delete all the rows ,am deleting all the rows as if we select India first it will
                    $("#city").append($(`<option>Select City</optiion>`));

                    countryList["Canada"][`${selectedState}`].forEach(cityName => {
                        $("#city").append($(`<option>${cityName}</optiion>`));
                    });
                });
            }
            
       })
       

    }
    function init() {
        hideError();
        showHiddenPassword();
        addressDropdown();
    }
    return {
        init:init,
        displaySubmitPopup:displaySubmitPopup,
        displayDeletePopup:displayDeletePopup,
    }
})(jQuery)