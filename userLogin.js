// RD-49 User Login with Email and Password

function login(email, password) {
  if (email && password) {
    return `User with email ${email} logged in successfully.`;
  } else {
    return "Email and password are required.";
  }
}

// Example usage
console.log(login("user@example.com", "password123"));
