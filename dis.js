document.getElementById("nextBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;

    // Validate the email input before showing the password section
    if (email) {
      document.getElementById("passwordSection").style.display = "block";
      document.getElementById("submitbtn").style.display = "block";
      document.getElementById("nextBtn").style.display = "none";
    } else {
      alert("Please enter your email.");
    }
  });
