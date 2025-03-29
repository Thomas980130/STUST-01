document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('hiddenValue', '景點1'); // 可以根據需求設置其他值

    try {
        // 向 Google Apps Script 發送 POST 請求
        const response = await fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
            method: 'POST',
            body: formData
        });

        const result = await response.json(); // 解析 JSON 回應

        if (result.success) {
            alert('登入成功！');
            window.location.href = 'dashboard.html'; // 登入成功後跳轉到儀表板
        } else {
            alert(result.message); // 顯示錯誤訊息
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
