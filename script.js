const form = document.getElementById('registration-form');

const tableBody = document.querySelector('#registration-table tbody');

const data = JSON.parse(localStorage.getItem('formData')) || [];

function renderTableRows(data) {
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.textContent = data[i].name;
    row.appendChild(name);
    const email = document.createElement('td');
    email.textContent = data[i].email;
    row.appendChild(email);
    const password = document.createElement('td');
    password.textContent = data[i].password;
    row.appendChild(password);
    const dob = document.createElement('td');
    dob.textContent = data[i].dob;
    row.appendChild(dob);
    const acceptedTerms = document.createElement('td');
    acceptedTerms.textContent = data[i].acceptedTerms;
    row.appendChild(acceptedTerms);
    tableBody.appendChild(row);
  }
}


renderTableRows(data);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('accepted-terms').checked;

  if (!validateEmail(email)) {
    alert('Invalid email address');
    return;
  }

  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert('You must be between 18 and 55 years old');
    return;
  }

  const newRow = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    acceptedTerms: acceptedTerms
  };
  data.push(newRow);


  localStorage.setItem('formData', JSON.stringify(data));

  renderTableRows(data);

  form.reset();
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
