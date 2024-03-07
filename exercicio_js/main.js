document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var input_A = parseInt(document.getElementById('input_A').value);
  var input_B = parseInt(document.getElementById('input_B').value);
  var messageValid = document.getElementById('messageValid');
  var messageInvalid = document.getElementById('messageInvalid');
  
  if (input_B > input_A) {
    messageValid.style.display = 'block';
    messageInvalid.style.display = 'none';
  } else {
    messageValid.style.display = 'none';
    messageInvalid.style.display = 'block';
  }
});