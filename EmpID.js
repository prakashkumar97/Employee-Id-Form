function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                // .width(248)
                // .height(251);
        };

         reader.readAsDataURL(input.files[0]);
    }
}
function addDetails()
{
    if (validateFirstName()) 
    {
        $('#errForFirstName').hide();
        if (validateFullName()) 
        {
            $('#errForFullName').hide();
            if(validateEmpCode())
                {
                    $("#errForEmpCode").hide();
                        if(validateEmail())
                        {
                            $("#errForEmail").hide();
                            if(validateMobile())
                            {
                                $("#errForMobile").hide();
                                if(validateEmergencyMob())
                                {
                                    $("#errForEmergency").hide();
                                    postData();
                                }else{
                                    displayErrorMessageForEmergency();
                                }
                            }else
                            {
                                displayErrorMessageForMobile();
                            }
                        }else{
                            displayErrorMessageForMail();
                        }
                   // postData();
                }else{
                    displayErrorMessageForCode();
                }
            
        }
        else 
        {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } else 
    {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }

}
function displayErrorMessageForEmergency()
{
    $("#errForEmergency").show();
}
function displayErrorMessageForMobile()
{
    $("#errForMobile").show();
}
function displayErrorMessageForMail()
{
    $("#errForEmail").show();
}
function displayErrorMessageForCode()
{
    $("#errForEmpCode").show();
}
function displayErrorMessageForFirstName()
 {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName()
 {
    $('#errForFullName').show();
}


function validateFirstName() {
    const firstName = $('#eFirstName').val();
    if (firstName === '' ) {
        return false;
    }else if(/^[A-Za-z\s]+$/.test(firstName))
    {
    return true;
    }
        
    
}


function validateFullName()
 {
    const fullName = $('#eFullName').val();
    if (fullName === '') {
        return false;
    }else if(/^[A-Za-z\s]+$/.test(fullName))
    {
    return true;
    }
}
function validateEmpCode()
{
    var code = $('#eEmpcode').val();
    
    var ex = /^[0-9]+\.?[0-9]*$/;
    if(code.length<6){
    
    if(ex.test(code) )
        {
            return true;
        }else
        {
            return false;
        }
       
    }else{
        return false;
    }
}
function validateEmail()
{
    const mail=$("#mailid").val();
    var reg= /@virtusa.com\s*$/;
    if(reg.test(mail))
    {
        return true;
    }
    else{
        return false;
    }
}
function validateMobile()
{
const mob=$("#mobile").val();
var exp=/^(\+\d{1,3}[- ]?)?\d{10}$/;
if(exp.test(mob))
{
    return true;
}else{
    return false;
}
}
function validateEmergencyMob()
{
    const mob1=$("#emergency").val();
    var exp1=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(exp1.test(mob1))
    {
        return true;
    }else{
        return false;
    }
 }

function postData() 
{
    const data = {
        firstName: $('#eFirstName').val(),
        fullName: $('#eFullName').val(),
        Designtion:$('#eDesignation').val(),
        EmployeeCode:$('#eEmpcode').val(),
        BloodGrp:$('#eBloodGroup').val(),
        ReasonsForIssue:$('#eReason').val(),
        DateofEmployment:$('#empdate').val(),
        Email:$('#mailid').val(),
        MobileNo:$('#mobile').val(),
        EmergencyMobile:$('#emergency').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://employeeid-6bd95.firebaseio.com/Employee.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    $('.span-for-errors').hide();
});
$('#Entireform').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});