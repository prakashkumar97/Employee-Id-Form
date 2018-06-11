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
    if (validateFirstName()) {
        if (validateFullName()) {
          if(employeecode())
            {
                if(validatemobile())
                {
                 if(validateemergency())
                    {
                        if(validatemail())
                        {
                            if(validatebloodgroup())
                                {
                                   postData();
                                }
                                else
                                    {
                                        displayErrorMessageForBooldGroup();
                                    }
                        }
                        else
                            {
                                displayErrorMessageForMail();
                            }
                    }
                    else
                        {
                            displayErrorMessageForValidateemergency();
                        }
                }
                else
                    {
                        displayErrorMessageForValidateMobile();
                    }
            }
           else
            {
                displayErrorMessageForEmployeeCode();
            }
        }
        else {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } else {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }

}

function validatebloodgroup(){
 var blood=document.getElementById('bloodgroup');
  var filter=/^([ABO\AB]) $/;
  if (!filter.test(blood.value)) {
    return false;
 }
 return true;

}


function  validatemobile(){
 const mobile=$('#mobile').val();
 if(mobile === ''){
     return false;
 }
 return true;

}

function  validateemergency(){
    const mobile=$('#emeregency').val();
    if(mobile === ''){
        return false;
    }
    return true;
   
   }
   


function employeecode()
{
  const code=$('#empcode').val();
  if(code===''){
    return false;
  }
  return true;
}

function validatemail()
{
 
    var email = document.getElementById('mail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([virtusa])+\.)+([com])+$/;
    
    if (!filter.test(email.value)) {
        return false;
     }
     return true;

}
function  displayErrorMessageForBooldGroup()
{
 alert("Give the correct Blood group");

}

function displayErrorMessageForMail()
{
 alert("Give the correct mail-id");

}

function displayErrorMessageForValidateemergency()
{
 alert("Enter the emeregency contact number properly");
}

function displayErrorMessageForValidateMobile(){
 alert("Enter the mobile number");

}

function displayErrorMessageForEmployeeCode(){
alert("Enter the Employee code properly");

}
function displayErrorMessageForFirstName() {
    alert("Enter the first name");
}

function displayErrorMessageForFullName() {
    alert("Enter the full name");
}


function validateFirstName() {
    const firstName = $('#inputFirstName').val();
    if (firstName === '') {
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#inputFullName').val();
    if (fullName === '') {
        return false;
    }
    return true;
}

function postData() {
    const data = {
        firstName: $('#eFirstName').val(),
        fullName: $('#eFullName').val(),
        Designation: $('#eDesignation').val(),
        EmployeeCode: $('#eEmpcode').val(),
        BloodGroup: $('#eBloodGroup').val(),
        Reason: $('eReason').val(),
        EmployeeDate: $('#empdate').val(),
        MailID: $('#mailid').val(),
        MobileNumber: $('#mobile').val(),
        EmergencyNumber: $('#emergency').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://application-67c67.firebaseio.com/.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    alert("Form Submitted Successfully");
}