document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hiddenValue = "景點1"; // ✅ 固定隱藏值

    const data = {
        username,
        password,
        hiddenValue
    };

    try {
        // 使用 fetch 發送 POST 請求
        const response = await fetch('https://script.google.com/macros/s/AKfycbw9Lu74oo49MUZl48p7ptkHb5l_ZODiGu_-JQWaDMJ_S-gbbb-ede0aOhM2RSvj8p-S/exec', {
            method: 'POST',
            mode: 'cors', // ✅ 確保跨域模式
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // 處理回應
        const result = await response.json();
        if (result.success) {
            alert('登入成功！');
            console.log(result);
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試！');
    }
});
