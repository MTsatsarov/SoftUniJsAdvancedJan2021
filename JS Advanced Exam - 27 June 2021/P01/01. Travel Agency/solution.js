window.addEventListener('load', solution);

function solution() {
  var form = document.getElementById('form');
  var submitBTn = document.getElementById('submitBTN')
  submitBTn.addEventListener('click', GetUserInfo)
  var editBtn = document.getElementById('editBTN')
  var continueBtn = document.getElementById('continueBTN')
  var ul = document.getElementById('infoPreview');

  function GetUserInfo() {
    var fullname = document.getElementById('fname').value;
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var address = document.getElementById('address').value
    var code = document.getElementById('code').value
    if (fullname != '' || email != '') {
      return;
    }
    else {
      var fullNameLi = document.createElement('li');
      fullNameLi.textContent = `FullName:` + fullname
      ul.appendChild(fullNameLi)

      var emailLi = document.createElement('li');
      emailLi.textContent = 'Email:' + email
      ul.appendChild(emailLi)

      var phoneLi = document.createElement('li');
      phoneLi.textContent = 'Phone Number:' + phone
      ul.appendChild(phoneLi)

      var addressLi = document.createElement('li');
      addressLi.textContent = 'Address:' + address
      ul.appendChild(addressLi)

      var codeLi = document.createElement('li');
      codeLi.textContent = 'Postal Code:' + code
      ul.appendChild(codeLi)

      submitBTn.disabled = true;
      editBtn.addEventListener('click', EditForm)
      editBtn.disabled = false;

      continueBtn.disabled = false
      continueBtn.addEventListener('click', SetReservation)

      form.querySelectorAll('input').forEach(x => x.id == 'submitBTN' ? x.vlaue = 'Submit' : x.value = '')
    }
    function EditForm() {
      ul.innerHTML = ''
      submitBTn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      document.getElementById('fname').value = fullname;
      document.getElementById('email').value = email;
      document.getElementById('phone').value = phone;
      document.getElementById('address').value = address;
      document.getElementById('code').value = code;

    }

    function SetReservation() {
      var blockDiv = document.getElementById('block')
      blockDiv.innerHTML = '<h3>Thank you for your reservation!</h3>'
    }
  }
}



// ⦁	On clicking the “Submit” button the information from the input fields is listed in the “preview” section. For each input field a list item is added to the “infoPreview” unordered list. 
// ⦁	The text format and order for each list item should be the same as on the second picture below.  
// ⦁	When the button is clicked, the input fields must be cleared and the “Submit” button must be disabled. At the same time the “Edit” button and the “Continue” button must be enabled. 
// ⦁	One can only submit information if the “Full Name” and “Email” input fields are not empty.  
