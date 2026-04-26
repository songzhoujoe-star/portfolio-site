function checkPwd() {
  const pwd = document.getElementById("pwd").value;

  if (pwd === "123456") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  } else {
    document.getElementById("err").innerText = "密码错误";
  }
}