let submissions = [];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let dob = document.getElementById('dob').value;
  let acceptedTerms = document.getElementById('accepted-terms').checked;
  let table = document.querySelector('table');
  let row = table.insertRow(-1);
  let nameCell = row.insertCell(0);
  let emailCell = row.insertCell(1);
  let passwordCell = row.insertCell(2);
  let dobCell = row.insertCell(3);
  let acceptedTermsCell = row.insertCell(4);
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  passwordCell.innerHTML = password;
  dobCell.innerHTML = dob;
  acceptedTermsCell.innerHTML = acceptedTerms ? 'Yes' : 'No';

  submissions.push({
    name: name,
    email: email,
    password: password,
    dob: dob,
    acceptedTerms: acceptedTerms
  });

  let submissionList = document.getElementById('submissions');
  let submissionItem = document.createElement('li');
  submissionItem.innerHTML = name + ' - ' + email;
  submissionList.appendChild(submissionItem);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('accepted-terms').checked = false;
});

