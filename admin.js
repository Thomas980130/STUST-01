// 正確的 SHA256 哈希對應
const accounts = {
  // admin
  "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":
  // admin980130
  "f4acabbe5d4393455bf1729b9b3312cce3b6ed17d6e091f793f6f6ae9b1650f7"
};

// Base64 編碼的 Google 試算表網址
const encodedURL = "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMVIxMzY3dUxHbGR2LXBqYTFLdGlWdjlRM1o0dE1qM21Uc3JQM3RzOFFpVVUvZWRpdD91c3A9c2hhcmluZw==";

// SHA-256 雜湊
async function hashText(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Base64 解碼
function decodeURL(encoded) {
  return atob(encoded);
}

// 登入驗證
async function login() {
  const userInput = document.getElementById('username').value.trim();
  const passInput = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  const hashedUser = await hashText(userInput);
  const hashedPass = await hashText(passInput);

  if (accounts[hashedUser] && accounts[hashedUser] === hashedPass) {
    window.location.href = decodeURL(encodedURL);
  } else {
    errorMsg.textContent = "帳號或密碼錯誤，小白會看誰亂破解";
    errorMsg.style.color = "red";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
}
