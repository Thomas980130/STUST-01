document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }; // 移除多餘的括號

    fetch('https://script.google.com/macros/s/AKfychv9Lu74oo49WJZ148p7ptkHb5L_ZO01Gu__-JQNaDYL_S-gbbb-ede0aOhY2RSyj8p-S/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 確保後端返回的是 JSON
    })
    .then(data => {
        console.log('完整回傳數據:', data);
        // 結果範例:
        // { username: "test", password: "123456", spot: "景點1" }
    })
    .catch(error => {
        console.error('錯誤:', error);
        alert('提交失敗，請查看控制台錯誤訊息');
    });
}); // 補齊右大括號
