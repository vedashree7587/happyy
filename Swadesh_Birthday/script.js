function login() {
  const pass = document.getElementById("password").value;
  if (pass === "833275") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("wishPage").classList.remove("hidden");
  } else {
    alert("Oops! Try the secret code again! (Hint:833275)");
  }
}