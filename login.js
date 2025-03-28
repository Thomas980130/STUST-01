document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
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
