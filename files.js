// Get form and table elements
const form = document.getElementById('registration-form');
const table = document.getElementById('registration-entries');

// Get error message div element
const errorMessage = document.getElementById('error-message');

// Get array of existing entries from local storage or initialize it if it does not exist
let entries = JSON.parse(localStorage.getItem('entries')) || [];

// Populate table with existing entries
populateTable();

// Add event listener to form for submission
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = new Date(document.getElementById('dob').value);
  const acceptedTerms = document.getElementById('accepted-terms').checked;

  // Validate email address
  if (!validateEmail(email)) {
    errorMessage.textContent = 'Invalid email address';
    return;
  }

  // Validate age
  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    errorMessage.textContent = 'Age must be between 18 and 55';
    return;
  }

  // Create new entry object
  const entry = {
    name: name,
    email: email,
    password: password,
    dob: dob.toLocaleDateString(),
    acceptedTerms: acceptedTerms
  };

  // Add new entry to entries array
  entries.push(entry);

  // Save updated entries array to local storage
  localStorage.setItem('entries', JSON.stringify(entries));

  // Clear form
  form.reset();

  // Clear error message
  errorMessage.textContent = '';

  // Add new row to table
  addRowToTable(entry);
});

// Function to validate email address
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Function to calculate age from date of birth
function calculateAge(dob) {
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Function to add row to table
function addRowToTable(entry) {
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const passwordCell = row.insertCell(2);
  const dobCell = row.insertCell(3);
  const acceptedTermsCell = row.insertCell(4);
  nameCell.textContent = entry.name;
  emailCell.textContent = entry.email;
  passwordCell.textContent = entry.password;
  dobCell.textContent = entry.dob;
  acceptedTermsCell.textContent = entry.acceptedTerms ? 'Yes' : 'No';
}

// Function to populate table with existing entries
function populateTable() {
  for (const entry of entries) {
    addRowToTable(entry);
  }
}
