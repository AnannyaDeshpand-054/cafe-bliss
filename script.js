function showAlert() {
  alert("Thank you for choosing Cafe Bliss! Online ordering coming soon!");
}

function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! We have received your message.");
    return false; // Prevents page reload
  } else {
    alert("Please fill in all fields!");
    return false;
  }
}
