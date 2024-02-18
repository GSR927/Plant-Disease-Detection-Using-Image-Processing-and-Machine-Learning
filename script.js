function authenticate(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
  
    if (username === "raakin" && password === "12345") {
      document.getElementById("message").innerHTML = "Login successful!";
      window.location.href = "index.html";
    } else {
      document.getElementById("message").innerHTML = "Invalid username or password";
    }
  }
  