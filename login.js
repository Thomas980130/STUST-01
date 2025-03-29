document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hiddenValue = "景點1"; // ✅ 固定隱藏值

    const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&hiddenValue=${encodeURIComponent(hiddenValue)}`;

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain' // ✅ 避免觸發 CORS 預檢請求
            },
            body: data
        });

        const result = await response.json();
        if (result.success) {
            alert('登入成功！');
            console.log(result);
            // ✅ 登入成功後跳轉或更新頁面
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
