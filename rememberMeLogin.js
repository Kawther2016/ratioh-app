// RD-59 "Remember Me" Option to Login

function login(email, password, rememberMe = false) {
  if (email && password) {
    const message = `User with email ${email} logged in.`;
    const remember = rememberMe ? " Session will be remembered." : "";
    return message + remember;
  } else {
    return "Email and password are required.";
  }
}

// Example usage
console.log(login("user@example.com", "password123", true));
