// ✅ 設置隱藏值
document.getElementById('hiddenValue').value = "景點1";

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('hiddenValue', document.getElementById('hiddenValue').value);

    try {
        // ✅ 使用原始 Google Apps Script 網址
        const response = await fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // 解析 JSON 回應
        console.log('Result:', result);

        if (result.success) {
            alert('登入成功！');
            window.location.href = 'dashboard.html'; // ✅ 登入成功後跳轉
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
