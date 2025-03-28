document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hiddenValue = document.getElementById('hiddenValue').value; // ✅ 取得隱藏景點值

    const url = 'https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec'; // ✅ 替換成你的 Apps Script URL
    const data = {
        username,
        password,
        hiddenValue // ✅ 傳送景點值
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert(`登入成功！景點：${result.hiddenValue}`); // ✅ 回傳景點名稱
            window.location.href = 'index.html'; // ✅ 跳轉到報名頁面
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('登入失敗，請稍後再試');
    }
});
