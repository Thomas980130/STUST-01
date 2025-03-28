document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };
  
    fetch('https://script.google.com/macros/library/d/1n1FvKu8ZYkeHd2aaPbtxakUC0XjeYIWjVttl8511E_jaZWtaS4J4PgDp/2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json()) // 解析 JSON 回傳
    .then(data => {
      console.log('完整回傳數據:', data);
      // 結果範例：
      // { username: "test", password: "123456", spot: "景點1" }
    })
    .catch(error => console.error('錯誤:', error));
  });