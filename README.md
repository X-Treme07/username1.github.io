<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="file.css">
  </head>
  <body>
    <h1><center>Registration Form</center></h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" required>
      <br>
      <label for="dob">DOB:</label>
      <input type="date" id="dob" required>
      <br>
      <label for="accepted-terms">I accept the terms and conditions</label>
      <input type="checkbox" id="accepted-terms" required>
      <br>
      <button type="submit">Submit</button>
    </form>
    <br>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>DOB</th>
          <th>Accepted terms?</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>

    <script src="files.js"></script>

    </script>
  </body>
</html>
