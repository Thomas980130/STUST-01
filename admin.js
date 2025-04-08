const accounts = {
    "admin": "admin987654321"

  };
  
  function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
  
    if (accounts[user] && accounts[user] === pass) {
      // 登入成功導向 STUST
      window.location.href = "https://docs.google.com/spreadsheets/d/1R1367uLGldv-pja1KtiVv9Q3Z4tMj3mTsrP3ts8QiUU/edit?usp=sharing";
    } else {
      // 顯示錯誤訊息
      errorMsg.textContent = "帳號或密碼錯誤，請不要亂破解小白會看";
      
      errorMsg.style.color = "red";
  
      // 2 秒後導向登入頁
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  }
  