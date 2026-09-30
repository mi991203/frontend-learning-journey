const demoAccount = { username: "demo", password: "123456" };

const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector("#form-message");
const togglePassword = document.querySelector("#toggle-password");

function setFieldError(input, text) {
  input.setAttribute("aria-invalid", String(Boolean(text)));
  document.querySelector(`#${input.id}-error`).textContent = text;
}

function setMessage(text, type = "") {
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}

[username, password].forEach((input) => {
  input.addEventListener("input", () => {
    setFieldError(input, "");
    setMessage("");
  });
});

togglePassword.addEventListener("click", () => {
  const isVisible = password.type === "text";
  password.type = isVisible ? "password" : "text";
  togglePassword.textContent = isVisible ? "显示" : "隐藏";
  togglePassword.setAttribute("aria-label", isVisible ? "显示密码" : "隐藏密码");
  togglePassword.setAttribute("aria-pressed", String(!isVisible));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredUsername = username.value.trim();
  const enteredPassword = password.value;
  const missingUsername = !enteredUsername;
  const missingPassword = !enteredPassword;

  setFieldError(username, missingUsername ? "请输入账号" : "");
  setFieldError(password, missingPassword ? "请输入密码" : "");

  if (missingUsername || missingPassword) {
    setMessage("");
    (missingUsername ? username : password).focus();
    return;
  }

  if (enteredUsername === demoAccount.username && enteredPassword === demoAccount.password) {
    setMessage("登录成功，欢迎回来！", "success");
  } else {
    setMessage("账号或密码错误，请重试。", "error");
  }
});
