// 已加密的帳號密碼（SHA-256 雜湊）
// 帳號：admin → SHA256: 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918
// 密碼：admin987654321 → SHA256: 8a0a09d1cf3b16b5e1ee83d749bb7ef1c6bdfcfb79907e4c6de8f2711d64f15d
const accounts = {
  "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918":
  "8a0a09d1cf3b16b5e1ee83d749bb7ef1c6bdfcfb79907e4c6de8f2711d64f15d"
};

// 使用 Base64 編碼的 Google 試算表網址
const encodedURL = "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMVIxMzY3dUxHbGR2LXBqYTFLdGlWdjlRM1o0dE1qM21Uc3JQM3RzOFFpVVUvZWRpdD91c3A9c2hhcmluZw==";

// 文字轉 SHA-256（回傳 hex 字串）
async function hashText(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Base64 解碼函式
function decodeURL(encoded) {
  return atob(encoded);
}

// 登入驗證邏輯
async function login() {
  const userInput = document.getElementById('username').value.trim();
  const passInput = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  const hashedUser = await hashText(userInput);
  const hashedPass = await hashText(passInput);

  if (accounts[hashedUser] && accounts[hashedUser] === hashedPass) {
    // 登入成功 → 導向網址（Base64 解碼）
    const targetURL = decodeURL(encodedURL);
    window.location.href = targetURL;
  } else {
    // 登入失敗 → 顯示錯誤訊息並導回登入頁
    errorMsg.textContent = "帳號或密碼錯誤，小白會看誰亂破解";
    errorMsg.style.color = "red";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
}